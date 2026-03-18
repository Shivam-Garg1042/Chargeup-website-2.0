import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts, defaultBlogPost } from "./blogData";

export default function ChargeupBlog() {
  const { slug } = useParams();
  const [posts, setPosts] = useState(blogPosts);
  const [activePost, setActivePost] = useState(defaultBlogPost);
  const updatesRef = useRef<HTMLDivElement | null>(null);

  const handleScrollDown = () => {
    if (!updatesRef.current) {
      return;
    }

    updatesRef.current.scrollBy({ top: 220, behavior: "smooth" });
  };

  useEffect(() => {
    fetch("/api/blogs?status=published")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        if (Array.isArray(data) && data.length) {
          setPosts(data);
        }
      })
      .catch(() => {
        setPosts(blogPosts);
      });
  }, []);

  useEffect(() => {
    const fallback = posts[0] || defaultBlogPost;
    if (!slug) {
      setActivePost(fallback);
      return;
    }

    fetch(`/api/blogs/${slug}`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        if (data && data.slug) {
          setActivePost(data);
        } else {
          setActivePost(fallback);
        }
      })
      .catch(() => {
        setActivePost(fallback);
      });
  }, [slug, posts]);

  return (
    <main className="min-h-screen ">
      <section className="mx-auto w-full max-w-7xl px-4 py-8  md:py-16">
        <div className="grid md:gap-10 lg:grid-cols-[2fr,1fr] gap-2">
          <article className="rounded-2xl bg-white/50 p-8 shadow-[0_20px_45px_rgba(13,137,72,0.18)] backdrop-blur">
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#6B7280]">
              <span>{activePost.readTime}</span>
              <span className="h-1 w-1 rounded-full bg-[#0F9547]"></span>
              <span>{activePost.date}</span>
            </div>
            <h1 className="mt-4 text-3xl font-semibold text-[#111827] md:text-4xl">
              {activePost.title}
            </h1>

            <img
              src={activePost.image}
              alt={activePost.title}
              className="h-64 w-full rounded-2xl object-cover mt-4"
            />

            <p className="mt-4 text-base text-[#4B5563] md:text-lg">
              {activePost.excerpt}
            </p>
            
            <div className="mt-6 space-y-4 text-base leading-7 text-[#4B5563] md:text-lg">
              {activePost.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <aside className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[#111827]">All updates</h2>
              <Link
                to="/chargeup-blog"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F9547]"
              >
                Latest
              </Link>
            </div>
            <div
              ref={updatesRef}
              className="no-scrollbar mt-5 max-h-[600px] divide-y divide-[#0F9547]/20 overflow-y-auto pr-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {posts.map((post) => {
                const isActive = post.slug === activePost.slug;

                return (
                  <Link
                    key={post.slug}
                    to={`/chargeup-blog/${post.slug}`}
                    className={`block py-4 transition ${
                      isActive
                        ? "text-[#0F9547]"
                        : "text-[#111827] hover:text-[#0F9547]"
                    }`}
                  >
                    
                    <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6B7280]">
                      {post.readTime}
                    </div>
                    <h3 className="mt-2 text-base font-semibold">{post.title}</h3>
                    <p className="mt-1 text-sm text-[#4B5563]">{post.excerpt}</p>
                  </Link>
                );
              })}
            </div>
            <button
              type="button"
              onClick={handleScrollDown}
              aria-label="Scroll down updates"
              className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0F9547]/40 text-[#0F9547] transition hover:border-[#0A704A] hover:text-[#0A704A]"
            >
              <span className="text-lg">&#8595;</span>
            </button>
            
          </aside>
        </div>
      </section>
    </main>
  );
}
