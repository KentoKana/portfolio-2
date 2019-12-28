import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => (
    <section className="404">
        <div className="container">
            <h1>404.</h1>
            <Link to="/">Back To Home</Link>
        </div>
    </section>
); export default NotFound;