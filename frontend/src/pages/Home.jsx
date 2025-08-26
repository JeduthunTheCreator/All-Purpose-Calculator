import React from 'react';
import { Link } from 'react-router-dom';
import Squares from '../components/Squares';
import "../styles/Home.css";

const Home = () => {
    return (
        <div className="relative min-h-[100dvh] w-full home-page">
            {/* Background animation*/}
            <div className="absolute inset-0 w-full h-full background">
                <Squares
                    speed={0.5}
                    squareSize={50}
                    direction="diagonal"
                    borderColor="#271E37"
                    hoverFillColor="#222222"
                />
            </div>

            {/* Page Content*/}
            <div className="relative flex flex-col items-center justify-center min-h-screen page-content">

                <div>
                    <p className="rounded-full px-[20px] py-[10px] border border-white label"> 🧮 All-Purpose Calculator</p>
                </div>

                <div>
                    <p className="text-[30px] text">
                        Welcome to the All-Purpose Calculator!
                        <br />
                        Select a calculation type from the menu to get started.
                    </p>
                </div>

                <div className="grid grid-cols-2 navbar">
                    <Link to="/scientific" className="rounded-full px-[20px] py-[12px] border button">
                        Scientific Calculator
                    </Link>

                    <Link to="/binary" className="rounded-full px-[20px] py-[12px] border button">
                        Binary Calculator
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;