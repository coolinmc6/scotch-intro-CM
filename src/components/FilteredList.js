import React, { Component } from 'react';

const parent = "col-xs-12 col-sm-8";
const notes = "col-xs-12 col-sm-4";
const style = {
	height: '500px'
}

class FilteredList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allItems: [
					"apple", "banana", "cheesecake", "dumplings", "empanada", "funnel cake", "grapes", "hamburger",
					"pasta", "raisins"
				],
			items: '',
			term: ''
		}

		this.getSearch = this.getSearch.bind(this);
		this.filerList = this.filterList.bind(this);
		this.addTerm = this.addTerm.bind(this);
	}
	

	componentWillMount() {
		this.setState({
			items: this.state.allItems
		})
	}

	filterList(term) {
		var updatedList = this.state.allItems;
		updatedList = updatedList.filter((item) => {
			return item.toLowerCase().search(
    		term.toLowerCase()) !== -1;
    	});
    	this.setState({ items: updatedList })
		
	}

	getSearch(term){
		// this.setState({ term: term })
		this.setState({ term })
		this.filterList(term)
	}

	addTerm() {
		console.log(this.state.term)
		this.setState({ allItems: [...this.state.allItems,this.state.term]})
		this.setState({ term: ''})
		this.setState({ items: this.state.allItems })
	}	

	

	render() {
		return (
			<div style={style}>
				<div className={parent}> 
					<h2>FilteredList</h2>
					<input 	placeholder="Search" 
							onChange={event => this.getSearch(event.target.value)} 
							value={this.state.term}/>
					&nbsp; &nbsp;
					<button className="btn btn-success"
							onClick={(event) => this.addTerm()}
						>Add Item</button>
						<br />
					<ul className="list-group">
						{ this.state.items.map((item) => {
							return <li className="list-group-item" key={item}>{item}</li>
						}) }
					</ul>


				</div>
				<div className={notes}>
					<ul>
					</ul>
				</div>
			</div>
		);
	}
}

export default FilteredList;