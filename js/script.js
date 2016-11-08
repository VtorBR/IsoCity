function start() {
	var city = document.getElementById("city");
	populateCity(city);
	updatePopulation(blocks.length);
}

function populateCity(city) {
	for (i = 0; i < blocks.length; ++i)
	{
		city.appendChild(createBlock(blocks[i]));
	}
}

function updatePopulation(count) {
	document.getElementById("population").innerHTML = "Population<br/>" + count;
}

function calculatePosition(row, column) {
	return {
		left: column * 210,
		top: 60 + (2 * row - column % 2) * 105
	};
}

function createImage(src, title) {
	var image = document.createElement("img");
	image.src = src;
	image.setAttribute("title", title);
	image.setAttribute("alt", title);

	return image;
}

function createBlock(block) {
	var position = calculatePosition(block.row, block.column);

	var a = document.createElement("a");
	a.style.top = position.top + "px";
	a.style.left = position.left + "px";
	a.setAttribute("href", block.url);
	a.setAttribute("target", "_blank");
	a.appendChild(createImage(block.src, block.name));

	return a;
}
