# README

## Notes

Mistake:
```javascript
// WRONG => this is NOT an assignment
this.setState = ({count: this.state.count + 1});

// RIGHT
this.setState({count: this.state.count + 1});
```