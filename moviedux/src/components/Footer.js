import React from "react";
import '../styles.css'

export default function Footer() {
    const currentYeary = new Date().getFullYear();
    return(
        <footer className='footer'>
            <p className="footer-text">
               &copy; {currentYeary} moviedux
            </p>
        </footer>
    );
}