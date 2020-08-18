import React from 'react'
import { Link } from 'react-router-dom'


export default function CreditsButton(){

    return (
    <div className="red-button">
        <Link to="/credits" className="btn text-white" role="button">About Us</Link>
    </div>
    )
}