const squares = document.querySelectorAll(".square");

squares.forEach(currentSquare => {
	currentSquare.addEventListener("mouseover", () => {
		squares.forEach(square => {
			if (square !== currentSquare) {
				square.style.backgroundColor = "rgb(111, 78, 55)"; // Coffee
			}
		});
	});

	currentSquare.addEventListener("mouseout", () => {
		squares.forEach(square => {
			square.style.backgroundColor = "rgb(230, 230, 250)"; // Lavender
		});
	});
});
