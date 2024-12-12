import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="navbar navbar-light bg-light mb-3 position-relative">

			<h1>My Contact List</h1>
			{/* <div className="position-absolute top-0 end-0">
				<Link to="/create">
					<button className="btn btn-success">Create New Contact</button>
				</Link>
			</div> */}
		</div>
	);
};
