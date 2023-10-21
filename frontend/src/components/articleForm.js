"use client";
import { useState } from 'react';
import axios from 'axios';
import styles from './articleForm.module.css';

export default function ArticleForm() {
  const [message, setMessage] = useState(null);
  const [article, setArticle] = useState({
    author: '',
    title: '',
    journal: '',
    year: '',
    volume: '',
    number: '',
    pages: '',
  })

   const onChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  }
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8082/api/articles', article)
      .then((res) => {
        setArticle({
          author: '',
          title: '',
          journal: '',
          year: '',
          volume: '',
          number: '',
          pages: '',
          status: 'waiting',
        });
      })
      .catch((err) => {
        setMessage('An unexpected error occurred.');
        console.log('Error in articleForm.js:', err);
        console.log('article:', article);
      });
  }


  return (
    <div className={styles.outerContainer}>
      <div className={styles.articleFormContainer}>
        <h2>Research Article Suggestion Form</h2>
        {message && <div className={styles.message}>{message}</div>}
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="author">Author(s):</label>
            <input
              type="text"
              id="author"
              name="author"
              value={article.author}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"  // name required for useState to work properly
              value={article.title}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="journal">Journal:</label>
            <input
              type="text"
              id="journal"
              name="journal"
              value={article.journal}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="year">Year:</label>
            <input
              type="text"
              id="year"
              name="year"
              value={article.year}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="volume">Volume:</label>
            <input
              type="text"
              id="volume"
              name="volume"
              value={article.volume}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="number">Number:</label>
            <input
              type="text"
              id="number"
              name="number"
              value={article.number}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="pages">Pages:</label>
            <input
              type="text"
              id="pages"
              name="pages"
              value={article.pages}
              onChange={onChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
