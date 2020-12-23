import React from "react";

export class Song extends React.Component {
	constructor() {
		super();
		this.player = null;
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
			currentSong: 0
		};
	}
	playSong = i => {
		this.state.songs.map((song, index) => {
			if (index == i) {
				this.player.src = song.url;
				this.player.play();
				this.setState({ currentSong: index });
			} else if (i > index) {
				index = -1;
				this.setState({ currentSong: index });
				this.player.play();
			}
		});
		this.playButton.style.display = "none";
		this.pauseButton.style.display = "inline";
	};

	pauseSong = i => {
		this.state.songs.map((song, index) => {
			if (index == i) {
				this.player.src = song.url;
				this.player.pause();
			}
		});
		this.playButton.style.display = "inline";
		this.pauseButton.style.display = "none";
	};

	shuffle = () => {
		var randomizer = Math.floor(Math.random() * this.state.songs);
		this.setState({ currentSong: randomizer });
		this.player.play();
	};

	render() {
		return (
			<div>
				<div className="row">
					<ul className="nav flex-column sideBar col-1">
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								<i className="fas fa-ellipsis-h" />
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<i className="fas fa-chevron-left" /> Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<i className="far fa-window-restore" /> Browse
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<i className="fas fa-broadcast-tower" /> Radio
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link disabled"
								href="#"
								tabIndex="-1"
								aria-disabled="true">
								Made For You
							</a>
						</li>
					</ul>
					<div className="mainPage col-11">
						<nav className="navbar navbar-light bg-light bg-transparent">
							<div className="container-fluid">
								<form className="d-flex">
									<input
										className="form-control me-2 empty"
										type="search"
										placeholder="&#xf002; Search"
										aria-label="Search"
										style={{
											borderRadius: "1em"
											// fontFamily: "Arial, FontAwesome"
										}}
									/>
								</form>
							</div>
						</nav>
						<ol className="list-group list-group-flush">
							{this.state.songs.map((song, index) => {
								return (
									<li
										className="list-group-item list"
										key={index}>
										<span
											ref={el =>
												(this.playSideButton = el)
											}>
											<i
												onClick={() =>
													this.playSong(index)
												}
												className="fas fa-play-circle"
											/>
										</span>
										<span style={{ display: "none" }}>
											<i
												onClick={() =>
													this.pauseSong(index)
												}
												className="fas fa-pause-circle"
											/>
										</span>
										{index + 1 + "."}{" "}
										{song.author + " - " + song.title}
									</li>
								);
							})}
						</ol>
					</div>
				</div>
				<div className="fixed-bottom controls">
					<span className="d-flex justify-content-start">
						{this.state.currentSong}
					</span>
					<div className="d-flex justify-content-center">
						<span>
							<a
								onClick={() =>
									this.playSong(this.state.currentSong - 1)
								}>
								<i className="fas fa-step-backward" />
							</a>
						</span>
						<span ref={el => (this.playButton = el)}>
							<a
								onClick={() =>
									this.playSong(this.state.currentSong)
								}>
								<i className="far fa-play-circle" />
							</a>
						</span>
						<span
							style={{ display: "none" }}
							ref={el => (this.pauseButton = el)}>
							<a
								onClick={() =>
									this.pauseSong(this.state.currentSong)
								}>
								<i className="far fa-pause-circle" />
							</a>
						</span>
						<span>
							<a
								onClick={() =>
									this.playSong(this.state.currentSong + 1)
								}>
								<i className="fas fa-step-forward" />
							</a>
						</span>
					</div>
					<audio
						src={this.state.songs[0].url}
						ref={el => (this.player = el)}
						// controls
					/>
				</div>
			</div>
		);
	}
}
