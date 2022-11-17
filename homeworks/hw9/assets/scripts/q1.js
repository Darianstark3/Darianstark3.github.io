
//
// Part 1: Code setBackgroundColor() so the background color of #q1-container changes to the color specified
//

/**
 * Sets the background color of #q1-container
 *
 * @param {string} color The background color that #q1-container should change to
 */
function setBackgroundColor(color) {
    // TODO: Get the element with the id "q1-container" and set its background color to the input color
    let background = document.getElementById("q1-container")
    background.style.backgroundColor = color;

}

//
// Part 2: Code the function redButtonClicked() and make the browser run the function for you when #q1-btn-red is clicked
//

// For the red button
// Use the color #EF476F, or change it up to your liking
// If you do decide to change the color, probably also consider updating the corresponding button color in CSS :)

/**
 * Handler function that the browser should run when the red button is clicked
 */
function redButtonClicked() {
    // TODO: Use the setBackgroundColor() to set the background color to #EF476F (or another color of your choice)
    red = "EF476F";
    setBackgroundColor(red)
}

// This gets the element with id "q1-btn-red" and sets the browser to run the function redButtonClicked() when someone clicks the element
document.getElementById("q1-btn-red").onclick = redButtonClicked;

// After you finish part 1 & 2, the clicking the red button should turn the background color red!

//
// Part 3: Program the yellow button similar to what you did with the red button
//

// For the yellow button
// Use the color #FFD166, or change it up to your liking

// TODO: Define a function like yellowButtonClicked() that sets the background color
function yellowButtonClicked() {
    yellow = "FFD166";
    setBackgroundColor(yellow)
}




// TODO: Set the browser to run the function yellowButtonClicked() when someone clicks #q1-btn-yellow

document.getElementById("q1-btn-yellow").onclick = yellowButtonClicked;



//
// Part 4: A little more practice, let's do the same for the rest of the buttons
//

// For the green button
// Use the color #06D6A0, or change it up to your liking

// TODO: Make the green button work similarly
function greenButtonClicked() {
    green = "06D6A0";
    setBackgroundColor(green)
}
document.getElementById("q1-btn-green").onclick = greenButtonClicked;

// For the light blue button
// Use the color #118AB2, or change it up to your liking

// TODO: Make the light blue button work similarly
function lightBlueButtonClicked() {
    lightBlue = "118AB2";
    setBackgroundColor(lightBlue)
}
document.getElementById("q1-btn-lightblue").onclick = lightBlueButtonClicked;




// For the blue button
// Use the color #073B4C, or change it up to your liking

// TODO: Make the blue button work similarly
function blueButtonClicked() {
    blue = "073B4C";
    setBackgroundColor(blue)
}
document.getElementById("q1-btn-blue").onclick = blueButtonClicked;