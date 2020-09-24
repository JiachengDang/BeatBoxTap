import React, { Component } from 'react';
import classes from './Page.module.css';
import Button from '../UI/Button/Button';
import Aux from '../../hoc/Auks';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Howl, Howler } from 'howler';
class Page extends Component {
	state = {};

	urls = [
		'1_lead_a.ogg',
		'2_deux_a.ogg',
		'3_kosh_a.ogg',
		'4_shpok_a.ogg',
		'5_tom_a.ogg',
		'6_nouana_a.ogg',
		'7_scratch_a.ogg',
		'8_trill_a.ogg',
		'9_bass_a.ogg',
		'10_uh_a.ogg',
		'11_nugu_a.ogg',
		'12_guit_a.ogg',
		'13_tromp_a.ogg',
		'14_pouin_a.ogg',
		'15_tung_a.ogg',
		'16_aoun_a.ogg',
		'17_hum_a.ogg',
		'18_get_a.ogg',
		'19_tellme_a.ogg',
		'20_make_a.ogg',
		'bonus-santa.ogg',
	];
	render() {
		let ur = 'https://www.incredibox.com/webapp/asset-v1/sound/ogg/';
		const sound = new Howl({
			src: [
				ur + this.urls[1],
				ur + this.urls[2],
				ur + this.urls[3],
				ur + this.urls[4],
				ur + this.urls[5],
			],
        });
        sound.play();
		return (
			<Aux>
				<ButtonGroup size="lg">
					<Button url={ur + this.urls[1]}>abc</Button>
					<Button url={ur + this.urls[2]}>abc</Button>
					<Button url={ur + this.urls[3]}>abc</Button>
					<Button url={ur + this.urls[4]}>abc</Button>
					<Button url={ur + this.urls[5]}>abc</Button>
				</ButtonGroup>
			</Aux>
		);
	}
}

export default Page;
