"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { client } from "@/lib/sanity";
import { blogQueries } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity";

interface SearchPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  featuredImage: string;
  featuredImageAlt: string;
}

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SearchPost[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchPosts = async () => {
      if (searchTerm.trim().length < 2) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const searchResults = await client.fetch(blogQueries.searchPosts, {
          searchTerm: searchTerm.trim(),
        });
        setResults(searchResults);
      } catch (error) {
        console.error("Error searching posts:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(searchPosts, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  const handleResultClick = (slug: string) => {
    window.location.href = `/blog/${slug}`;
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white w-full max-w-2xl mx-4 rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="p-6 border-b border-gray-200">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pretražite blog postove..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-black font-garamond text-lg"
                  autoFocus
                />
                <button
                  onClick={onClose}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {loading ? (
                <div className="p-6 text-center">
                  <p className="text-gray-600 font-garamond">Searching...</p>
                </div>
              ) : searchTerm.trim().length < 2 ? (
                <div className="p-6 text-center">
                  <p className="text-gray-600 font-garamond">
                  Enter at least 2 characters to search.
                  </p>
                </div>
              ) : results.length === 0 ? (
                <div className="p-6 text-center">
                  <p className="text-gray-600 font-garamond">
                  No results for &quot;{searchTerm}&quot;
                  </p>
                </div>
              ) : (
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-4 font-garamond">
                    Found {results.length} result(s)
                  </p>
                  {results.map((post) => (
                    <motion.div
                      key={post._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center space-x-4 p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                      onClick={() => handleResultClick(post.slug.current)}
                    >
                      <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded">
                        {post.featuredImage ? (
                          <img
                            src={urlFor(post.featuredImage).width(64).height(64).url()}
                            alt={post.featuredImageAlt || post.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-400 text-xs">Nema slike</span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 font-garamond truncate">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 font-garamond line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay; 