import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as counterActions from '../../actions/counterActions';
import CounterComponent from "../../components/CounterComponent";
import CounterSibling from "../../components/CounterSibling";

class CounterContainer extends Component {
    render() {
        return (
            <>
                {/* <CounterComponent {...this.props} /> */}
                <CounterComponent count={this.props.count} inc={this.props.inc} dec={this.props.dec}
                    mul={this.props.mul} />
                <hr />
                <CounterSibling count={this.props.count} />
            </>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        count: state.counterReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        inc: (by) => { dispatch(counterActions.incCounter(by)); },
        dec: (by) => { dispatch(counterActions.decCounter(by)); },
        mul: (by) => { dispatch(counterActions.mulCounter(by)); }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// ------------------------------------------------------- bind Action Creators
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import * as counterActions from '../../actions/counterActions';
// import CounterComponent from '../../components/counter/CounterComponent';
// import CounterSibling from '../../components/counter/CounterSibling';

// class CounterContainer extends Component {
//     render() {
//         return (
//             <>
//                 <CounterComponent count={this.props.count} inc={this.props.incCounter} dec={this.props.decCounter}
//                     mul={this.props.mulCounter} />
//                 <hr />
//                 <CounterSibling count={this.props.count} />
//             </>
//         );
//     }
// }

// function mapStateToProps(state, ownProps) {
//     return {
//         count: state.counterReducer
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return { ...bindActionCreators(counterActions, dispatch) };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);