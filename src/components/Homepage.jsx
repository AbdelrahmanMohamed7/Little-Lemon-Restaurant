import React from "react"
import logo_food from "../assets/restauranfood.jpg"
import { Link } from "react-router-dom"

function Homepage() {
    return (
        <main className="hero-grid">
            <h1>Welcome to Little Lemon</h1>
            <p>Mediterranean flavors in the heart of Chicago.</p>
            <Link to="/booking" className="hero-button">
                Reserve a Table
            </Link>
            <img src={logo_food} alt="a food pic"/>
        </main>
    )
}

export default Homepage;