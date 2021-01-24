import React from 'react';
import PropTypes from 'prop-types';
var __html = require('../images/ultramax.html');
var template = { __html: __html };
class Threed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
               <div dangerouslySetInnerHTML={template} />  
            </div>
        );
    }
}

Threed.propTypes = {};

export default Threed;
