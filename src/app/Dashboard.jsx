import React from "react";
import '../components/Style.css'
import Navbar from "../components/NavBar";
import NewsList from "../components/NewsList";

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <h1 className="dashboard">Dashboard</h1>
            <NewsList />
        </>
    )
}

export default Dashboard