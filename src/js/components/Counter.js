import React, { Component } from 'react';
import store from '../store/index';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
class Counter extends Component {
    handleClick = (e) => {
        console.log(e.target.name);
        if (e.target.name === 'increment') {
            // store.dispatch({ type: "INCREMENT" });
            this.props.dispatch({ type: "INCREMENT" });

            console.log(store.getState());
        }
        if (e.target.name === 'decrement') {
            this.props.dispatch({ type: "DECREMENT" });
            console.log( "Updating the store"+store.getState());
        }

    }
    handleChange = () => {

    }
    
    render() {
        return (
            <div>
                <div>
                    <button name='increment' onClick={this.handleClick}>Increment</button>
                   
                    <button name='decrement' onClick={this.handleClick}>Decrement</button>
                   <div>
                   <span>counter:{this.props.count}</span></div> 
                </div>
                <div>

                    {/* {store.getState()} */}
                    

                </div>
            </div>
        );
    }
}

// Counter.propTypes = {
//     initialState: PropTypes.string
// };

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);


// import React from 'react';
// import { connect } from 'react-redux';
// import store from '../store/index';
// class Counter extends React.Component {
//   increment = () => {
//     this.props.dispatch({ type: 'INCREMENT' });
//     console.log(store.getState());
//   }

//   decrement = () => {
//     this.props.dispatch({ type: 'DECREMENT' });
//     console.log(store.getState());
//   }

//   render() {
//     return (
//       <div>
//         <h2>Counter</h2>
//         <div>
          
//         <button onClick={this.increment}>+</button>
//           <button onClick={this.decrement}>-</button>
          
          
//           <div>
//           <span>counter:{this.props.count}</span>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// function mapStateToProps(state) {
//   return {
//      count: state.count
    
//   };
// }

// export default connect(mapStateToProps)(Counter);
