let dropdownTimeout;

// Open the dropdown when hovering over the button
function openDropdown() {
	clearTimeout(dropdownTimeout); // Clear any existing timeout
	document.getElementById("dropdown-menu").classList.remove("hidden");
}

// Close the dropdown with a delay when no longer hovered over
function closeDropdown() {
	dropdownTimeout = setTimeout(() => {
		document.getElementById("dropdown-menu").classList.add("hidden");
	}, 1000); // 1 second delay before closing
}

document.addEventListener("DOMContentLoaded", function () {
	const dropdown = document.getElementById("dropdown-menu");
	const button = document.querySelector("#verhalen-dropdown button");

	// Show dropdown on hover
	button.addEventListener("mouseenter", openDropdown);
	dropdown.addEventListener("mouseenter", openDropdown);

	// Hide dropdown when mouse leaves (after delay)
	button.addEventListener("mouseleave", closeDropdown);
	dropdown.addEventListener("mouseleave", closeDropdown);

	// Close the dropdown if clicked outside
	document.addEventListener("click", function (event) {
		if (!button.contains(event.target) && !dropdown.contains(event.target)) {
			dropdown.classList.add("hidden");
		}
	});
});
