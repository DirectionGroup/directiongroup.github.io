var dotMapSvg = document.getElementById('dot-map-svg')
		, pathLine = dotMapSvg.getAttribute('data-line')
		, polylines = Snap(dotMapSvg).selectAll('polyline')
		, lines = Snap(dotMapSvg).selectAll('line')
		, circles = Snap(dotMapSvg).selectAll('circle')
		, allLines = Snap(dotMapSvg).selectAll('polyline, line');
		;
		
function forEach(items, func) {
	for (var index = 0; index < items.length; index++) {
		var element = items[index];
		
		func(element);
	}
}

function getRandomInt(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomToggleFade() {
	var item = circles[getRandomInt(0, circles.length - 1)];
	
	item.toggleClass('variant');
}

setInterval(randomToggleFade, 100);

$(document).foundation();