import React, { Component } from 'react';
import classes from './Button.module.css';
import useSound from 'use-sound';

class button extends Component {
	constructor(props) {
		super(props);

		this.state = {
			play: false,
		};
        
		this.url =
			this.props.url;
        this.audio = new Audio(this.url);
		this.audio.addEventListener(
			'ended',
			function () {
				this.currentTime = 0;
				this.play();
			},
			false
		);
		this.audio.addEventListener(
			'paused',
			function () {
				this.currentTime = 0;
				this.play();
			},
			false
		);
		this.togglePlay = this.togglePlay.bind(this);
	}

	togglePlay() {
		const wasPlaying = this.state.play;
		this.setState({
			play: !wasPlaying,
		});

		if (wasPlaying) {
			this.audio.pause();
			this.currentTime = 0;
		} else {
			this.currentTime = 0;
			this.audio.load();
			this.audio.play();
		}
	}

	render() {
		return (
			<div>
				<button
					id="audioBtn"
					onClick={this.togglePlay}
					className={[
						classes.Button,
						classes[this.state.play]
					].join(' ')}
				>
					1
				</button>
			</div>
		);
	}
}

export default button;
