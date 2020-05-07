
import React, {Component} from "react";
import { connect } from "react-redux";
import { changeLanguage } from "../actions/index";

function mapDispatchToProps(dispatch){
	return {
		changeLanguage: payload => dispatch(changeLanguage(payload))
	}
}



class LanguageButtonOutline extends Component {
	constructor(props) { 
		super(props);
		this.lang = props.language;
		this.boxClass = props.boxClass;
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(event){
		event.preventDefault();
		fetch("http://bluepawgames.com/"+this.lang+".json.php")
		.then(response => response.json())
		.then(data => { 
			console.log(data);
			this.props.changeLanguage(data);
		})
		.catch((error) => { console.log("Error fetching data" + error) });
	}

	render(){
		let className = "mainBox + " + this.boxClass;
		return (
			<button onClick={this.handleClick} class={className}>{ this.lang }</button>
		)
	}
}



const LanguageButton = connect(
	  null,
	  mapDispatchToProps
)(LanguageButtonOutline);


export default LanguageButton;
