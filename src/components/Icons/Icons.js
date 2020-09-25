import React, { Component } from 'react';
import classes from './Icons.module.css'
import {
	u1F601,
	u1F603,
	u1F604,
	u1F606,
	u1F607,
	u1F609,
	u1F60A,
	u1F60B,
	u1F60C,
	u1F60D,
	u1F60E,
	u1F60F,
	u1F610,
	u1F617,
	u1F61B,
	u1F621,
    u1F624,
    u1F627,
    u1F62D,
    u1F633,
} from 'react-icons-kit/noto_emoji_regular/';
import Icon from 'react-icons-kit';
const Icons = (props) => {
	const ics = [
        null,
		u1F601,
		u1F603,
		u1F604,
		u1F606,
		u1F607,
		u1F609,
		u1F60A,
		u1F60B,
		u1F60C,
		u1F60D,
		u1F60E,
		u1F60F,
		u1F610,
		u1F617,
		u1F61B,
		u1F621,
        u1F624,
        u1F627,
        u1F62D,
        u1F633,
	];
	const IconName = ics[props.id];
	return <Icon size='2em' className={classes.Icon} icon={IconName}/>
};

export default Icons 
