import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../../../BlogPage/blogData";

type BlogSectionProps = {
  variant?: "home" | "page";
};

export default function BlogSection({ variant = "home" }: BlogSectionProps) {
  const isHome = variant === "home";
  const [posts, setPosts] = useState(blogPosts);

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

  const visiblePosts = isHome ? posts.slice(0, 3) : posts;

  return (
    <section className="w-full  py-16 ">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr,2fr]">
          <div className="space-y-6">
            
            <h2 className="text-3xl font-semibold text-[#111827] md:text-5xl">
              What&apos;s New?
            </h2>
            <p className="text-base text-[#4B5563] md:text-lg">
              Stories, insights, and updates from the team building Driver First Fi-Ne-Tech Platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={`/blog/${posts[0]?.slug}`}
                className="group inline-flex items-center gap-2 rounded-full border border-[#0F9547]/60 px-6 py-4 text-base font-semibold text-[#0F9547] transition hover:border-[#0A704A] hover:text-[#0A704A]"
              >
                View all updates
              </Link>
              
            </div>
          </div>

          <div className="divide-y divide-[#0F9547]/25 -mt-3">
            {visiblePosts.map((post) => (
              <article
                key={`${post.title}-${post.date}`}
                className="py-6 transition"
              >
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#6B7280]">
                  <span>{post.readTime}</span>
                  <span className="h-1 w-1 rounded-full bg-[#0F9547]"></span>
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-[#0F9547]"></span>
                  <span className="justify-left">By {post.createdBy}</span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-[#111827] md:text-2xl">
                      {post.title}
                    </h3>
                    {/* <div className="text-xs text-[#0F9547] font-medium">By {post.createdBy}</div> */}
                    <p className="text-sm text-[#4B5563] md:text-base">{post.excerpt}</p>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-[#0F9547]/40 px-4 py-2 text-sm font-semibold text-[#0F9547] transition hover:border-[#0A704A] hover:text-[#0A704A]"
                  >
                    Learn More
                    <span className="text-base transition group-hover:translate-x-0.5">&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
