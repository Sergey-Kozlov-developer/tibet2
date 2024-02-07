import autoComplete from "@tarekraafat/autocomplete.js";
import countryList from "./locationList";

function autoCompleteFunc() {
	const autoCompleteJS = new autoComplete({
		selector: "#autoCompleteHotel",
		placeHolder: "The St. Regis Lhasa Resort",

		data: {
			src: countryList,
			cache: true,
		},
		resultItem: {
			highlight: true,
		},
		events: {
			input: {
				selection: (event) => {
					const selection = event.detail.selection.value;
					autoCompleteJS.input.value = selection;
				},
			},
		},
		resultsList: {
			maxResults: 4,
		},
		searchEngine: "strict", // strict | loose
	});
}

export default autoCompleteFunc;
