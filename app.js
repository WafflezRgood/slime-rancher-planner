/**
 * REBORN fork by deathbypain created 01/19/2026.
 */

var desiredWidth = 1680;
var desiredHeight = 920;

var leftOffset = 0;
var topOffset = 0;

var isNumberOfItemsHidden = false;

//region arrays

var defaultValuesPlots = [
	{
		'id': 1, 'leftPosition': 341, 'topPosition': 564, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 2, 'leftPosition': 341, 'topPosition': 605, 'align': 'top-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 3, 'leftPosition': 381, 'topPosition': 564, 'align': 'bottom-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 4, 'leftPosition': 381, 'topPosition': 605, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 5, 'leftPosition': 441, 'topPosition': 315, 'align': 'top-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 6, 'leftPosition': 489, 'topPosition': 218, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 7, 'leftPosition': 552, 'topPosition': 220, 'align': 'bottom-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 8, 'leftPosition': 561, 'topPosition': 313, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 9, 'leftPosition': 776, 'topPosition': 142, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 10, 'leftPosition': 775, 'topPosition': 182, 'align': 'top-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 11, 'leftPosition': 893, 'topPosition': 141, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 12, 'leftPosition': 893, 'topPosition': 182, 'align': 'top-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 13, 'leftPosition': 893, 'topPosition': 268, 'align': 'top-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 14, 'leftPosition': 934, 'topPosition': 141, 'align': 'bottom-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 15, 'leftPosition': 934, 'topPosition': 182, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 16, 'leftPosition': 934, 'topPosition': 268, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 17, 'leftPosition': 1069, 'topPosition': 545, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 18, 'leftPosition': 1069, 'topPosition': 598, 'align': 'top-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 19, 'leftPosition': 1108, 'topPosition': 545, 'align': 'bottom-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 20, 'leftPosition': 1108, 'topPosition': 598, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 21, 'leftPosition': 1150, 'topPosition': 658, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 22, 'leftPosition': 1152, 'topPosition': 183, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 23, 'leftPosition': 1167, 'topPosition': 255, 'align': 'top-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 24, 'leftPosition': 1218, 'topPosition': 172, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 25, 'leftPosition': 1262, 'topPosition': 198, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 26, 'leftPosition': 1258, 'topPosition': 275, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'W', 'leftPosition': 374, 'topPosition': 520, 'align': 'bottom-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'O1', 'leftPosition': 507, 'topPosition': 468, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'O2', 'leftPosition': 545, 'topPosition': 554, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'O3', 'leftPosition': 545, 'topPosition': 640, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'O4', 'leftPosition': 669, 'topPosition': 468, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'O5', 'leftPosition': 631, 'topPosition': 554, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'O6', 'leftPosition': 631, 'topPosition': 640, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'M1', 'leftPosition': 775, 'topPosition': 510, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'M2', 'leftPosition': 775, 'topPosition': 596, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'M3', 'leftPosition': 861, 'topPosition': 472, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'M4', 'leftPosition': 861, 'topPosition': 634, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'M5', 'leftPosition': 947, 'topPosition': 472, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'MW', 'leftPosition': 904, 'topPosition': 553, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'V1', 'leftPosition': 724, 'topPosition': 767, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'V2', 'leftPosition': 663, 'topPosition': 828, 'align': 'top-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'V3', 'leftPosition': 699, 'topPosition': 828, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'V4', 'leftPosition': 785, 'topPosition': 828, 'align': 'top-left', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'VW', 'leftPosition': 835, 'topPosition': 742, 'align': 'top-right', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'F1', 'leftPosition': 420, 'topPosition': 590, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'F2', 'leftPosition': 510, 'topPosition': 280, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'F3', 'leftPosition': 590, 'topPosition': 570, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'F4', 'leftPosition': 830, 'topPosition': 220, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'F5', 'leftPosition': 830, 'topPosition': 540, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'F6', 'leftPosition': 1090, 'topPosition': 510, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'F7', 'leftPosition': 1210, 'topPosition': 220, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}, {
		'id': 'F8', 'leftPosition': 638, 'topPosition': 767, 'align': 'center', 'occupied': false, 'type': null, 'firstItem': null, 'secondItem': null, 'description': '', 'numberOfItems': 0
	}
];

var plots;

var regions = [
	{
		'leftPosition': 467, 'topPosition': 404, 'align': 'bottom-right', 'title': "Ogden's Retreat", 'show': true, 'width': 267, 'height': 301, 'background': '33, 86, 60', 'bgSize': 250
	}, {
		'leftPosition': 740, 'topPosition': 404, 'align': 'bottom-right', 'title': "Mochi's Manor", 'show': true, 'width': 267, 'height': 301, 'background': '116, 129, 145', 'bgSize': 220
	}, {
		'leftPosition': 603, 'topPosition': 710, 'align': 'bottom-right', 'title': "Viktor's Workshop", 'show': true, 'width': 267, 'height': 203, 'background': '50, 96, 158', 'bgSize': 180
	}
];

var slimeTypes = [
	'Pink Slime',
	'Rock Slime',
	'Tabby Slime',
	'Phosphor Slime',
	'Rad Slime',
	'Honey Slime',
	'Boom Slime',
	'Crystal Slime',
	'Quantum Slime',
	'Hunter Slime',
	'Mosaic Slime',
	'Dervish Slime',
	'Tangle Slime',
	'Saber Slime',
	'Gold Slime',
	'Lucky Slime'
];

var waterSlimeTypes = [
	'Puddle Slime'
];

var fireSlimeTypes = [
	'Fire Slime'
];

var foodTypes = [
	{
		'name': 'Carrot', 'amount': 20
	}, {
		'name': 'Heart Beet', 'amount': 15
	}, {
		'name': 'Oca Oca', 'amount': 15
	}, {
		'name': 'Odd Onion', 'amount': 20
	}, {
		'name': 'Silver Parsnip', 'amount': 15
	}, {
		'name': 'Pogofruit', 'amount': 20
	}, {
		'name': 'Cuberry', 'amount': 15
	}, {
		'name': 'Mint Mango', 'amount': 15
	}, {
		'name': 'Phase Lemon', 'amount': 15
	}, {
		'name': 'Prickle Pear', 'amount': 15
	}, {
		'name': 'Gilded Ginger', 'amount': 15
	}, {
		'name': 'Kookadoba', 'amount': 15
	}
];

