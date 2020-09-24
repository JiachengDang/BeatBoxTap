import React, { Component } from 'react';
import classes from './Button.module.css';
import useSound from 'use-sound';
import WAAClock from 'waaclock';
class button extends Component {
	state = {
		play: false,
	};

	componentDidMount() {
		this.context = new window.AudioContext();
		this.clock = new WAAClock(this.context);
	}
	handlePlay = () => {
		if (this.state.play) {
			
				this.currentTime = 0;
				this.audio.load();
				this.audio.play();
			
		}
	};
	handlePlayPress = () => {
		if (!this.state.play) {
			this.setState({
				play: !this.state.play,
			});
			this.clock.start();
			this.event = this.clock
				.callbackAtTime(
					this.handlePlay,
					0,
				)
				.repeat(5.3);
		} else {
			this.setState({
				play: !this.state.play,
			});
			this.audio.pause();
			this.clock.stop();
			this.event.clear();
			this.event = null;
		}
	};

	// togglePlay() {
	// 	// if (wasPlaying) {
	// 	// 	this.audio.pause();
	// 	// 	this.currentTime = 0;
	// 	// } else {
	// 	// 	this.currentTime = 0;
	// 	// 	this.audio.load();
	// 	// 	this.audio.play();
	// 	// }
	// }

	render() {
	
		this.url = this.props.url;
		this.audio = new Audio(this.url);

		this.audio.addEventListener(
			'ended',
			function () {
				this.currentTime = 0;
				this.play();
			},
			false
		);
		// this.audio.addEventListener(
		// 	'paused',
		// 	function () {
		// 		this.currentTime = 0;
		// 		this.play();
		// 	},
		// 	false
		// );
		// this.togglePlay = this.togglePlay.bind(this);
		return (
			<div>
				<button
					id="audioBtn"
					onClick={this.handlePlayPress}
					className={[classes.Button, classes[this.state.play]].join(
						' '
					)}
				>
					1
				</button>
			</div>
		);
	}
}

export default button;
