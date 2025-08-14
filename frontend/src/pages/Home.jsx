import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-page">
            <h1>All-Purpose Calculator</h1>
            <p>Welcome to the All-Purpose Calculator! Select a calculation type from the menu to get started.</p>
            <div>
                <ul>
                  <li><Link to="/scientific">Scientific Calculator</Link></li>
                  <li><Link to="/binary">Binary Calculator</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Home;