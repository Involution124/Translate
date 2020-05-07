import React, {Component} from "react";
import LanguageButton  from "./LanguageButton.js";
import TranslationBox from "./TranslationBox.js";

class MainSection extends Component {
	render(){
		return (
			<div class="mainSection">
				<div class="mainBoxes">
					<LanguageButton language="Latin" boxClass="box1"/>
					<LanguageButton language="English" boxClass="box2"/>
					<LanguageButton language="German" boxClass="box3"/>
					<LanguageButton language="Spanish" boxClass="box4"/>
				</div>
				<TranslationBox />
			</div>
		)
	}
}




export default MainSection;
