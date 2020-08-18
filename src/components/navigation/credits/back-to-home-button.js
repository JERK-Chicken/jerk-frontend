import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function BackToHome(){
    return (
        <Link to={"/"}>
            <Button style={{float: 'right'}} color="success">Back to Home</Button>
        </Link>
    )
}