import React, { useEffect, useState } from 'react';
import Footer from './Footer'; // Import the Footer component
 // Import specific styles for Trending
import { FaSearch } from 'react-icons/fa';

const Trending = () => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const API_KEY = "770380ed819a4dd6ad7ed7f909842fff";

    const getData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            if (jsonData.articles) {
                setNewsData(jsonData.articles);
            } else {
                setNewsData([]);
                setError('No articles found.');
            }
        } catch (err) {
            setError(err.message);
            setNewsData([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="news-page">
            <nav className="navbar">
                <div className="logo">
                    <h1>FlashHeadlines</h1>
                </div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/all-news">All News</a></li>
                    <li><a href="/trending">Trending</a></li>
                </ul>
            </nav>

            <div className="hero">
                <p className="headline">Trending News</p>
            </div>

            <div className="news-cards">
                {loading && <p className="loading">Loading...</p>}
                {error && <p className="error">{error}</p>}
                {newsData.length > 0 ? (
                    newsData.map((article, index) => (
                        <div key={index} className="card">
                            <img src={article.urlToImage} alt={article.title} />
                            <div className="content">
                                <a href={article.url} className="title" target="_blank" rel="noopener noreferrer">{article.title}</a>
                                <p>{article.description}</p>
                                <button onClick={() => window.open(article.url, '_blank')}>Read More</button>
                            </div>
                        </div>
                    ))
                ) : !loading && !error && <p className="no-news">No news articles found</p>}
            </div>

            {/* Include the Footer Component */}
            <Footer />
        </div>
    );
};

export default Trending;
