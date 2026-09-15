import { useParams, useNavigate } from 'react-router-dom'
import { blogPosts } from '../data/blog'
import { motion } from 'framer-motion'

export default function BlogPostPage() {
  const { postId } = useParams()
  const navigate = useNavigate()
  const post = blogPosts.find(p => p.id === postId)

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="blog-post-container">
          <h1>Post not found</h1>
          <button
            onClick={() => navigate('/')}
            className="details-back-btn"
          >
            ← Back to Portfolio
          </button>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className="blog-post-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="blog-post-container">
        <button
          onClick={() => navigate('/')}
          className="details-back-btn"
        >
          ← Back to Portfolio
        </button>
        
        <header className="blog-post-header">
          <h1 className="blog-post-title">{post.title}</h1>
          <div className="blog-post-meta">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <div className="blog-tags" style={{ marginTop: '16px' }}>
            {post.tags.map((tag) => (
              <span key={tag} className="blog-tag">{tag}</span>
            ))}
          </div>
        </header>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </motion.div>
  )
}
