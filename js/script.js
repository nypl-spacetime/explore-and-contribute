
var headerFirstLine = document.getElementById('header-first-line');
var headerLastLine = document.getElementById('header-last-line');

var firstLineFitty = fitty(headerFirstLine)

firstLineFitty.element.addEventListener('fit', function () {
  var fontSize = firstLineFitty.element.style.fontSize
  headerLastLine.style.fontSize = fontSize
})

// unsubscribe from fitty, restore to original state


// display: inline-block; */
//     font-size: 79.0123px;
//     line-height: 1.5em;