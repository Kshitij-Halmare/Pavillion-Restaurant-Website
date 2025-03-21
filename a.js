document.addEventListener("DOMContentLoaded", function() {
    // Select all links inside the navbar
    const navbarLinks = document.querySelectorAll('.topnav a');

    // Add click event listener to each navbar link
    navbarLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior

            // Get the target section's id from the href attribute
            const sectionId = this.getAttribute('href').substring(1);

            // Use the target section id to find the corresponding element
            const section = document.getElementById(sectionId);

            if (section) {
                // Scroll to the target section smoothly
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Call rotateContent function to rotate text and images
    rotateContent();
});

// JavaScript to rotate text and image every 5 seconds
function rotateContent() {
    const texts = ["BreakFast","Burger","Bread", "Seafood","Coffee"];
    const images = ["breakfast_pav436x245.png", "burger2_pav479x299.png","bread_pav228x146.png" ,"seafood_pav235x151.png","coffee.png"];

    let currentIndex = 0;

    setInterval(function() {
        // Update text
        document.getElementById('displayText').textContent = texts[currentIndex];
        // Update image source
        document.getElementById('displayImage').src = images[currentIndex];

        // Move to next item in the arrays
        currentIndex++;
        if (currentIndex >= texts.length) {
            currentIndex = 0;
        }
    }, 3000); // Rotate every 5 seconds (5000 milliseconds)
}
let a = 0;

document.getElementById("left").addEventListener("click", changeLeft);
document.getElementById("right").addEventListener("click", changeRight);

function changeLeft() {
    const images = [
        "imgslider3.jpg",
        "imgslider.jpg",
        "imgslider2.jpg",
        "image3_slide_pav.jpg"
    ];

    // Update index a with wrap-around logic for left button
    a = (a + 1) % images.length;

    // Update the image src based on the updated index a
    document.getElementById("img").src = images[a];
}

function changeRight() {
    const images = [
        "imgslider3.jpg",
        "imgslider.jpg",
        "imgslider2.jpg",
        "image3_slide_pav.jpg"
    ];

    // Update index a with wrap-around logic for right button
    // Use conditional operator to handle negative values correctly
    a = (a - 1 + images.length) % images.length;

    // Update the image src based on the updated index a
    document.getElementById("img").src = images[a];
}
document.addEventListener("DOMContentLoaded", changetestimonials);

document.addEventListener("DOMContentLoaded", changetestimonials);

function changetestimonials() {
    const names = ["Zara Parker", "John Doe", "Jane Smith"];
    const testimonials = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque eu arcu porttitor convallis. Cras iaculis mattis ultrices. Cras sed ipsum at turpis ullamcorper interdum et nec ante.",
        "Suspendisse vitae faucibus ex. Donec fringilla nisi sit amet est tincidunt, quis ultrices lorem laoreet. Quisque malesuada velit et erat bibendum, in finibus dolor malesuada.",
        "Vivamus at enim ac felis varius tristique. Sed in ex id ligula gravida placerat. Nulla facilisi. Nulla eu orci nec libero lobortis tempor."
    ];

    let index = 0;
    setInterval(function () {
        index = (index + 1) % names.length;
        console.log(names[index]+" "+testimonials[index]);
        document.getElementById("name").textContent = names[index];
        document.getElementById("value").textContent = testimonials[index];
    }, 3000); // Adjust the interval as needed (milliseconds)
}


