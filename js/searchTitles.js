const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("search");
const resultsBox = document.getElementById("results");

// Toggle search input visibility
searchBtn.addEventListener("click", () => {
	searchInput.classList.toggle("opacity-0");
	searchInput.classList.toggle("invisible");

	if (searchInput.classList.contains("opacity-0") || searchInput.classList.contains("invisible")) {
		searchInput.value = "";
		resultsBox.classList.add("hidden");
	} else {
		searchInput.focus();
	}
});

// Hide input and results when clicking outside
document.addEventListener("click", (event) => {
	if (!searchBtn.contains(event.target) && !searchInput.contains(event.target)) {
		searchInput.classList.add("opacity-0", "invisible");
		searchInput.value = "";
		resultsBox.classList.add("hidden");
	}
});

// Handle input typing
searchInput.addEventListener("input", function () {
	const filter = this.value.toLowerCase();
	const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

	resultsBox.innerHTML = "";

	if (searchInput.classList.contains("opacity-0") || searchInput.classList.contains("invisible")) {
		resultsBox.classList.add("hidden");
		return;
	}

	if (filter) {
		const matches = [];

		headings.forEach((heading, index) => {
			const text = heading.textContent.toLowerCase();

			if (text.includes(filter)) {
				const li = document.createElement("li");
				li.textContent = heading.textContent;
				li.className = "hover:bg-gray-200 p-2 cursor-pointer";
				li.dataset.scrollTarget = heading.id;

				li.addEventListener("click", () => {
					scrollToHeading(heading.id);
				});

				resultsBox.appendChild(li);
			}
		});

		if (resultsBox.children.length > 0) {
			resultsBox.classList.remove("hidden");
		} else {
			resultsBox.classList.add("hidden");
		}
	} else {
		resultsBox.classList.add("hidden");
	}
});

// skip headings without id
headings.forEach((heading) => {
	if (!heading.id) return; // Skip headings with no ID

	const text = heading.textContent.toLowerCase();

	if (text.includes(filter)) {
		const li = document.createElement("li");
		li.textContent = heading.textContent;
		li.className = "hover:bg-gray-200 p-2 cursor-pointer";
		li.addEventListener("click", () => scrollToHeading(heading.id));

		resultsBox.appendChild(li);
	}
});


// Scroll to heading and hide results
function scrollToHeading(id) {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: "smooth", block: "start" });
		resultsBox.classList.add("hidden");
	}
}
