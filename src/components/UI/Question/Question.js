import React from 'react';
import classes from './Question.module.css';
const question = (props) => (
	<div className={classes.questionWrapper}>
		<div className={classes.question}>
			<div className={classes.borderTop}></div>
			<div className={classes.borderLeft}></div>
			<div className={classes.textLabel}>
				<p>{props.children}</p>
			</div>
		</div>
        <div className={classes.borderRight}></div>
        <div className={classes.borderBottom}></div>
        <div className={classes.questionShadow}></div>
	</div>
);

export default question;
