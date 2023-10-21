"use client";
import React, { useEffect, useState } from 'react';
import styles from './AnalysisPage.module.css';

function AnalysisPage() {
    const [approvedArticles, setApprovedArticles] = useState([]);
    
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);


    const [selectedArticle, setSelectedArticle] = useState(null);
    const [analysisText, setAnalysisText] = useState('');

    useEffect(() => {
    
    const fetchArticles = async () => {
        try {
            console.log('Beginning to try');
          const response = await fetch('http://localhost:8082/api/moderate/approved');
          const data = await response.json();
          setArticles(data);
          setLoading(false);
          console.log('Data:', data)
          console.log('Articles:', articles)

        } catch (error) {
          console.error('Failed to fetch articles:', error);
          setLoading(false);
        }
    };

    fetchArticles();
  }, []);

    return (
        <div className={styles.container}>
        <div className={styles.analysis_page}>
            <h2>Analysis Page</h2>
            {console.log('Beginning to try')}
 
{loading ? (
        <p>Loading articles...</p>
      ) : (
        articles.map(article => (
          <div key={article._id} className={styles.article}>
            <h3>{article.title}</h3>
            <p><strong>Author:</strong> {article.author}</p>
            <p><strong>Journal:</strong> {article.journal}</p>
            <p><strong>Year:</strong> {article.year}</p>
            <button onClick={() => handleApprove(article._id)}>Add Analysis</button>
          </div>
        ))
      )}
        </div>
        </div>
    );
}

export default AnalysisPage;
