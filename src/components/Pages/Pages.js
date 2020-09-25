import React, { Component } from 'react';
import { Checkbox } from 'semantic-ui-react';
import Aux from '../../hoc/Auks';
import classes from './Page.module.css';
import Page1 from './Page1';
import Page2 from './Page2';
class Pages extends Component {
	state = {
		pageNumber: 1,
	};
	child1 = React.createRef();
	child2 = React.createRef();
	handleToggle = () => {
		if (this.state.pageNumber === 2) {
			this.setState({ pageNumber: 1 });
            // this.child1.current.handleUnMute()
            
		}else{
        this.setState({ pageNumber: 2 });
      
       }
	};
	render() {
		return (
			<Aux>
				<div className={classes.Pages}>
					<Checkbox
						className={classes.Checkbox}
						slider
						onChange={this.handleToggle}
					/>
				</div>
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
