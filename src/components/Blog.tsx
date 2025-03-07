import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    {
      title: 'The Future of Decentralized Racing',
      excerpt:
        'Explore how blockchain technology is revolutionizing the racing industry.',
      date: 'March 1, 2024',
      image:
        'https://images.unsplash.com/photo-1541348263662-e068662d82af?auto=format&fit=crop&q=80',
    },
    {
      title: 'Understanding FXF Tokenomics',
      excerpt:
        'A deep dive into the economics behind the Fast X Furious ecosystem.',
      date: 'February 28, 2024',
      image:
        'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80',
    },
    {
      title: 'Community Racing Events',
      excerpt: 'Join our upcoming virtual racing tournaments and win prizes.',
      date: 'February 27, 2024',
      image:
        'https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent">
            Latest News
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-800 rounded-xl overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <time className="text-sm text-gray-500">{post.date}</time>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;