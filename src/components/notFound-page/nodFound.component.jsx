import React from 'react'
import './notFound.styles.scss'
import { Link } from 'react-router-dom'
export default function NotFound() {
    return (
        <div className="not-found">
            <span>404 Not Found This Page</span>
            <button><Link to="/shaqaale">Return to Home Page</Link></button>
        </div>
    )
}
