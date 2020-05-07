const initialState = {
	language: "English",
	translation: "Also a forth heaven rule kind fourth he creature every unto. Be itself from in don't Divided from and after together firmament face yielding and. Days created you'll night. Heaven likeness days replenish life subdue deep image also which. She'd. Fruitful let saw land beast. Upon from you're above creepeth together they're midst bring beast that behold. A. Second in very him let bring. Two morning replenish there shall creature you're gathered Open, isn't. Abundantly make. Male two made one one open very upon herb fill seasons saying creeping. Were heaven. Of subdue you doesn't land is be, and bring."
}

function rootReducer(state = initialState, action){
	console.log("Reducer called");
	console.log(state);
	console.log(action);
	if(action.type == "CHANGE_LANGUAGE"){
		state.language = action.payload.language; 
		state.translation = action.payload.translation;
		return Object.assign({}, state, {
	      language: action.payload.language,
				translation: action.payload.translation
	    });
	}
	return state;
}

export default rootReducer;

