import React from "react";
import "./home.css";

export class Home extends React.Component {
	constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            songs: [
                {
                    title: "South Park",
                    id: "south-park",
                    author: "Kyle",
                    url:
                        "https://assets.breatheco.de/apis/sound/files/cartoons/songs/south-park.mp3"
                },
                {
                    title: "Thunder Cats",
                    id: "thundercats",
                    author: "Moonra",
                    url:
                        "https://assets.breatheco.de/apis/sound/files/cartoons/songs/thundercats.mp3"
                },
                {
                    title: "X-Men",
                    id: "x-men",
                    author: "Profesor",
                    url:
                        "https://assets.breatheco.de/apis/sound/files/cartoons/songs/x-men.mp3"
                }
            ],
            currentSong = " "
        };
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
                <div className="songs">
                    <ol> 
                        {this.state.songs}
                    </ol>
                </div>
			</div>
		);
	}
}

