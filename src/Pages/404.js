import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => (
    <main className="_404">
        <div className="container">
            <h1>404.</h1>
            <p>Page not found! Let's get you back to safety.</p>
            <Link to="/">Back To Home</Link>
        </div>
    </main>
); export default NotFound;