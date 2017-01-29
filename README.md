# README

## Notes

- to access functions, you need to bind it in the constructor and call it using {this.function}

```javascript
constructor(props) {
  super(props);
  this.state = { count: 0 }
  
  // This is what allows you to use your handleClick method
  this.handleClick = this.handleClick.bind(this);
}
// this is the method itself
handleClick() {
  this.setState({count: this.state.count + 1});
}
// in the render() method:
<button onClick={this.handleClick}> + </button>
```




BEWARE:
```javascript
// WRONG => this is NOT an assignment
this.setState = ({count: this.state.count + 1});

// RIGHT
this.setState({count: this.state.count + 1});
```

Scenario: Grab the value of an input element

- Unlike jQuery, where you'd just do:
```javascript
$('#search-bar').on('click', function(){
  var term = $(this).val;
})
```
- ...I need to do it a little differently.  I need to already "have" it meaning that when I
click 'submit' or 'add', I don't have to grab it, my app can just use the value it has already stored.  
In my list example, that's what I do.  These are the steps to 'grab' the value of an input element:
  1. Create a method that, when called, records the value of whatever the user has inputted.
  That value should be recorded in a state property.  In my FilteredList component, the method
  is getSearch(term) and its argument is the value of the input.

  ```javascript
  getSearch(term){
    // this.setState({ term: term }) -> can be replaced with the ES6 syntax below
    this.setState({ term })
  }
  ```

  1. Bind the method in your constructor so that you can actually use it. 

  ```javascript
  this.getSearch = this.getSearch.bind(this);
  // I don't quite know what this does but I can't use getSearch without calling it as this.getSearch
  // and this.getSearch won't work without the line above
  ```

  1. Call the method whenever the user changes the value of the input, i.e. they type something!

  ```javascript
  <input  placeholder="Search" 
      onChange={event => this.getSearch(event.target.value)} 
      value={this.state.term}/>

  // Between the onChange curly braces is a little ES6 where 'event =>' is really '(event) =>'  
  // What I'm doing is calling this.getSearch and the value I'm passing it is the value of the 
  // input 'event.target.value'.  LEARN THIS...I've been seeing it a lot
  ```

  1. STATUS: At this point, whenever a user types something, it calls our getSearch() method and updates
  our component's state so that this.state.term always contains whatever they are looking for or
  for this more general case, what they are trying to input.

  1. Create a method that 'submits' or 'adds' the term when the user clicks a button.

  ```javascript
  addTerm() {
    this.setState({ allItems: [...this.state.allItems,this.state.term]})
  } 
  // In this example, I am using the spread operator to update the allItems property which is an
  // array of all my list items.  
  // This appears to be the syntax: [...current_array, value_to_add]; brackets, dots, current_array, value to add
  ```

  1. Bind that method in the constructor

  ```javascript
  // in the constructor(props) method:
  this.addTerm = this.addTerm.bind(this);
  ```

  1. Create the event handler.  Similar to the last one but we don't need to pass any arguments, we already
  have the value of what they are adding/submitting in 'this.state.term'

  ```javascript
  <button className="btn btn-success"
      onClick={(event) => this.addTerm()}
    >Add Item</button>
  ```









