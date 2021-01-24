import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";

class Zapwallet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount:3700,
            change:0
        };
    }
    handleInput=(e)=>{
        this.setState({change:e})
    }

    render() {
        return (
            <div className="box">
                <h2>Zap Wallet</h2>
                <p>Enter amount:</p>
                <input type="number" onChange={event=>this.setState({change:event.target.value})}></input>
                 <p>Amount :{this.state.amount-this.state.change}Rs.</p>
                
                <button onClick={this.handleInput}>Transfer to Paytm <i class="fas fa-paper-plane"></i></button>
                <br></br>
                <button>Add Money in Zap Wallet <i class="fas fa-money-bill-wave-alt"></i></button>
            </div>
        );
    }
}

Zapwallet.propTypes = {};

export default Zapwallet;