var meatTypes = [
	'Mixed',
	'Hen Hen',
	'Stony Hen',
	'Briar Hen',
	'Painted Hen'
];


//endregion

$(document).ready(function () {
	plots = $.extend(true, [], defaultValuesPlots);

	calculateBodySize();
	showPlots();
	showMaximizedPlots();
	createSlimeCountTable();

	$(window).resize(reloadSite);

	$('[id^="plotA-"]').click(openSetUpForm);

	$('#firstChoice').change(loadSecondAndThirdChoice);

	$('#secondChoice').change(loadNumberOfItemsForGarden);

	$('#clearPlot').click(clearPlot);

	$('#savePlot').click(savePlot);

	$('#resetButton').click(resetData);

	$('#numberOfItemsLink').click(showHideNumberOfItems);

	$('#exportLink').click(saveData);

	$('#importLink').click(openImportModal);

	$('#importDataButton').click(importDataFromText);

	$('#importDataFileInput').on('change', importDataFromFile);

	$('#exportMenu').mouseenter(moveToTop);

	var donateBox = $('#donateBox');
	var donateText = $('#donateText');

	donateBox.mouseenter(function () {
		donateText.show();
	});

	donateBox.mouseleave(function () {
		donateText.hide();
	});

	var exportMenu = $('#exportMenu');
	var numberOfItemsLink = $('#numberOfItemsLink');
	var issueLink = $('#issueLink');
	var exportLink = $('#exportLink');
	var importLink = $('#importLink');
	var resetLink = $('#resetLink');
	var menuText = $('#menuText');

	numberOfItemsLink.mouseenter(function () {
		if (isNumberOfItemsHidden) {
			menuText.text('Show number of items in plots');

		} else {
			menuText.text('Hide number of items in plots');
		}
		menuText.show();
	});

	issueLink.mouseenter(function () {
		menuText.text('Report issue');
		menuText.show();
	});

	exportLink.mouseenter(function () {
		menuText.text('Export plan');
		menuText.show();
	});

	importLink.mouseenter(function () {
		menuText.text('Import plan');
		menuText.show();
	});

	resetLink.mouseenter(function () {
		menuText.text('Reset plan');
		menuText.show();
	});

	exportMenu.mouseleave(function () {
		menuText.hide();
	});

	$('#openSlimeCount').click(function (e) {
		e.preventDefault();
		$('#openSlimeCount').hide();
		$('#slimeCount').show('slow');
	});

	$('#hideSlimeCount').click(function (e) {
		e.preventDefault();
		$('#openSlimeCount').show();
		$('#slimeCount').hide('slow');
	});

	$('#refreshSlimeCount').click(function (e) {
		e.preventDefault();
		updateSlimeCountTable();
	});
});

//region saveMenu

/**
 * Save plot array to file
 */
function saveData(e) {
	e.preventDefault();
	$('#downloadData').modal('show');

	var downloadLink = $('#downloadButton');
	downloadLink.attr('download', 'export.txt');
	downloadLink.attr('href', 'data:text/plain;base64,' + btoa(JSON.stringify(plots)));
}

/**
 * Open the modal with textarea for stringified data to import
 */
function openImportModal(e) {
	e.preventDefault();
	$('#importData').modal('show');
	$('#importDataTextArea').val('');
	var importDataFileInput = $('#importDataFileInput');
	importDataFileInput.val('');
	$('#fileError').css('display', 'none');
	$('#fileLoadingAnimation').css('display', 'none');
	var fileSupport = checkFileReaderSupport();
	if(!fileSupport) {
		importDataFileInput.css('display', 'none');
		$('#importDataTextInput').css('display', 'block');
		$('#importDataButton').removeClass('disabled');
	}
}

/**
 * Check if browser support file input
 * @returns {boolean} if browser support file input
 */
function checkFileReaderSupport() {
	return !!(window.File && window.FileReader && window.FileList && window.Blob);
}

/**
 * Import data from stringified data provided by user in textarea
 */
function importDataFromText() {
	var dataToImport = $('#importDataTextArea').val(); //possibly may be changed to html5 client side file handling https://www.html5rocks.com/en/tutorials/file/dndfiles/
	plots = JSON.parse(dataToImport);
	reloadSite();
	$('#importData').modal('hide');
}

/**
 * Import data by uploading exported file
 */
function importDataFromFile() {
	$('#fileLoadingAnimation').css('display', 'block');
	var file = this.files[0];
	var textType = /text.*/;

	if (file.type.match(textType)) {
		var reader = new FileReader();

		reader.onload = function () {
			// noinspection JSCheckFunctionSignatures
			plots = JSON.parse(reader.result);
		};

		reader.readAsText(file);
	} else {
		$('#fileError').css('display', 'block');
		return;
	}

	setTimeout(function(){
		$('#importData').modal('hide');
		reloadSite();
	}, 1000);
}

/**
 * Reset data to factory value
 */
function resetData(e) {
	e.preventDefault();
	plots = $.extend(true, [], defaultValuesPlots); //plots = defaultValuesPlots doesn't make a copy, it points to the same array
	reloadSite();
	$('#confirmReset').modal('hide');
}

/**
 * Show or hide number of item text on plots
 */
function showHideNumberOfItems(e) {
	e.preventDefault();
	if (isNumberOfItemsHidden) {
		$('.hideForReal').removeClass('hideForReal');
		$('#numberOfItemsLink').find('img').attr('src', 'img/hideNOI.png');
		$('#menuText').text('Hide number of items in plots');
		isNumberOfItemsHidden = false;
	} else {
		$('.numberOfItemsInPlot').addClass('hideForReal');
		$('#numberOfItemsLink').find('img').attr('src', 'img/showNOI.png');
		$('#menuText').text('Show number of items in plots');
		isNumberOfItemsHidden = true;
	}
}

