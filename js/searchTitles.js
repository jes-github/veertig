document.getElementById("search").addEventListener("input", function () {
	let filter = this.value.toLowerCase();
	let headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
	let resultsBox = document.getElementById("results");

	// Clear previous results
	resultsBox.innerHTML = "";

	// Show dropdown if input is not empty
	if (filter) {
		let matches = [];

		headings.forEach(heading => {
			let text = heading.textContent.toLowerCase();

			if (text.includes(filter)) {
				matches.push(`<li class="hover:bg-gray-200 p-2 cursor-pointer" 
                            onclick="scrollToHeading('${heading.id}')">${heading.textContent}</li>`);
			}
		});

		// If matches found, display them
		if (matches.length > 0) {
			resultsBox.innerHTML = matches.join("");
			resultsBox.classList.remove("hidden");
		} else {
			resultsBox.classList.add("hidden");
		}
	} else {
		resultsBox.classList.add("hidden"); // Hide dropdown if input is empty
	}
});

function scrollToHeading(id) {
	let element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: "smooth", block: "start" });
		document.getElementById("results").classList.add("hidden"); // Hide dropdown after click
	}
}