import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <div>
                    <div>
                        <h1>Digital Marketing</h1>
                    </div>
                    <p>
                        We are a full-service digital agency with offices in New York, Belgrade and Kosovska Mitrovica. Our vision is to create the best online performance for all of our clients. Our mission is to transform the digital presence of small businesses and find the best strategy to be online.
                    </p>
                </div>
                <div>
                    <h1>Company</h1>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/test">Test takers</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>Subscribe</h1>

                    <div>
                        <input
                            type="email"
                            className=""
                            placeholder="Your Email Address"
                        />
                        <button>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
