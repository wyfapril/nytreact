import React from "react";
import helpers from"../utils/helpers";

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    render() {
    	return(
    		<div>
    			<h2>Search!</h2>
    		</div>
    	)
    }
}

export default Search;
