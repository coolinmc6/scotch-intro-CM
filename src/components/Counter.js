import React, { Component } from 'react';

const countStyle = {
	color: 'red',
	fontSize: '16px',
	fontWeight: '700'
}

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 }

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		// WRONG => this.setState = ({count: this.state.count + 1});
		this.setState({count: this.state.count + 1});
	}

	render() {
		return (
			<div>
				<h2>Counter</h2>
				<div>Count: <span style={countStyle}>{this.state.count}</span> &nbsp;&nbsp;
					<button className='btn btn-primary'
							onClick={this.handleClick}
					>+</button>
					<p>I got tripped up on the setState; it is NOT an assignment (e.g. this.setState = ...).</p>
				</div>
			</div>
		);
	}
}

export default Counter;