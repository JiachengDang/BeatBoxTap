import React, { Component } from 'react';
import classes from './Page.module.css';
import Aux from '../../hoc/Auks';
import { Howl} from 'howler';
import WAAClock from 'waaclock';
import m1 from '../../assets/Sound/1/1_lead_a.ogg';
import m2 from '../../assets/Sound/1/2_deux_a.ogg';
import m3 from '../../assets/Sound/1/3_kosh_a.ogg';
import m4 from '../../assets/Sound/1/4_shpok_a.ogg';
import m5 from '../../assets/Sound/1/5_tom_a.ogg';
import m6 from '../../assets/Sound/1/6_nouana_a.ogg';
import m7 from '../../assets/Sound/1/7_scratch_a.ogg';
import m8 from '../../assets/Sound/1/8_trill_a.ogg';
import m9 from '../../assets/Sound/1/9_bass_a.ogg';
import m10 from '../../assets/Sound/1/10_uh_a.ogg';
import m11 from '../../assets/Sound/1/11_nugu_a.ogg';
import m12 from '../../assets/Sound/1/12_guit_a.ogg';
import m13 from '../../assets/Sound/1/13_tromp_a.ogg';
import m14 from '../../assets/Sound/1/14_pouin_a.ogg';
import m15 from '../../assets/Sound/1/15_tung_a.ogg';
import m16 from '../../assets/Sound/1/16_aoun_a.ogg';
import m17 from '../../assets/Sound/1/17_hum_a.ogg';
import m18 from '../../assets/Sound/1/18_get_a.ogg';
import m19 from '../../assets/Sound/1/19_tellme_a.ogg';
import m20 from '../../assets/Sound/1/20_make_a.ogg';
import n1 from '../../assets/Sound/3/drum1.ogg';
import n2 from '../../assets/Sound/3/drum2.ogg';
import n3 from '../../assets/Sound/3/drum3.ogg';
import n4 from '../../assets/Sound/3/drum4.ogg';
import n5 from '../../assets/Sound/3/drum5.ogg';
import n6 from '../../assets/Sound/3/effet1.ogg';
import n7 from '../../assets/Sound/3/effet2.ogg';
import n8 from '../../assets/Sound/3/effet3.ogg';
import n9 from '../../assets/Sound/3/effet4.ogg';
import n10 from '../../assets/Sound/3/effet5.ogg';
import n11 from '../../assets/Sound/3/melo1.ogg';
import n12 from '../../assets/Sound/3/melo2.ogg';
import n13 from '../../assets/Sound/3/melo3.ogg';
import n14 from '../../assets/Sound/3/melo4.ogg';
import n15 from '../../assets/Sound/3/melo5.ogg';
import n16 from '../../assets/Sound/3/voix1.ogg';
import n17 from '../../assets/Sound/3/voix2.ogg';
import n18 from '../../assets/Sound/3/voix3.ogg';
import n19 from '../../assets/Sound/3/voix4.ogg';
import n20 from '../../assets/Sound/3/voix5.ogg';
import Icons from '../Icons/Icons';

class Page extends Component {
	state = {
			style: 2,
			play: [
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
			],
			playing: [
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
				false,
			],
		};
	
	
		
	

	
	ur = 'src/assets/Sound/1/';

	componentDidMount() {
	
		this.context = new window.AudioContext();
		this.clock = new WAAClock(this.context);
		this.clock.start();
		this.event = this.clock
			.callbackAtTime(this.handleStart, 0)
			.repeat(this.state.style === 1 ? 5.3 : 8);
	}
	
	handleStart = () => {
		this.handlePlay(1);
		this.handlePlay(2);
		this.handlePlay(3);
		this.handlePlay(4);
		this.handlePlay(5);
		this.handlePlay(6);
		this.handlePlay(7);
		this.handlePlay(8);
		this.handlePlay(9);
		this.handlePlay(10);
		this.handlePlay(11);
		this.handlePlay(12);
		this.handlePlay(13);
		this.handlePlay(14);
		this.handlePlay(15);
		this.handlePlay(16);
		this.handlePlay(17);
		this.handlePlay(18);
		this.handlePlay(19);
		this.handlePlay(20);
	};
	handlePlay = (ID) => {
		this.sound = new Howl({
			src: [this.urls[ID]],
			autoplay: true,
			mute: !this.state.play[ID],
		});
		let playing = [...this.state.playing];
		let nplaying = playing[ID];
		nplaying = this.state.play[ID];
		playing[ID] = nplaying;
		this.setState({
			playing: playing,
		});
	};
	handlePlayPress = (ID) => {
		let play = [...this.state.play];
		let nplay = play[ID];
		nplay = !nplay;
		play[ID] = nplay;
		this.setState({
			play: play,
		});
	};
	componentWillUnmount(){
		this.handleMute()
	}
	

	handleMute= () => {
		this.sound.mute(true);
		this.clock.stop();
		this.event.clear();
		this.event = null;
	
	}
	render() {

		this.urls =
			this.state.style === 1
				? [
						null,
						m1,
						m2,
						m3,
						m4,
						m5,
						m6,
						m7,
						m8,
						m9,
						m10,
						m11,
						m12,
						m13,
						m14,
						m15,
						m16,
						m17,
						m18,
						m19,
						m20,
				  ]
				: [
						null,
						n1,
						n2,
						n3,
						n4,
						n5,
						n6,
						n7,
						n8,
						n9,
						n10,
						n11,
						n12,
						n13,
						n14,
						n15,
						n16,
						n17,
						n18,
						n19,
						n20,
				  ];
		const IDs = [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
		].map((ID) => (
			<button
				key={ID}
				onClick={() => this.handlePlayPress(ID)}
				className={[
					classes.Button,
					classes[this.state.play[ID]],
					classes['m' + this.state.playing[ID]],
					classes['v' + this.state.style],
				].join(' ')}
			>
				<Icons id={ID}></Icons>
			</button>
		));
		return (
			<Aux>
				<div
					className={[
						classes.Page,
						classes['v' + this.state.style],
					].join(' ')}
				>
					{' '}
					
					{IDs}
				</div>
			</Aux>
		);
	}
}

export default Page;
