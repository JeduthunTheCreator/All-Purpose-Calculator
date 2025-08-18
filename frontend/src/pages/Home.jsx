import React from 'react';
import { Link } from 'react-router-dom';
import Squares from '../components/Squares';
import "../styles/Home.css";

const Home = () => {
    return (
        <div className="relative min-h-[100dvh] w-full overflow-hidden home-page">
            {/* Background animation*/}
            <div className="absolute inset-0 w-full h-full background">
                <Squares
                    speed={0.5}
                    squareSize={50}
                    direction="diagonal"
                    borderColor="#000080"
                    hoverFillColor="#36454F"
                />
            </div>

            {/* Page Content*/}
            <div className="relative flex flex-col items-center justify-center page-content">
                <div className="welcome-text text-center">
                    <h1>All-Purpose Calculator</h1>
                    <p>Welcome to the All-Purpose Calculator! Select a calculation type from the menu to get started.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 navbar">
                    <Link to="/scientific">
                        Scientific Calculator
                    </Link>

                    <Link to="/binary">
                        Binary Calculator
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;