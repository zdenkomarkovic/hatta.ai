"use client";

import { client } from "@/lib/sanity";
import { blogQueries } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await client.fetch(blogQueries.getPostBySlug, {
    slug: await params.slug,
  });

  if (!post) {
    notFound();
  }


  return (
    <>
     
      <article className="min-h-screen bg-white">
        {/* Back Button */}
    
     

        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <Link
            href="/#blog"
            className="absolute top-4 left-4 text-sm md:top-6 md:left-20 md:text-xl flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-300 font-garamond z-20"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Go back</span>
          </Link>
          {post.featuredImage ? (
            <Image
              src={urlFor(post.featuredImage).width(1200).height(600).url() || ''}
              alt={post.featuredImageAlt || post.title}
              className="w-full h-full object-cover"
              width={1200}
              height={600}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 font-garamond text-xl">Nema slike</span>
            </div>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-6">
              <h1 className="text-4xl md:text-6xl font-normal mb-4 font-garamond">
                {post.title}
              </h1>
              <div className="flex items-center justify-center space-x-4 text-lg font-garamond">
                {post.author?.avatar && (
                  <img
                    src={urlFor(post.author.avatar).width(40).height(40).url()}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full"
                  />
                )}
                <span>{post.author?.name || ''}</span>
  
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="prose prose-lg max-w-none font-garamond">
            <PortableText
              value={post.body}
              components={{
                block: {
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-semibold text-gray-900 mb-6 font-garamond">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-garamond">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 font-garamond">
                      {children}
                    </h3>
                  ),
                  normal: ({ children }) => (
                    <p className="text-gray-700 mb-4 font-garamond leading-relaxed text-xl">
                      {children}
                    </p>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4 font-garamond">
                      {children}
                    </blockquote>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc list-inside mb-4 text-gray-700 font-garamond">
                      {children}
                    </ul>
                  ),
                  number: ({ children }) => (
                    <ol className="list-decimal list-inside mb-4 text-gray-700 font-garamond">
                      {children}
                    </ol>
                  ),
                },
                listItem: ({ children }) => (
                  <li className="mb-2 font-garamond">{children}</li>
                ),
              }}
            />
          </div>
        </div>
      </article>
    </>
  );
} 