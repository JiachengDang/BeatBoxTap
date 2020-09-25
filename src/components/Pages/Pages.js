import React, { Component } from 'react';
import { Checkbox } from 'semantic-ui-react';
import Aux from '../../hoc/Auks';
import classes from './Page.module.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Modal from '../UI/Modal/Modal';
import { Button, Icon } from 'semantic-ui-react';

class Pages extends Component {
	state = {
		show: false,
		pageNumber: 1,
	};
	child1 = React.createRef();
	child2 = React.createRef();
	handleToggle = () => {
		if (this.state.pageNumber === 2) {
			this.setState({ pageNumber: 1 });
			// this.child1.current.handleUnMute()
		} else {
			this.setState({ pageNumber: 2 });
		}
	};
	render() {
		const Tool = (
			<Aux>
				<div className={classes.Pages}>
					<Checkbox
						className={classes.Checkbox}
						slider
						onChange={this.handleToggle}
					/>
				</div>
				<div className={classes.menu}>
					<Icon
                    style={{cursor:'pointer'}}
                        onClick={()=>this.setState({show:true})}
						size="big"
						name="bars"
						corner="top right"
						color="grey"
					/>
				</div>
			</Aux>
		);
		const sceneTop = (
			<Aux>
				<h2>BeatBoxTap</h2>
				<h3>Raise the volume and enjoy!</h3>
				<p>
					Voiced by{' '}
					<a target="_blank" href="https://www.incredibox.com/">
						Incredibox
					</a>
				</p>
				<p>
					Create by{' '}
					<a
						target="_blank"
						href="https://www.instagram.com/djcixtynine/"
					>
						DJ69
					</a>
				</p>
				<Button
					target="_blank"
					href="https://github.com/Lempickax/BeatBoxTap"
					color="white"
				>
					<Icon compact="true" size="big" name="github" />
					Github
				</Button>
			</Aux>
		);

		return (
			<Aux>
				
				<Modal
					modalClosed={() => this.setState({ show: false })}
					show={this.state.show}
					style={{ color: '#f9f7e8' }}
				>
					{sceneTop}
				</Modal>
                {Tool}
				{this.state.pageNumber === 1 ? (
                    
					<Page1 ref={this.child1}></Page1>
				) : (
					<Page2 ref={this.child2}></Page2>
				)}
			</Aux>
		);
	}
}

export default Pages;
