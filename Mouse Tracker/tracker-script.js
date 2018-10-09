const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const MYCIRCLE = document.querySelector('.myCircle');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var horizontalPosition = windowWidth - e.clientX - 20;
    var verticalPosition = windowHeight - e.clientY - 20;

    // Set horizontal and vertical position.
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';
}

function mouseCoordinatesForMyCircle(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var horizontalPosition = e.clientX - 20;
    var verticalPosition = e.clientY - 20;

    // Set horizontal and vertical position.
    MYCIRCLE.style.left = horizontalPosition + 'px';
    MYCIRCLE.style.top = verticalPosition + 'px';
}


function changeColorOnTouch() {
    CIRCLE.style.backgroundColor = "black";
    CIRCLE.style.borderColor = "blue";
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);
// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinatesForMyCircle , false);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);
// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
