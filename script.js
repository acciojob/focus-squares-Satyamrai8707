//your JS code here. If required.
const squares = document.querySelectorAll(".square");

squares.forEach(currentSquare => {
	currentSquare.addEventListener("mouseenter", () => {
		squares.forEach(square => {
			if (square !== currentSquare) {
				square.style.backgroundColor = "#6F4E37"; // Coffee
			}
		});
	});

	currentSquare.addEventListener("mouseleave", () => {
		squares.forEach(square => {
			square.style.backgroundColor = "#E6E6FA"; // Lavender
		});
	});
});
