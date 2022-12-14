import React from "react";
import './gif.css'
import { Link } from "wouter";

export default function Gif({ title, id, url }) {
    return (
        <div className="Gif" >
            <Link to={`/gif/${id}`} className='Gif-link'>
                <h4>{title}</h4>
                <img src={url} alt={title} />
            </Link>
        </div>
    )
}