import React, { Component } from 'react';

class StateComponent extends Component {
	constructor(props){
		super(props);
		this.state = { count: 7 }
	}
	
	render() {
		return (
			<div>
				<h2>StateComponent</h2>
				<p>My initial count is: {this.state.count}</p>
			</div>
		);
	}
}

export default StateComponent;