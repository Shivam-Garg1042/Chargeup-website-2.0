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
    // Optionally, you can remove this effect if you don't fetch from API
    // fetch("/api/blogs?status=published")
    //   .then((res) => (res.ok ? res.json() : Promise.reject()))
    //   .then((data) => {
    //     if (Array.isArray(data) && data.length) {
    //       setPosts(data);
    //     }
    //   })
    //   .catch(() => {
    //     setPosts(blogPosts);
    //   });
    // For now, just use local blogPosts
    setPosts(blogPosts);
  }, []);

  useEffect(() => {
    const fallback = posts[0] || defaultBlogPost;
    if (!slug) {
      setActivePost(fallback);
      return;
    }
    // Find the blog post by slug from local data
    const found = posts.find((b) => b.slug === slug);
    setActivePost(found || fallback);
  }, [slug, posts]);

  const renderContentBlock = (line: string, index: number) => {
    if (line.startsWith("## ")) {
      return (
        <h2
          key={`${index}-${line}`}
          className=" text-xl text-[#111827] md:text-[1.5rem]"
        >
          {line.slice(3)}
        </h2>
      );
    }

    if (line.startsWith("> ")) {
      return (
        <blockquote
          key={`${index}-${line}`}
          className="rounded-2xl border-l-4 border-[#0F9547] bg-[#ECFFF3] px-4 py-4 text-[1.05rem] font-medium italic text-[#14532D]"
        >
          {line.slice(2)}
        </blockquote>
      );
    }

    if (line.startsWith("- ")) {
      return (
        <div key={`${index}-${line}`} className="flex items-start gap-3 pl-1">
          <span className="mt-[0.65rem] h-2 w-2 rounded-full bg-[#0F9547]" />
          <p className="flex-1">{line.slice(2)}</p>
        </div>
      );
    }

    if (/^\*\*.*\*\*$/.test(line)) {
      return (
        <p
          key={`${index}-${line}`}
          className="inline-block rounded-full bg-[#0F9547]/10 px-4 py-2 text-sm font-bold tracking-[0.04em] text-[#0A704A] md:text-base"
        >
          {line.slice(2, -2)}
        </p>
      );
    }

    if (/^\*\*[^*]+:\*\*\s+/.test(line)) {
      const [, label = "", rest = ""] =
        line.match(/^\*\*([^*]+):\*\*\s+(.*)$/) ?? [];

      return (
        <p key={`${index}-${line}`}>
          <span className="font-bold text-[#111827]">{label}:</span> {rest}
        </p>
      );
    }

    return <p key={`${index}-${line}`}>{line}</p>;
  };

  return (
    <main className="min-h-screen ">
      <section className="mx-auto w-full max-w-7xl px-4 py-8  md:py-16">
        <div className="grid md:gap-10 lg:grid-cols-[2fr,1fr] gap-2">
          <article className="rounded-2xl bg-white/50 p-8 shadow-[0_20px_45px_rgba(13,137,72,0.18)] backdrop-blur">
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 mb-2 gap-2">
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#6B7280]">
                <span>{activePost.readTime}</span>
                <span className="h-1 w-1 rounded-full bg-[#0F9547]"></span>
                <span>{activePost.date}</span>
                <span className="h-1 w-1 rounded-full bg-[#0F9547]"></span>
                <span>By {activePost.createdBy}</span>
              </div>
              <div className="sm:ml-4 sm:self-auto self-start sm:w-auto">
                <button
                  onClick={() => {
                    const url = window.location.href;
                    if (navigator.share) {
                      navigator.share({
                        title: activePost.title,
                        text: activePost.excerpt,
                        url,
                      });
                    } else {
                      navigator.clipboard.writeText(url);
                      alert('Blog link copied to clipboard!');
                    }
                  }}
                  className="flex items-center gap-2 rounded-full border border-[#0F9547]/60 px-3 py-1 text-sm font-semibold text-[#0F9547] bg-white shadow hover:bg-[#ECFFF3] transition w-full sm:w-auto justify-center"
                  aria-label="Share this blog"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-9A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21h9a2.25 2.25 0 002.25-2.25V15M18 15l3-3m0 0l-3-3m3 3H9" />
                  </svg>
                  <span className="inline sm:hidden">Share</span>
                  {/* <span className="hidden sm:inline">Share</span> */}
                </button>
              </div>
            </div>
            <h1 className="mt-2 text-3xl font-semibold text-[#111827] md:text-4xl">
              {activePost.title}
            </h1>
            {/* <div className="mt-2 text-sm text-[#0F9547] font-medium">
              By {activePost.createdBy}
            </div> */}

            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden mt-4">
              <img
                src={activePost.image}
                alt={activePost.title}
                className="w-full h-full object-cover"
              />
            </div>

            
            <div className="mt-6 space-y-4 text-base leading-7 text-[#4B5563] md:text-lg">
              {activePost.content.map((line, index) =>
                renderContentBlock(line, index)
              )}
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
                    to={`/blog/${post.slug}`}
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
