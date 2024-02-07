import { easepick, TimePlugin } from "@easepick/bundle";
function easepickFunc() {
	const picker = new easepick.create({
		element: document.getElementById("datePicker"),

		css: [
			"https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css",
			"https://cdn.jsdelivr.net/npm/@easepick/time-plugin@1.2.1/dist/index.css",
		],
		format: "HH:mm, DD/MM/YY",
		plugins: [TimePlugin],
	});
}
export default easepickFunc;
