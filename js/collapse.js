document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll("[data-toggle-collapse]").forEach(button => {
		button.addEventListener("click", () => {
			const targetId = button.getAttribute("data-toggle-collapse");
			const target = document.getElementById(targetId);
			const icon = document.getElementById("menu-icon");

			if (target.classList.contains("max-h-0")) {
				// Open
				target.classList.remove("max-h-0", "opacity-0", "pointer-events-none");
				target.classList.add("max-h-screen", "opacity-100", "pointer-events-auto");
				if (icon) icon.src = "assets/images/kruis - icoon.svg";
			} else {
				// Close
				target.classList.remove("max-h-screen", "opacity-100", "pointer-events-auto");
				target.classList.add("max-h-0", "opacity-0", "pointer-events-none");
				if (icon) icon.src = "assets/images/hamburger - icoon.svg";
			}
		});
	});
});