//endregion

//region loadSite

/**
 * Refresh plot and big plot divs
 */
function reloadSite() {
	calculateBodySize();
	showPlots();
	showMaximizedPlots()
}

/**
 * Calculate offset for plot divs (map offset)
 */
function calculateBodySize() {
	var actualWidth = $(window).width();
	var actualHeight = $(window).height();

	if (actualWidth < 1100) {
		actualWidth = 1100;
	}
	if (actualHeight < 750) {
		actualHeight = 750;
	}

	var imageWidth = 2762;
	var imageHeight = 1734;

	var imageLeftOffset = (actualWidth-imageWidth)/2;
	var imageTopOffset = ((actualHeight-imageHeight)/2)-50;

	$(document.body).css('background-position', imageLeftOffset + 'px ' + imageTopOffset + 'px');

	leftOffset = (actualWidth-desiredWidth)/2;
	topOffset = ((actualHeight-desiredHeight)/2);

	$(document.body).css('width', actualWidth);
	$(document.body).css('height', actualHeight);
}

/**
 * Create (or update) HTML for small plots
 */
function showPlots() {
	var plotBorder = $('.plot').css('border-top-width');
	plotBorder = plotBorder.slice(0, -2);
	plotBorder = parseInt(plotBorder);
	var plotTemplate = $('#plotTemplate');


	$.each(plots, function (key, value) {
		var plot = $('#plotA-' + value.id);
		if (plot.length === 0) {
			plot = plotTemplate.clone();
			plot.attr('id', 'plotA-' + value.id);
			plot.css('display', '');
			plot.css('z-index', 0);
			plot.find('.plot').attr('id', 'plot-' + value.id);
			if (typeof value.id === 'string' && value.id.slice(-1) === 'W')
				plot.find('.plotNumber').text('W');
			else
				plot.find('.plotNumber').text(value.id);
			plotTemplate.after(plot);
		}
		if(typeof value.id === 'string' && value.id.substr(0, 1) === 'F') plot.find('.plot').addClass('plotFreerange');
		var leftPosition = value.leftPosition + leftOffset - plotBorder;
		var topPosition = value.topPosition + topOffset - plotBorder;
		plot.find('.plot').css('left', leftPosition + 'px');
		plot.find('.plot').css('top', topPosition + 'px');
	});
}

/**
 * Create (or update) HTML for big plots
 */
