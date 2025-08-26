"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { client } from "@/lib/sanity";
import { blogQueries } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";

interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  publishedAt: string;
  featuredImage: string;
  featuredImageAlt: string;
  author: {
    name: string;
    avatar: string;
  };
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(6);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const [allPosts, count] = await Promise.all([
          client.fetch(blogQueries.getAllPosts),
          client.fetch(blogQueries.getPostCount)
        ]);
        
        setPosts(allPosts);
        setTotalPosts(count);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleLoadMore = () => {
    setDisplayCount(prev => Math.min(prev + 6, totalPosts));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('sr-RS', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-normal mb-4 text-gray-900 font-garamond">
              Blog
            </h2>
            <p className="text-xl text-gray-600 font-garamond">
              Učitavanje...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-normal mb-4 text-gray-900 font-garamond">
            Insights
          </h2>
  
        </motion.div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 font-garamond">
              There are no blog posts at the moment. Check back later!
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {posts.slice(0, displayCount).map((post, index) => (
                <motion.article
                  key={post._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    {post.featuredImage ? (
                      <Image
                        src={urlFor(post.featuredImage).width(400).height(300).url()}
                        alt={post.featuredImageAlt || post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        width={400}
                        height={300}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400 font-garamond">No image</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                    
                      <div>
                        <p className="text-sm text-gray-600 font-garamond">
                          {post.author?.name || ''}
                        </p>

                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 font-garamond line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 font-garamond line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-black text-white px-6 py-2 rounded-none font-garamond hover:bg-gray-800 transition-colors duration-300"
                      onClick={() => window.location.href = `/blog/${post.slug.current}`}
                    >
                      Read More
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </div>

            {displayCount < totalPosts && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLoadMore}
                  className="bg-white border-2 border-black text-black px-8 py-3 font-garamond hover:bg-black hover:text-white transition-all duration-300"
                >
                  Load More
                </motion.button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Blog; 