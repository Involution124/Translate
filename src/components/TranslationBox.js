import React from "react";
import { connect } from "react-redux";


const mapStateToProps = state => {
	console.log("Inside mapstate = " + state);
	return { 
		translation: state.translation,
		language: state.language,
	}
}


const TranslationBox = ({language, translation}) => (
	<div class="translation">
  	<div class="translation-header">Translation to { language } </div>
    <div class="translation-body">{ translation } </div>
  </div>
)



export default connect(mapStateToProps)(TranslationBox);
