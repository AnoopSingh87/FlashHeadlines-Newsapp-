import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Card from './Card';
import Footer from './Footer'; // Import the Footer component
import './Newsapp.css'; // Ensure you have the CSS file imported
import { FaSearch, FaNewspaper, FaHotjar } from 'react-icons/fa'; // Importing icons

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const API_KEY = "770380ed819a4dd6ad7ed7f909842fff";

    const getData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            if (jsonData.articles) {
                let dt = jsonData.articles.slice(0, 10);
                setNewsData(dt);
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
    }, [search]);

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="news-app">
            {/* Navigation Bar */}
            <nav className="navbar">
                <div className="logo">
                    <h1>FlashHeadlines</h1>
                </div>
                <ul className="nav-links">
                    <li><Link to="/all-news"><FaNewspaper /> All News</Link></li>
                    <li><Link to="/trending"><FaHotjar /> Trending</Link></li>
                </ul>
                <div className="searchBar">
                    <input 
                        type="text" 
                        placeholder="Search News" 
                        value={search} 
                        onChange={handleInput} 
                    />
                    <button onClick={getData}><FaSearch /></button>
                </div>
            </nav>

            {/* Main Section */}
            <div className="hero">
                <p className="headline">Stay Updated with FlashHeadlines</p>
            </div>

            {/* Category Buttons */}
            <div className="categoryBtn">
                <button onClick={() => setSearch('sports')}>Sports</button>
                <button onClick={() => setSearch('politics')}>Politics</button>
                <button onClick={() => setSearch('entertainment')}>Entertainment</button>
                <button onClick={() => setSearch('health')}>Health</button>
                <button onClick={() => setSearch('fitness')}>Fitness</button>
            </div>

            {/* News Cards Section */}
            <div className="news-cards">
                {loading && <p className="loading">Loading...</p>}
                {error && <p className="error">{error}</p>}
                {newsData.length > 0 ? <Card data={newsData} /> : !loading && !error && <p className="no-news">No news articles found</p>}
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Newsapp;
