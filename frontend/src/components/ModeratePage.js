"use client"
import { useState, useEffect } from 'react';
import styles from './ModeratePage.module.css';

function ModerationPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchArticles = async () => {
      try {
        const response = await fetch('http://localhost:8082/api/moderate/pending');
        const data = await response.json();
        setArticles(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch articles:', error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleApprove = async (id) => {
    try {
      await fetch(`http://localhost:8082/api/moderate/approve/${id}`, {
        method: 'PUT'
      });
      
      setArticles(articles.filter(article => article._id !== id));
    } catch (error) {
      console.error('Failed to approve article:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      await fetch(`http://localhost:8082/api/moderate/reject/${id}`, {
        method: 'PUT'
      });
      // Remove rejected article from the list
      setArticles(articles.filter(article => article._id !== id));
    } catch (error) {
      console.error('Failed to reject article:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Moderation Page</h2>

      {loading ? (
        <p>Loading articles...</p>
      ) : (
        articles.map(article => (
          <div key={article._id} className={styles.article}>
            <h3>{article.title}</h3>
            <p><strong>Author:</strong> {article.author}</p>
            <p><strong>Journal:</strong> {article.journal}</p>
            <p><strong>Year:</strong> {article.year}</p>
            <button onClick={() => handleApprove(article._id)}>Approve</button>
            <button onClick={() => handleReject(article._id)}>Reject</button>
          </div>
        ))
      )}
    </div>
  );
}

export default ModerationPage;