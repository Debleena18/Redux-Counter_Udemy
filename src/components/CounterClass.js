import {Component} from 'react';
import classes from './Counter.module.css';
import {connect} from 'react-redux'; 
//It is mainly use in Class Based comp to connect to redux

class CounterClass extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

//It is a func that receives redux state and returns an {} where keys are available as props to comp, here counter.
const mapStateToProps = state => {
  return {
    counter: state.counter
  };
}

//It dispatch an action to redux store
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
