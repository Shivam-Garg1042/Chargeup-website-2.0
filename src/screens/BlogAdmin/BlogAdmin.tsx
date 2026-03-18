import { useEffect, useMemo, useState } from "react";

type BlogPost = {
  _id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
  status: "draft" | "published";
};

type BlogForm = {
  id?: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
  status: "draft" | "published";
};

const emptyForm: BlogForm = {
  slug: "",
  title: "",
  date: "",
  readTime: "",
  excerpt: "",
  content: "",
  image: "",
  status: "draft",
};

const toParagraphs = (value: string) =>
  value
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

const toContentText = (content: string[]) => content.join("\n\n");

export default function BlogAdmin() {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [form, setForm] = useState<BlogForm>(emptyForm);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("blogAdminToken");
    if (stored) {
      setAuthToken(stored);
    }
  }, []);

  useEffect(() => {
    if (!authToken) {
      return;
    }

    fetch("/api/admin/blogs", {
      headers: { Authorization: `Basic ${authToken}` },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Unable to load blogs");
        }
        return res.json();
      })
      .then((data: BlogPost[]) => {
        setPosts(data);
      })
      .catch(() => {
        setStatusMessage("Failed to load blogs. Check credentials.");
      });
  }, [authToken]);

  const selectedPost = useMemo(
    () => posts.find((post) => post._id === form.id),
    [posts, form.id],
  );

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    const token = btoa(`${username}:${password}`);
    sessionStorage.setItem("blogAdminToken", token);
    setAuthToken(token);
    setStatusMessage("");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("blogAdminToken");
    setAuthToken(null);
    setPosts([]);
    setForm(emptyForm);
  };

  const handleSelectPost = (post: BlogPost) => {
    setForm({
      id: post._id,
      slug: post.slug,
      title: post.title,
      date: post.date,
      readTime: post.readTime,
      excerpt: post.excerpt,
      content: toContentText(post.content),
      image: post.image,
      status: post.status,
    });
  };

  const handleNewPost = () => {
    setForm({ ...emptyForm });
  };

  const handleChange = (
    field: keyof BlogForm,
    value: string | BlogForm["status"],
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    if (!authToken) {
      return;
    }

    setIsSaving(true);
    setStatusMessage("");

    const payload = {
      slug: form.slug,
      title: form.title,
      date: form.date,
      readTime: form.readTime,
      excerpt: form.excerpt,
      content: toParagraphs(form.content),
      image: form.image,
      status: form.status,
    };

    const isUpdate = Boolean(form.id);
    const endpoint = isUpdate
      ? `/api/admin/blogs/${form.id}`
      : "/api/admin/blogs";

    const method = isUpdate ? "PUT" : "POST";

    try {
      const res = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${authToken}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Save failed");
      }

      const saved = await res.json();
      setPosts((prev) => {
        if (isUpdate) {
          return prev.map((post) => (post._id === saved._id ? saved : post));
        }
        return [saved, ...prev];
      });
      setForm({
        id: saved._id,
        slug: saved.slug,
        title: saved.title,
        date: saved.date,
        readTime: saved.readTime,
        excerpt: saved.excerpt,
        content: toContentText(saved.content),
        image: saved.image,
        status: saved.status,
      });
      setStatusMessage("Saved successfully.");
    } catch (error) {
      setStatusMessage("Failed to save. Check required fields.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!authToken || !form.id) {
      return;
    }

    if (!window.confirm("Delete this blog post?")) {
      return;
    }

    const res = await fetch(`/api/admin/blogs/${form.id}`, {
      method: "DELETE",
      headers: { Authorization: `Basic ${authToken}` },
    });

    if (res.ok) {
      setPosts((prev) => prev.filter((post) => post._id !== form.id));
      setForm({ ...emptyForm });
      setStatusMessage("Deleted.");
    } else {
      setStatusMessage("Delete failed.");
    }
  };

  const handleUpload = async (file: File) => {
    if (!authToken) {
      return;
    }

    const data = new FormData();
    data.append("image", file);

    const res = await fetch("/api/admin/uploads", {
      method: "POST",
      headers: { Authorization: `Basic ${authToken}` },
      body: data,
    });

    if (!res.ok) {
      setStatusMessage("Image upload failed.");
      return;
    }

    const response = await res.json();
    handleChange("image", response.url);
  };

  if (!authToken) {
    return (
      <main className="min-h-screen bg-[#F5FFF6] px-4 py-12">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-8 shadow-[0_20px_45px_rgba(13,137,72,0.12)]">
          <h1 className="text-2xl font-semibold text-[#111827]">
            Blog Admin Login
          </h1>
          <p className="mt-2 text-sm text-[#4B5563]">
            Use the admin credentials configured on the server.
          </p>
          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Username"
              className="w-full rounded-lg border border-[#0F9547]/20 px-4 py-2 text-sm"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className="w-full rounded-lg border border-[#0F9547]/20 px-4 py-2 text-sm"
              required
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-[#0F9547] px-4 py-2 text-sm font-semibold text-white"
            >
              Sign in
            </button>
            {statusMessage ? (
              <p className="text-xs text-red-500">{statusMessage}</p>
            ) : null}
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5FFF6] px-4 py-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-[#111827]">
              Blog Admin
            </h1>
            <p className="text-sm text-[#4B5563]">
              Create, edit, publish, or delete blog posts.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleNewPost}
              className="rounded-lg border border-[#0F9547]/30 px-4 py-2 text-sm font-semibold text-[#0F9547]"
            >
              New Post
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg bg-[#111827] px-4 py-2 text-sm font-semibold text-white"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr,1.4fr]">
          <section className="rounded-2xl bg-white p-6 shadow-[0_18px_40px_rgba(13,137,72,0.12)]">
            <h2 className="text-lg font-semibold text-[#111827]">Posts</h2>
            <div className="mt-4 max-h-[520px] space-y-3 overflow-y-auto pr-2">
              {posts.map((post) => (
                <button
                  key={post._id}
                  type="button"
                  onClick={() => handleSelectPost(post)}
                  className={`w-full rounded-xl border px-4 py-3 text-left transition ${
                    selectedPost?._id === post._id
                      ? "border-[#0F9547] bg-[#ECFFF3]"
                      : "border-[#E5E7EB] hover:border-[#0F9547]/40"
                  }`}
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6B7280]">
                    {post.readTime} · {post.status}
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-[#111827]">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#4B5563]">{post.date}</p>
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-[0_18px_40px_rgba(13,137,72,0.12)]">
            <h2 className="text-lg font-semibold text-[#111827]">Editor</h2>
            <div className="mt-4 space-y-4">
              <input
                type="text"
                value={form.title}
                onChange={(event) => handleChange("title", event.target.value)}
                placeholder="Title"
                className="w-full rounded-lg border border-[#0F9547]/20 px-4 py-2 text-sm"
              />
              <input
                type="text"
                value={form.slug}
                onChange={(event) => handleChange("slug", event.target.value)}
                placeholder="Slug (optional)"
                className="w-full rounded-lg border border-[#0F9547]/20 px-4 py-2 text-sm"
              />
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  value={form.date}
                  onChange={(event) => handleChange("date", event.target.value)}
                  placeholder="Date (e.g. 02 Dec 2025)"
                  className="w-full rounded-lg border border-[#0F9547]/20 px-4 py-2 text-sm"
                />
                <input
                  type="text"
                  value={form.readTime}
                  onChange={(event) => handleChange("readTime", event.target.value)}
                  placeholder="Read time (e.g. 5 Mins Read)"
                  className="w-full rounded-lg border border-[#0F9547]/20 px-4 py-2 text-sm"
                />
              </div>
              <textarea
                value={form.excerpt}
                onChange={(event) => handleChange("excerpt", event.target.value)}
                placeholder="Excerpt"
                className="w-full rounded-lg border border-[#0F9547]/20 px-4 py-2 text-sm"
                rows={3}
              />
              <textarea
                value={form.content}
                onChange={(event) => handleChange("content", event.target.value)}
                placeholder="Content (separate paragraphs with a blank line)"
                className="w-full rounded-lg border border-[#0F9547]/20 px-4 py-2 text-sm"
                rows={8}
              />
              <div className="grid gap-4 md:grid-cols-[1fr,auto]">
                <input
                  type="text"
                  value={form.image}
                  onChange={(event) => handleChange("image", event.target.value)}
                  placeholder="Image URL (auto-filled on upload)"
                  className="w-full rounded-lg border border-[#0F9547]/20 px-4 py-2 text-sm"
                />
                <label className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-[#0F9547]/30 px-4 py-2 text-sm font-semibold text-[#0F9547]">
                  Upload
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(event) => {
                      const file = event.target.files?.[0];
                      if (file) {
                        handleUpload(file);
                      }
                    }}
                  />
                </label>
              </div>
              {form.image ? (
                <img
                  src={form.image}
                  alt="Preview"
                  className="h-40 w-full rounded-2xl object-cover"
                />
              ) : null}
              <div className="flex items-center gap-3">
                <label className="text-sm font-semibold text-[#111827]">
                  Status
                </label>
                <select
                  value={form.status}
                  onChange={(event) =>
                    handleChange("status", event.target.value as BlogForm["status"])
                  }
                  className="rounded-lg border border-[#0F9547]/20 px-3 py-2 text-sm"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={isSaving}
                  className="rounded-lg bg-[#0F9547] px-5 py-2 text-sm font-semibold text-white disabled:opacity-60"
                >
                  {isSaving ? "Saving..." : "Save"}
                </button>
                {form.id ? (
                  <button
                    type="button"
                    onClick={handleDelete}
                    className="rounded-lg border border-red-200 px-5 py-2 text-sm font-semibold text-red-600"
                  >
                    Delete
                  </button>
                ) : null}
              </div>
              {statusMessage ? (
                <p className="text-sm text-[#0F9547]">{statusMessage}</p>
              ) : null}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
