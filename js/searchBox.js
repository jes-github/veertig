const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("search");

searchBtn.addEventListener("click", () => {
	searchInput.classList.toggle("opacity-0");
	searchInput.classList.toggle("invisible");

	if (!searchInput.classList.contains("opacity-0")) {
		searchInput.focus();
	}
});

document.addEventListener("click", (event) => {
	if (!searchBtn.contains(event.target) && !searchInput.contains(event.target)) {
		searchInput.classList.add("opacity-0", "invisible");
	}
});