import React, { Component } from 'react';
import { connect } from 'react-redux';

const addAction = { type: 'ADD' };
const removeAction = { type: 'REMOVE' };
const addAction10 = { type: 'ADD 10' };
const removeAction10 = { type: 'REMOVE 10' };
const resetAction = { type: 'RESET' };

class countComponent extends Component {
  render() {
    const { count, dispatch } = this.props;
    return (
    <div>
      <p>{count}</p>
      <button onClick ={() => dispatch(addAction)}>Add 1</button>
      <button onClick ={() => dispatch(removeAction)}>Remove 1</button>
      <button onClick ={() => dispatch(addAction10)}>Add 10</button>
      <button onClick ={() => dispatch(removeAction10)}>Remove 10</button>
      <button onClick ={() => dispatch(resetAction)}>reset</button>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state
});

const CountContainer = connect(mapStateToProps)(countComponent)

export default CountContainer;