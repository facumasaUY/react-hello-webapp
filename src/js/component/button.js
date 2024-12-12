import React from "react";
import { Link } from "react-router-dom";    

export const Button = () =>{
    return (
        <div className="position-relative">
        <div className="position-absolute top-0 end-0">
            <Link to="/create">
                <button className="btn btn-success">Create New Contact</button>
            </Link>
        </div>
    </div>
    )
}