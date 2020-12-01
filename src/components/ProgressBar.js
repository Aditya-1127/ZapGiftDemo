import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = props => {
    const{ value, max} = props;
    return (<div>
    <progress value = {value} max={max}/>
             <span>{value}</span>
             </div>);
};

ProgressBar.propTypes = {
    value:PropTypes.number.isRequired,
    max:PropTypes.number
};

ProgressBar.defaultProps={
    max:100
};

export default ProgressBar;
