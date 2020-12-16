import React from "react";
import "./home.css";

export class Home extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div classNameName="container">
				<nav
					className="navbar navbar-light"
					style={{
						borderBottomStyle: "solid",
						borderWidth: "1px",
						borderColor: "rgb(50, 50, 50)"
					}}>
					<div className="container-fluid">
						<form className="d-flex">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
								style={{ borderRadius: "5em" }}
							/>
						</form>
					</div>
				</nav>
				<ol>
					<li
						style={{
							borderBottomStyle: "solid",
							borderWidth: "1px",
							borderColor: "rgb(50, 50, 50)"
						}}>
						cow
					</li>
					<li
						style={{
							borderBottomStyle: "solid",
							borderWidth: "1px",
							borderColor: "rgb(50, 50, 50)"
						}}>
						pie
					</li>
					<li
						style={{
							borderBottomStyle: "solid",
							borderWidth: "1px",
							borderColor: "rgb(50, 50, 50)"
						}}>
						pot
					</li>
				</ol>
			</div>
		);
	}
}
