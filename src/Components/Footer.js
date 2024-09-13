import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { FaTwitter, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <h2>FlashHeadlines</h2>
                    <p>Stay updated with the latest news from around the world. We bring you the most trending and important headlines.</p>
                </div>
                <div className="footer-middle">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/all-news">All News</a></li>
                        <li><a href="/trending">Trending</a></li>
                        <li><a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">News API</a></li>
                    </ul>
                </div>
                <div className="footer-right">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a> {/* Added GitHub link */}
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </div>
                    <div className="newsletter">
                        <h3>Subscribe to Our Newsletter</h3>
                        <div className="newsletter-input">
                            <input type="email" placeholder="Enter your email" />
                            <button><AiOutlineMail /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} FlashHeadlines. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
