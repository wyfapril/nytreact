import React from "react";
import helpers from"../utils/helpers";

class Saved extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    render() {
    	return(
    		<div>
    			<h2>Saved!</h2>
    		</div>
    	)
    }
}

export default Saved;
