import React from "react";
import small_logo from "../assets/Small_Little_Lemon.png"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <section>
                <article>
                    <img src={small_logo} alt="Little Lemon Logo" />
                </article>

                <nav>
                    <h3>Navigation</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/booking">Reservations</Link></li>
                    </ul>
                </nav>

                <article>
                    <h3>Contact</h3>
                    <ul>
                        <li>123 Food St, Chicago</li>
                        <li>(555) 123-4567</li>
                        <li>info@littlelemon.com</li>
                    </ul>
                </article>

                <article>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="https://facebook.com">Facebook</a></li>
                        <li><a href="https://instagram.com">Instagram</a></li>
                        <li><a href="https://twitter.com">Twitter</a></li>
                    </ul>
                </article>
            </section>
        </footer>
    );
}

export default Footer;