// Change background color when button is clicked
document.getElementById("colorBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});

// Log input value when typing
document.getElementById("nameInput").addEventListener("keyup", function(event) {
    console.log("User typed: " + event.target.value);
});

// Validate form submission
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting
    alert("Form submitted successfully!");
});

document.addEventListener("DOMContentLoaded", function() {
    let colorBtn = document.getElementById("colorBtn");

    // **Double-Click Event**
    colorBtn.addEventListener("dblclick", function() {
        document.body.style.backgroundColor = "purple"; // Change to secret color
        alert("Secret Double-Click Activated! 🎉");
    });

    // **Long-Press Event**
    let pressTimer;
    colorBtn.addEventListener("mousedown", function() {
        pressTimer = setTimeout(function() {
            document.body.style.backgroundColor = "gold"; // Another secret color
            alert("Secret Long-Press Activated! ✨");
        }, 1000); // Hold for 1 second
    });

    colorBtn.addEventListener("mouseup", function() {
        clearTimeout(pressTimer); // Cancel if released early
    });

    colorBtn.addEventListener("mouseleave", function() {
        clearTimeout(pressTimer); // Prevent accidental activation when mouse leaves
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    document.getElementById("nextBtn").addEventListener("click", function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    document.getElementById("prevBtn").addEventListener("click", function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    setInterval(function() { // Auto-slide every 3 seconds
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 3000);
});
document.addEventListener("DOMContentLoaded", function() {
    let nameInput = document.getElementById("nameInput");

    // A feedback message area
    let feedback = document.createElement("p");
    feedback.id = "feedbackMessage";
    nameInput.insertAdjacentElement("afterend", feedback);

    // Listen for input changes
    nameInput.addEventListener("keyup", function(event) {
        let inputText = event.target.value;

        // Provide feedback based on length
        if (inputText.length === 0) {
            feedback.textContent = "Start typing your name...";
            feedback.style.color = "gray";
        } else if (inputText.length < 3) {
            feedback.textContent = "Your name seems too short!";
            feedback.style.color = "red";
        } else {
            feedback.textContent = "Looks good! ✅";
            feedback.style.color = "green";
        }
    });
});
