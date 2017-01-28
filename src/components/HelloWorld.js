import React, { Component } from 'react';

class HelloWorld extends Component {
	render() {
		return (
			<div>
				<h2>HelloWorld</h2>
				<p>Hello, {this.props.name}!</p>
				<p>The name above is inserted into this component via this.props.name.</p>
			</div>
		);
	}
}

export default HelloWorld;