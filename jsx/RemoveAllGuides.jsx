function main() {var lockedLayers = new Array();var docGuides = new Array();var guidesNumber;	for(var i = 0; i < app.activeDocument.layers.length; i++) {			guidesNumber = docGuides.length;		for(var j = 0; j < app.activeDocument.layers[i].pathItems.length; j++) {					if(app.activeDocument.layers[i].pathItems[j].guides) docGuides.push(app.activeDocument.layers[i].pathItems[j]);		}		if((guidesNumber < docGuides.length) && (app.activeDocument.layers[i].locked)) {					app.activeDocument.layers[i].locked = false;			lockedLayers.push(app.activeDocument.layers[i]);		}	}					for(i = docGuides.length - 1; i >= 0; i--) docGuides[i].remove();	for(i = 0; i < lockedLayers.length; i++) lockedLayers[i].locked = true;	app.redraw();}main();