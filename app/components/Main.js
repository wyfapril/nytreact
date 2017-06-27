import React from "react";
import Search from"./Search";
import Saved from"./Saved";
import helpers from"../utils/helpers";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    render() {
    	return(
    		<div>
    			<h2>Main!</h2>
    		</div>
    	)
    }
}

export default Main;