function showMaximizedPlots() {
	var plotBorder = $('.plotMaximized').css('border-top-width');
	plotBorder = plotBorder.slice(0, -2);
	plotBorder = parseInt(plotBorder);
	var plotTemplate = $('#plotMaximizedTemplate');
	var regionTemplate = $('#regionTemplate');

	$.each(regions, function (key, value) {
		var simplifiedName = value.title.replace(/\s/g, "-").replace(/'/g, "").toLowerCase();
		var plot = $('#' + simplifiedName + '-region');
		if (value.show) {
			if (plot.length === 0) {
				plot = regionTemplate.clone();
				plot.attr('id', simplifiedName + '-region');
				plot.css('z-index', -2);
				regionTemplate.after(plot);
			}
			var leftPosition = value.leftPosition + leftOffset - plotBorder;
			var topPosition = value.topPosition + topOffset - plotBorder;
			plot.css('left', leftPosition + 'px');
			plot.css('top', topPosition + 'px');
			plot.find('.regionName').text(value.title);
			plot.find('.regionName').css('display', 'block');
			plot.css('width', value.width).css('height', value.height);
			plot.css('background-color', 'rgba(' + value.background + ', 0.7)').css('background-image', 'url(img/region-backgrounds/'+ simplifiedName +'.png)').css('background-size', value.bgSize + 'px');
		}
	});

	$.each(plots, function (key, value) {
		var plot = $('#plotMaximizedA-' + value.id);
		if(value.occupied) {
			if (plot.length === 0) {
				plot = plotTemplate.clone();
				plot.attr('id', 'plotMaximizedA-' + value.id);
				plot.css('z-index', 0);
				plotTemplate.after(plot);
			}
			plot.attr('title', value.description);
			$('#plotA-' + value.id).css('display', 'none');
			plot.css('display', '');
			var leftAlignOffset = 0;
			var topAlignOffset = 0;
			var plotSize = $('.plot').css('width'); //it should be square so checking only one value
			plotSize = parseInt(plotSize);
			var plotMaximizedSize = $('.plotMaximized').css('width');
			plotMaximizedSize = parseInt(plotMaximizedSize);
			switch (value.align) {
				case 'top-left':
					leftAlignOffset = 0;
					topAlignOffset = 0;
					break;
				case 'top-right':
					leftAlignOffset = plotSize - plotMaximizedSize;
					topAlignOffset = 0;
					break;
				case 'bottom-left':
					leftAlignOffset = 0;
					topAlignOffset = plotSize - plotMaximizedSize;
					break;
				case 'bottom-right':
					leftAlignOffset = plotSize - plotMaximizedSize;
					topAlignOffset = plotSize - plotMaximizedSize;
					break;
				case 'center':
					leftAlignOffset = (plotSize - plotMaximizedSize)/2;
					topAlignOffset = (plotSize - plotMaximizedSize)/2;
					break;
			}
			var leftPosition = value.leftPosition + leftOffset + leftAlignOffset - plotBorder;
			var topPosition = value.topPosition + topOffset + topAlignOffset - plotBorder;
			plot.find('.plotMaximized').css('left', leftPosition + 'px');
			plot.find('.plotMaximized').css('top', topPosition + 'px');
			plot.find('.plotMaximized').removeClass('corral garden coop pond silo incinerator');
			plot.find('.plotMaximized').addClass(value.type);
			if(typeof value.id === 'string' && value.id.substr(0, 1) === 'F') plot.find('.plotMaximized').addClass('plotMaximizedFreerange');
			plot.find('.plotType').text(value.type);
			plot.find('.plotType').css('display', 'block');
			if((value.type === 'corral' || value.type === 'freerange') && value.firstItem !== null && value.secondItem !== null) {
				plot.find('.plotContent').css('display', 'none');
				plot.find('.corralContentFirstItem').empty();
				plot.find('.corralContentFirstItem').append($('<img>', {
					src: 'img/plotItems/' + value.firstItem + '.png',
					alt: value.firstItem
				}));
				plot.find('.corralContentSecondItem').empty();
				plot.find('.corralContentSecondItem').append($('<img>', {
					src: 'img/plotItems/' + value.secondItem + '.png',
					alt: value.secondItem
				}));
				plot.find('.corralContent').css('display', 'flex');
			} else if (value.firstItem !== null) {
				plot.find('.corralContent').css('display', 'none');
				plot.find('.plotContentImg').attr('src', 'img/plotItems/' + value.firstItem + '.png');
				plot.find('.plotContentImg').attr('alt', value.firstItem);
				plot.find('.plotContent').css('display', 'flex');
			} else {
				plot.find('.corralContent').css('display', 'none');
				plot.find('.plotContent').css('display', 'none');
			}
			plot.find('.numberOfItemsInPlot').text(value.numberOfItems);
			if (value.numberOfItems > 0) {
				plot.find('.numberOfItemsInPlot').css('display', 'block');
			} else {
				plot.find('.numberOfItemsInPlot').css('display', 'none');
			}
		} else {
			plot.css('display', 'none');
			plot.attr('title', '');
			$('#plotA-' + value.id).css('display', 'block');
		}

		updateSlimeCountTable();
	});

	var allMaximizedPlots = $('[id^="plotMaximizedA-"]');
	allMaximizedPlots.click(openEditForm);
	allMaximizedPlots.mouseenter(moveToTop);

	var numberOfItems = $('.numberOfItemsInPlot');
	numberOfItems.mouseenter(function () {
		$(this).css('opacity', 1);
	});
	numberOfItems.mouseleave(function () {
		$(this).css('opacity', 0.3);
	});
}

/**
 * Fill rows in the slime count table with slimes
 */
function createSlimeCountTable() {
	var st = $.extend(true, [], slimeTypes);
	//insert water and fire slimes before the last two slimes (gold and lucky)
	st.splice((st.length - 2), 0, ...waterSlimeTypes, ...fireSlimeTypes);
	st.reverse();

	$.each(st, function (key, value) {
		var rowTemplate = $('#slimeCountTableRowTemplate');
		var row = rowTemplate.clone();
		rowTemplate.after(row);
		var slimeName = value.replace(/\s/g, "-").toLowerCase();
		row.attr('id', 'scRow-' + slimeName);
		row.find('.slimeCountImage').attr('src', 'img/plotItems/' + slimeName + '.png');
		row.find('.SlimeCountNumber').text(0);
	});
}

/**
 * Count the number of corrals with the slime for every slime in slime count table
 */
function updateSlimeCountTable() {
	$('.slimeCountTableRow').each(function (index) {
		if ($(this).attr('id') === 'slimeCountTableRowTemplate') return true;
		var slimeName = $(this).attr('id');
		slimeName = slimeName.slice(6);

		var numberOfCorrals = 0;
		$.each(plots, function (key, value) {
			if (value.occupied === true && (value.type === 'corral' || value.type === 'freerange' || value.type === 'pond' || value.type === 'incinerator')) {
				if (value.firstItem === slimeName || value.secondItem === slimeName) numberOfCorrals++;
			}
		});

		$(this).find('.SlimeCountNumber').text(numberOfCorrals);
	});
}

//endregion

//region setupAndEditForm

/**
 * Open form for setting up small plot
 */
function openSetUpForm(e) {
	e.preventDefault();
	$('#setupPlot').modal('show');
	refreshForm();
	var id = $(this).attr('id');
	id = id.slice(6);
	$('#editedPlotNumber').val(id);
	if (id.slice(-1) === 'W') {
		$('#setupPlotNumber').text('- waterfall');
		hideChoicesForWaterfall();
	} else if (id.substr(0, 1) === 'F') {
		$('#setupPlotNumber').text('- freerange');
		hideChoicesForFreerange()
	} else {
		$('#setupPlotNumber').text(id);
		showAllFirstChoices();
	}
	$.each(plots, function (key, value) {
		// noinspection EqualityComparisonWithCoercionJS
		if (value.id == id) {
			$('#alignChoice').val(value.align);
			$('#description').val(value.description);
			$('#numberOfItems').val(value.numberOfItems);
		}
	});
}

/**
 * Open form for editing set plot (big)
 */
function openEditForm(e) {
	e.preventDefault();
	$('#setupPlot').modal('show');
	refreshForm();
	var id = $(this).attr('id');
	id = id.slice(15);
	$('#editedPlotNumber').val(id);
	if (id.slice(-1) === 'W') {
		$('#setupPlotNumber').text('- waterfall');
		hideChoicesForWaterfall();
	} else if (id.substr(0, 1) === 'F') {
		$('#setupPlotNumber').text('- freerange');
		hideChoicesForFreerange()
	} else {
		$('#setupPlotNumber').text(id);
		showAllFirstChoices();
	}

	var firstChoice = $('#firstChoice');
	var secondChoice = $('#secondChoice');
	var thirdChoice = $('#thirdChoice');

	$.each(plots, function (key, value) {
		// noinspection EqualityComparisonWithCoercionJS
		if (value.id == id) {
			$('#alignChoice').val(value.align);
			$('#description').val(value.description);
			$('#numberOfItems').val(value.numberOfItems);
			if (value.type !== null) {
				firstChoice.val(value.type);
				loadSecondAndThirdChoice();
				if (value.firstItem !== null) {
					secondChoice.val(value.firstItem);
					if (value.secondItem !== null) {
						thirdChoice.val(value.secondItem);
					} else {
						thirdChoice.val('unselected');
					}
				} else {
					secondChoice.val('unselected');
					thirdChoice.val('unselected');
				}
			} else {
				firstChoice.val('unselected');
				secondChoice.val('unselected');
				thirdChoice.val('unselected');
			}
		}
	});
}

/**
 * Function that hides all the choices except for unselected and pond from the first select menu.
 */
function hideChoicesForWaterfall() {
	$('#firstChoiceCorral').css('display', 'none');
	$('#firstChoiceGarden').css('display', 'none');
	$('#firstChoiceCoop').css('display', 'none');
	$('#firstChoiceSilo').css('display', 'none');
	$('#firstChoiceIncinerator').css('display', 'none');
	$('#firstChoicePond').css('display', 'block');
}

/**
 * Function that hides all the choices except for unselected and freerange from the first select menu.
 */
function hideChoicesForFreerange() {
	$('#firstChoiceCorral').css('display', 'block');
	$('#firstChoiceCorral').text('Freerange').attr('value', 'freerange');
	$('#firstChoicePond').css('display', 'none');
	$('#firstChoiceGarden').css('display', 'none');
	$('#firstChoiceCoop').css('display', 'none');
	$('#firstChoiceSilo').css('display', 'none');
	$('#firstChoiceIncinerator').css('display', 'none');
}

/**
 * Function that restores all the choices in the first select menu.
 */
function showAllFirstChoices() {
	$('#firstChoiceCorral').text('Corral').attr('value', 'corral');
	$('#firstChoiceCorral').css('display', 'block');
	$('#firstChoiceGarden').css('display', 'block');
	$('#firstChoiceCoop').css('display', 'block');
	$('#firstChoiceSilo').css('display', 'block');
	$('#firstChoiceIncinerator').css('display', 'block');
	$('#firstChoicePond').css('display', 'block');
}

/**
 * Restore form to untouched state
 */
function refreshForm() {
	$('#firstChoice').val('unselected');
	$('#secondChoiceLabel').css('display', 'none');
	$('#secondChoice').css('display', 'none');
	$('#thirdChoice').css('display', 'none');
	$('#thirdChoiceLabel').css('display', 'none');
	$('#choiceError').css('display', 'none');
}

/**
 * Decide what items to load based on user input, show fields
 */
function loadSecondAndThirdChoice() {
	var chosenFirstValue = $('#firstChoice').val();

	var secondChoiceLabel = $('#secondChoiceLabel');
	var thirdChoiceLabel = $('#thirdChoiceLabel');
	var secondChoice = $('#secondChoice');
	var thirdChoice = $('#thirdChoice');

	if (chosenFirstValue === 'corral' || chosenFirstValue === 'freerange') {
		secondChoiceLabel.css('display', '');
		secondChoiceLabel.text('Slime type:');
		thirdChoiceLabel.css('display', '');
		thirdChoiceLabel.text('Second slime type: (if you intend to keep largos in here)');
		secondChoice.css('display', '');
		thirdChoice.css('display', '');
		updateOptions(chosenFirstValue, secondChoice);
		updateOptions(chosenFirstValue, thirdChoice);
	} else if (chosenFirstValue === 'garden') {
		secondChoiceLabel.css('display', '');
		secondChoiceLabel.text('Food type:');
		secondChoice.css('display', '');
		thirdChoiceLabel.css('display', 'none'); //don't know why, but it doesn't work without
		thirdChoice.css('display', 'none');
		thirdChoice.val('unselected');
		updateOptions(chosenFirstValue, secondChoice);
	} else if (chosenFirstValue === 'coop') {
		secondChoiceLabel.css('display', '');
		secondChoiceLabel.text('Meat type:');
		secondChoice.css('display', '');
		thirdChoiceLabel.css('display', 'none'); //don't know why, but it doesn't work without
		thirdChoice.css('display', 'none');
		thirdChoice.val('unselected');
		updateOptions(chosenFirstValue, secondChoice);
	} else if (chosenFirstValue === 'pond') {
		secondChoiceLabel.css('display', '');
		secondChoiceLabel.text('Slime type:');
		secondChoice.css('display', '');
		thirdChoiceLabel.css('display', 'none'); //don't know why, but it doesn't work without
		thirdChoice.css('display', 'none');
		thirdChoice.val('unselected');
		updateOptions(chosenFirstValue, secondChoice);
	} else if (chosenFirstValue === 'incinerator') {
		secondChoiceLabel.css('display', '');
		secondChoiceLabel.text('Slime type:');
		secondChoice.css('display', '');
		thirdChoiceLabel.css('display', 'none'); //don't know why, but it doesn't work without
		thirdChoice.css('display', 'none');
		thirdChoice.val('unselected');
		updateOptions(chosenFirstValue, secondChoice);
	} else {
		secondChoiceLabel.css('display', 'none'); //don't know why, but it doesn't work without
		secondChoice.css('display', 'none');
		secondChoice.val('unselected');
		thirdChoiceLabel.css('display', 'none');
		thirdChoice.css('display', 'none');
		thirdChoice.val('unselected');
	}
}

/**
 * Load items based on user input
 * @param type of items to load
 * @param selectHTML select operator which load items to
 */
function updateOptions(type, selectHTML) {
	selectHTML.find('option').remove();
	selectHTML.append($('<option>', {
		value: 'unselected',
		text : 'Empty'
	}));

	var array;

	if (type === 'corral' || type === 'freerange') {
		array = slimeTypes;
	} else if (type === 'garden') {
		array = foodTypes;
	} else if (type === 'coop') {
		array = meatTypes;
	} else if (type === 'pond') {
		array = waterSlimeTypes;
	} else if (type === 'incinerator') {
		array = fireSlimeTypes;
	} else {
		array = null;
	}

	if (array !== null) {
		$.each(array, function (key, type) {
			if (typeof type === 'object') type = type.name;
			var value = type.replace(/\s/g, "-").toLowerCase();
			selectHTML.append($('<option>', {
				value: value,
				text : type
			}));
		})
	}
}

/**
 * Load correct number of items for stuff when switching to garden entries
 */
function loadNumberOfItemsForGarden() {
	var chosenFirstValue = $('#firstChoice').val();

	if (chosenFirstValue === 'garden') {
		var chosenSecondValue = $('#secondChoice').val();
		var numberOfItems = 0;

		if (chosenSecondValue !== 'unselected') {
			$.each(foodTypes, function (key, value) {
				var name = value.name.replace(/\s/g, "-").toLowerCase();
				if (name === chosenSecondValue) {
					numberOfItems = value.amount;
				}
			})
		}
		$('#numberOfItems').val(numberOfItems);
	}
}

/**
 * Unset plot
 */
function clearPlot() {
	var id = $('#editedPlotNumber').val();
	if (id !== 'unselected') {
		$.each(plots, function (key, value) {
			// noinspection EqualityComparisonWithCoercionJS
			if (value.id == id) {
				value.occupied = false;
				value.type = null;
				value.firstItem = null;
				value.secondItem = null;
				value.description = '';
				value.numberOfItems = 0;
			}
		});
	}
	reloadSite();
	$('#setupPlot').modal('hide');
}

/**
 * Save data from form
 */
function savePlot() {
	var chosenFirstValue = $('#firstChoice').val();
	var chosenSecondValue = $('#secondChoice').val();
	var chosenThirdValue = $('#thirdChoice').val();

	var id = $('#editedPlotNumber').val();
	if (id === 'unselected') return;

	$.each(plots, function (key, value) {
		// noinspection EqualityComparisonWithCoercionJS
		if (value.id == id) {
			value.align = $('#alignChoice').val();
			value.description = $('#description').val();

			var numberOfItems = $('#numberOfItems').val();
			var numberOfItems = parseInt(numberOfItems);
			if (numberOfItems <= 0) numberOfItems = 0;
			value.numberOfItems = numberOfItems;

			if (chosenFirstValue === 'unselected') {
				value.occupied = false;
				value.type = null;
				value.firstItem = null;
				value.secondItem = null;
				value.description = null;
				value.numberOfItems = 0;
			} else if (chosenFirstValue === 'silo') {
				value.occupied = true;
				value.type = chosenFirstValue;
				value.firstItem = null;
				value.secondItem = null;
				value.numberOfItems = 0;
			} else {
				value.occupied = true;
				value.type = chosenFirstValue;
				if (chosenSecondValue === 'unselected') {
					value.firstItem = null;
					value.secondItem = null;
					value.numberOfItems = 0;
				} else {
					value.firstItem = chosenSecondValue;
					if (chosenThirdValue !== 'unselected' && (chosenFirstValue === 'corral' || chosenFirstValue === 'freerange') && chosenThirdValue !== chosenSecondValue) {
						value.secondItem = chosenThirdValue;
					} else {
						value.secondItem = null;
					}
				}
			}
		}
	});
	reloadSite();
	$('#setupPlot').modal('hide');
}

//endregion

/**
 * Change z-index of big plot that mouse is already at to be on top
 */
function moveToTop() {
	$('.plotMaximized').css('z-index', 0);
	$(this).find('.plotMaximized').css('z-index', 1);
}

/* ==========================================
   GADGET PLANNER ADD-ON
   Kept separate from the original plot editor
========================================== */

/* ==========================================
   GADGET PLANNER — MAP EDITION
========================================== */
(function () {
    "use strict";

    $(document).ready(function () {
        var areas = {
            main: { name: "Main Ranch", count: 27 },
            grotto: { name: "Grotto", count: 11 },
            overgrowth: { name: "Overgrowth", count: 12 },
            docks: { name: "Docks", count: 11 },
            lab: { name: "Lab", count: 15 }
        };

        var storageKey = "slimeRancherGadgetPlanner";
        var generalKey = "slimeRancherGeneralTasks";

        var selectedArea = "main";
        var selectedSite = null;
        var placingGadget = false;
        var assignments = {};
        var completedTasks = {};

        var generalTasks = [
            "Unlock all five ranch areas",
            "Unlock all 26 ranch plots",
            "Collect all ranchable slime types",
            "Collect all standard food types",
            "Collect all special food types",
            "Discover all 13 Gordo Snare slime types",
            "Build and deploy a drone",
            "Complete the main game",
            "Complete the 7Zee Rewards Club",
            "Explore all ranch expansion areas"
        ];

        try {
            assignments = JSON.parse(localStorage.getItem(storageKey)) || {};
        } catch (e) {
            assignments = {};
        }

        try {
            completedTasks = JSON.parse(localStorage.getItem(generalKey)) || {};
        } catch (e) {
            completedTasks = {};
        }

        var panel = $("#gadgetPlannerPanel");
        if (!panel.length) return;

        /* ---------- STYLING ---------- */

        if (!document.getElementById("gadgetPlannerStyles")) {
            $("<style>", {
                id: "gadgetPlannerStyles",
                text: `
                    #gadgetPlannerPanel {
                        box-sizing: border-box;
                        max-width: 950px;
                        padding: 20px;
                        margin: 15px;
                        color: #f4f6f5;
                        background: #1d3035;
                        border: 1px solid #526d70;
                        border-radius: 14px;
                        box-shadow: 0 8px 25px rgba(0,0,0,.35);
                    }

                    #gadgetPlannerPanel h2,
                    #gadgetPlannerPanel h3 {
                        color: #f4cf68;
                        margin-top: 12px;
                    }

                    #gadgetPlannerPanel button,
                    #gadgetPlannerPanel select,
                    #gadgetPlannerPanel textarea {
                        box-sizing: border-box;
                        border-radius: 7px;
                        padding: 9px;
                        margin: 4px;
                    }

                    #gadgetPlannerPanel select,
                    #gadgetPlannerPanel textarea {
                        background: #f4f6f5;
                        color: #17272b;
                        max-width: 100%;
                    }

                    #gadgetZone {
                        min-width: 180px;
                    }

                    #gadgetSiteList {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(105px, 1fr));
                        gap: 8px;
                        margin: 15px 0;
                    }

                    .gadgetSiteButton {
                        background: #344d52;
                        color: white;
                        border: 1px solid #718b8d;
                        cursor: pointer;
                        min-height: 58px;
                        transition: .15s;
                    }

                    .gadgetSiteButton:hover {
                        background: #49666b;
                    }

                    .gadgetSiteButton.selected {
                        outline: 3px solid #f4cf68;
                        background: #526b50;
                    }

                    .gadgetSiteButton.assigned {
                        border-color: #75c99a;
                    }

                    #gadgetSelectedTitle {
                        font-size: 19px;
                        color: #f4cf68;
                        margin: 15px 0;
                    }

                    #gadgetNotes {
                        display: block;
                        width: 100%;
                        min-height: 65px;
                    }

                    #gadgetStatus {
                        min-height: 22px;
                        color: #f4cf68;
                        margin: 10px 4px;
                    }

                    #gadgetProgress {
                        background: #293f43;
                        padding: 13px;
                        border-radius: 9px;
                        margin: 15px 0;
                    }

                    #gadgetProgressBar {
                        height: 13px;
                        background: #52666a;
                        border-radius: 10px;
                        overflow: hidden;
                        margin-top: 8px;
                    }

                    #gadgetProgressFill {
                        height: 100%;
                        width: 0;
                        background: #65c58b;
                        transition: width .2s;
                    }

                    #generalCompletion {
                        border-top: 1px solid #526d70;
                        margin-top: 20px;
                        padding-top: 12px;
                    }

                    #generalCompletion label {
                        display: flex;
                        align-items: center;
                        gap: 9px;
                        margin: 9px 0;
                    }

                    #generalCompletion input {
                        width: auto;
                    }

                    #gadgetMarkers {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        pointer-events: none;
                        z-index: 4;
                    }

                    .gadgetMapMarker {
                        position: absolute;
                        transform: translate(-50%, -50%);
                        pointer-events: auto;
                        cursor: pointer;
                        color: white;
                        background: #263f48;
                        border: 2px solid #f4cf68;
                        border-radius: 8px;
                        padding: 5px 8px;
                        font-size: 12px;
                        font-weight: bold;
                        white-space: nowrap;
                        box-shadow: 0 2px 6px rgba(0,0,0,.5);
                    }

                    .gadgetMapMarker:hover {
                        background: #52765f;
                        z-index: 10;
                    }

                    body.placingGadget {
                        cursor: crosshair !important;
                    }

                    @media (max-width: 700px) {
                        #gadgetPlannerPanel {
                            margin: 5px;
                            padding: 12px;
                        }
                    }
                `
            }).appendTo("head");
        }

        /* ---------- STORAGE ---------- */

        function siteKey(area, number) {
            return area + "-" + number;
        }

        function saveAssignments() {
            localStorage.setItem(storageKey, JSON.stringify(assignments));
        }

        function saveTasks() {
            localStorage.setItem(generalKey, JSON.stringify(completedTasks));
        }

        /* ---------- PROGRESS ---------- */

        if (!$("#gadgetProgress").length) {
            $("#gadgetStatus").after(`
                <div id="gadgetProgress">
                    <strong>Gadget placement progress</strong>
                    <div id="gadgetProgressText">0 / 76 sites assigned</div>
                    <div id="gadgetProgressBar">
                        <div id="gadgetProgressFill"></div>
                    </div>
                </div>
                <section id="generalCompletion">
                    <h3>General completion checklist</h3>
                    <p>Tick these off as you complete them in-game.</p>
                    <div id="generalTaskList"></div>
                </section>
            `);
        }

        /* ---------- SITE LIST ---------- */

        function renderSites() {
            var list = $("#gadgetSiteList");
            list.empty();

            for (var i = 1; i <= areas[selectedArea].count; i++) {
                var key = siteKey(selectedArea, i);
                var assignment = assignments[key];

                var button = $("<button>", {
                    type: "button",
                    class: "gadgetSiteButton",
                    "data-site": i
                });

                button.append($("<strong>").text("Site " + i));

                if (assignment && assignment.gadget) {
                    button.addClass("assigned");
                    button.append($("<div>").text(assignment.gadget));
                } else {
                    button.append($("<div>").text("Empty"));
                }

                if (selectedSite === i) {
                    button.addClass("selected");
                }

                list.append(button);
            }

            updateProgress();
        }

        /* ---------- GENERAL CHECKLIST ---------- */

        function renderTasks() {
            var list = $("#generalTaskList");
            list.empty();

            generalTasks.forEach(function (task, index) {
                var checkbox = $("<input>", {
                    type: "checkbox",
                    checked: !!completedTasks[index],
                    "data-task": index
                });

                list.append(
                    $("<label>")
                        .append(checkbox)
                        .append($("<span>").text(task))
                );
            });
        }

        /* ---------- PROGRESS COUNTER ---------- */

        function updateProgress() {
            var total = 0;
            var assigned = 0;

            Object.keys(areas).forEach(function (area) {
                total += areas[area].count;

                for (var i = 1; i <= areas[area].count; i++) {
                    var entry = assignments[siteKey(area, i)];

                    if (entry && entry.gadget) {
                        assigned++;
                    }
                }
            });

            var percentage = total ? assigned / total * 100 : 0;

            $("#gadgetProgressText").text(
                assigned + " / " + total + " sites assigned (" +
                Math.round(percentage) + "%)"
            );

            $("#gadgetProgressFill").css("width", percentage + "%");
        }

        /* ---------- MAP MARKERS ---------- */

        if (!$("#gadgetMarkers").length) {
            $("<div>", { id: "gadgetMarkers" }).appendTo("body");
        }

        function renderGadgetMarkers() {
    var container = $("#gadgetMarkers");
    container.empty();

    var slimeIcons = {
        pink: "pink-slime",
        rock: "rock-slime",
        tabby: "tabby-slime",
        phosphor: "phosphor-slime",
        rad: "rad-slime",
        boom: "boom-slime",
        honey: "honey-slime",
        hunter: "hunter-slime",
        crystal: "crystal-slime",
        quantum: "quantum-slime",
        dervish: "dervish-slime",
        tangle: "tangle-slime",
        mosaic: "mosaic-slime"
    };

    Object.keys(assignments).forEach(function (key) {
        var item = assignments[key];

        if (!item || !item.gadget ||
            typeof item.x !== "number" ||
            typeof item.y !== "number") {
            return;
        }

        var searchText = (
            (item.gadget || "") + " " + (item.value || "")
        ).toLowerCase();

        var iconName = null;

        Object.keys(slimeIcons).forEach(function (slime) {
            if (searchText.indexOf(slime) !== -1) {
                iconName = slimeIcons[slime];
            }
        });

        if (!iconName) return;

        var marker = $("<button>", {
            type: "button",
            class: "gadgetMapMarker",
            title: item.gadget + " — " + key,
            "data-key": key
        });

        var icon = $("<img>", {
            src: "img/plotItems/" + iconName + ".png",
            alt: item.gadget
        });

        icon.css({
            width: "34px",
            height: "34px",
            objectFit: "contain",
            display: "block"
        });

        marker.empty().append(icon);

        marker.css({
            left: (leftOffset + item.x) + "px",
            top: (topOffset + item.y) + "px",
            width: "42px",
            height: "42px",
            padding: "2px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        });

        container.append(marker);
    });
}


        /* ---------- EDITOR ---------- */

        function clearEditor() {
            selectedSite = null;
            $("#gadgetSelectedTitle").text("Select a gadget site");
            $("#gadgetChoice").val("");
            $("#gadgetNotes").val("");
            $("#gadgetStatus").text("");
            renderSites();
        }

        function openSite(number) {
            selectedSite = number;

            var key = siteKey(selectedArea, number);
            var assignment = assignments[key] || {};

            $("#gadgetSelectedTitle").text(
                areas[selectedArea].name + " — Site " + number
            );

            $("#gadgetChoice").val(assignment.value || "");
            $("#gadgetNotes").val(assignment.notes || "");

            $("#gadgetStatus").text(
                assignment.gadget
                    ? "Currently assigned: " + assignment.gadget
                    : "This site is empty."
            );

            renderSites();
        }

        $("#gadgetZone").on("change", function () {
            selectedArea = $(this).val();

            if (!areas[selectedArea]) {
                selectedArea = "main";
            }

            clearEditor();
        });

        $("#gadgetSiteList").on("click", ".gadgetSiteButton", function () {
            openSite(parseInt($(this).attr("data-site"), 10));
        });

        /* ---------- SAVE ASSIGNMENT ---------- */

        $("#saveGadget").on("click", function () {
            if (selectedSite === null) {
                $("#gadgetStatus").text("Select a site first.");
                return;
            }

            var gadget = $("#gadgetChoice").val();
            var notes = $("#gadgetNotes").val();
            var key = siteKey(selectedArea, selectedSite);

            if (!gadget) {
                delete assignments[key];
            } else {
                var previous = assignments[key] || {};

                assignments[key] = {
                    gadget: $("#gadgetChoice option:selected").text(),
                    value: gadget,
                    notes: notes,
                    x: previous.x,
                    y: previous.y
                };
            }

            saveAssignments();
            renderSites();
            renderGadgetMarkers();

            $("#gadgetStatus").text(
                gadget ? "Assignment saved." : "Assignment cleared."
            );
        });

        /* ---------- PLACE ON MAP ---------- */

        $("#placeGadget").on("click", function () {
            if (selectedSite === null) {
                $("#gadgetStatus").text("Select a site first.");
                return;
            }

            var key = siteKey(selectedArea, selectedSite);
            var assignment = assignments[key];

            if (!assignment || !assignment.gadget) {
                $("#gadgetStatus").text("Save a gadget assignment first.");
                return;
            }

            placingGadget = true;
            $("body").addClass("placingGadget");

            $("#gadgetStatus").text(
                "Placement mode: click the desired position on the ranch map."
            );
        });

        $("body").on("click.gadgetPlacement", function (event) {
            if (!placingGadget) return;

            if ($(event.target).closest(
                "#gadgetPlannerPanel, #toggleGadgetPlanner, #gadgetMarkers"
            ).length) {
                return;
            }

            var key = siteKey(selectedArea, selectedSite);
            var assignment = assignments[key];

            if (!assignment) return;

            var x = event.pageX - leftOffset;
            var y = event.pageY - topOffset;

            if (x < 0 || y < 0 || x > desiredWidth || y > desiredHeight) {
                $("#gadgetStatus").text("Click inside the ranch map.");
                return;
            }

            assignment.x = x;
            assignment.y = y;

            saveAssignments();
            renderGadgetMarkers();

            placingGadget = false;
            $("body").removeClass("placingGadget");

            $("#gadgetStatus").text("Gadget placed on the map!");
        });

        /* ---------- CLEAR ASSIGNMENT ---------- */

        $("#clearGadget").on("click", function () {
            if (selectedSite === null) {
                $("#gadgetStatus").text("Select a site first.");
                return;
            }

            delete assignments[siteKey(selectedArea, selectedSite)];

            saveAssignments();
            clearEditor();
            renderGadgetMarkers();

            $("#gadgetStatus").text("Site cleared.");
        });

        /* ---------- GENERAL CHECKLIST ---------- */

        $("#generalTaskList").on("change", "input", function () {
            var index = $(this).attr("data-task");
            completedTasks[index] = $(this).is(":checked");
            saveTasks();
        });

        /* ---------- TOGGLE PANEL ---------- */

        $("#toggleGadgetPlanner").off("click.gadgetPlanner").on(
            "click.gadgetPlanner",
            function () {
                panel.toggle();
            }
        );

        /* ---------- INITIAL DISPLAY ---------- */

        renderSites();
        renderTasks();
        updateProgress();
        renderGadgetMarkers();

    });
})();


