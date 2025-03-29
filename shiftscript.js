function basic(){
    //putting elem




// here is the cursor
var cursor = document.getElementById("cursor");
var main = document.getElementById("main");

main.addEventListener("mousemove", function (dets) {
	gsap.to(cursor, {
		x: dets.clientX - cursor.offsetWidth / 2,
		y: dets.clientY - cursor.offsetHeight / 2,
		duration: 0.3, // Faster movement for better responsiveness
		ease: "power2.out", // Smooth easing
	});
});

// the cursor images

var firstBox = document.getElementById("firstbox");
var secondBox = document.getElementById("secondbox");
var thirdBox = document.getElementById("thirdbox");
var forthBox = document.getElementById("forthbox");
var fifthBox = document.getElementById("fifthbox");
var overlay = document.querySelector(".overlay");
var text1 = document.querySelector(".text1");
var text2 = document.querySelector(".text2");
var text3 = document.querySelector(".text3");
var text4 = document.querySelector(".text4");
var text5 = document.querySelector(".text5");









firstBox.addEventListener("mouseenter", function () {
    var imageUrl = firstBox.getAttribute("data-image");
    cursor.style.backgroundImage = `url(${imageUrl})`;
    cursor.style.backgroundSize = "cover";
    cursor.style.backgroundPosition = "center";
    cursor.style.width = "30vw"; // Adjust the size as needed
    cursor.style.height = "22.5vw";
	cursor.style.borderRadius = "0%";
    
    
    

    
    gsap.to(text1, {
        marginLeft: "2vw", // Move text smoothly
        duration: 1,     // Animation duration (seconds)
        ease: "power2.out" // Easing function for smooth motion
    });
});

firstBox.addEventListener("mouseleave", function () {
    cursor.style.backgroundImage = "none";
    cursor.style.width = "2vw";
    cursor.style.height = "2vw";
	cursor.style.borderRadius = "50%";
    // Adjust

    gsap.to(text1, {
        marginLeft: "14vw", // Move text smoothly
        duration: 1,     // Animation duration (seconds)
        ease: "power2.out" // Easing function for smooth motion
    });
});

secondBox.addEventListener("mouseenter", function () {
    var imageUrl = secondBox.getAttribute("data-image");
    cursor.style.backgroundImage = `url(${imageUrl})`;
    cursor.style.backgroundSize = "cover";
    cursor.style.backgroundPosition = "center";
    cursor.style.width = "30vw"; // Adjust the size as needed
    cursor.style.height = "22.5vw";
	cursor.style.borderRadius = "0%";

    gsap.to(text2, {
        marginLeft: "2vw", // Move text smoothly
        duration: 1,     // Animation duration (seconds)
        ease: "power2.out" // Easing function for smooth motion
    });

    
});

secondBox.addEventListener("mouseleave", function () {
    cursor.style.backgroundImage = "none";
    cursor.style.width = "2vw";
    cursor.style.height = "2vw";
	cursor.style.borderRadius = "50%";

    gsap.to(text2, {
        marginLeft: "14vw", // Move text smoothly
        duration: 1,     // Animation duration (seconds)
        ease: "power2.out" // Easing function for smooth motion
    });
});

console.log(text3);

thirdBox.addEventListener("mouseenter", function () {
    var imageUrl = thirdBox.getAttribute("data-image");
    cursor.style.backgroundImage = `url(${imageUrl})`;
    cursor.style.backgroundSize = "cover";
    cursor.style.backgroundPosition = "center";
    cursor.style.width = "30vw"; // Adjust the size as needed
    cursor.style.height = "22.5vw";
	cursor.style.borderRadius = "0%";
    gsap.to(text3, {
        marginLeft: "2vw", // Move text smoothly
        duration: 1,     // Animation duration (seconds)
        ease: "power2.out" // Easing function for smooth motion
    });

});

thirdBox.addEventListener("mouseleave", function () {
    cursor.style.backgroundImage = "none";
    cursor.style.width = "2vw";
    cursor.style.height = "2vw";
	cursor.style.borderRadius = "50%";
    thirdBox.style.background = "";

    gsap.to(text3, {
        marginLeft: "14vw", // Move text smoothly
        duration: 1,     // Animation duration (seconds)
        ease: "power2.out" // Easing function for smooth motion
    });
    
});
forthBox.addEventListener("mouseenter", function () {
    var imageUrl = forthBox.getAttribute("data-image");
    cursor.style.backgroundImage = `url(${imageUrl})`;
    cursor.style.backgroundSize = "cover";
    cursor.style.backgroundPosition = "center";
    cursor.style.width = "30vw"; // Adjust the size as needed
    cursor.style.height = "22.5vw";
	cursor.style.borderRadius = "0%";

    gsap.to(text4, {
        marginLeft: "2vw", // Move text smoothly
        duration: 1,     // Animation duration (seconds)
        ease: "power2.out" // Easing function for smooth motion
    });
});

forthBox.addEventListener("mouseleave", function () {
    cursor.style.backgroundImage = "none";
    cursor.style.width = "2vw";
    cursor.style.height = "2vw";
	cursor.style.borderRadius = "50%";

    gsap.to(text4, {
        marginLeft: "14vw", // Move text smoothly
        duration: 1,     // Animation duration (seconds)
        ease: "power2.out" // Easing function for smooth motion
    });
});
fifthBox.addEventListener("mouseenter", function () {
    var imageUrl = fifthBox.getAttribute("data-image");
    cursor.style.backgroundImage = `url(${imageUrl})`;
    cursor.style.backgroundSize = "cover";
    cursor.style.backgroundPosition = "center";
    cursor.style.width = "30vw"; // Adjust the size as needed
    cursor.style.height = "22.5vw";
	cursor.style.borderRadius = "0%";

    gsap.to(text5, {
        marginLeft: "2vw", // Move text smoothly
        duration: 1,     // Animation duration (seconds)
        ease: "power2.out" // Easing function for smooth motion
    });
});

fifthBox.addEventListener("mouseleave", function () {
    cursor.style.backgroundImage = "none";
    cursor.style.width = "2vw";
    cursor.style.height = "2vw";
	cursor.style.borderRadius = "50%";

    gsap.to(text5, {
        marginLeft: "14vw", // Move text smoothly
        duration: 1,     // Animation duration (seconds)
        ease: "power2.out" // Easing function for smooth motion
    });
});


//here is for the images
'use strict';

class DigitalClock extends HTMLElement {
	connectedCallback() {
		setInterval(() => {
			this.getTime();
		}, 1000);
	}

	getTime() {
		let date = new Date();

		let hour = this.querySelector(".hour");
		let minutes = this.querySelector(".minutes");
		let seconds = this.querySelector(".seconds");

		hour.innerHTML = date.getHours();
		minutes.innerHTML = date.getMinutes();
		seconds.innerHTML = date.getSeconds();
	}
}

customElements.define("digital-clock", DigitalClock);



// here is the video part
const videos = [
	"video4.mp4",
	"video5.mp4",
	"video6.mp4",
	"video7.mp4",
	"video8.mp4"
];

let currentIndex = 0; // Track current video index
const videoElement = document.getElementById("bgVideo");
const counterElement = document.getElementById("counter");

// Function to update counter
function updateCounter() {
	counterElement.textContent = `${currentIndex + 1}/${videos.length}`;
}

// Function to play the next video
function playNextVideo() {
	videoElement.src = videos[currentIndex]; // Set video source
	videoElement.play(); // Start playing
	updateCounter(); // Update counter text
	currentIndex = (currentIndex + 1) % videos.length; // Loop back after last video
}

// Play the first video
playNextVideo();

// When video ends, play the next one
videoElement.addEventListener("ended", playNextVideo);
}
basic();
function loads() {

var opacload =document.querySelector('.opacload');

document.addEventListener("DOMContentLoaded",function(){
    gsap.from(opacload,{
        opacity:0,
        delay:.5,
        duration:1,
        ease:"power4.out"
    });
});
var opacloads =document.querySelectorAll('.pageone');

document.addEventListener("DOMContentLoaded",function(){
    gsap.from(opacloads,{
        opacity:0,
        delay:1,
        duration:1,
        ease:"power4.out"
    });
});

var loads = document.querySelectorAll(".load");

document.addEventListener("DOMContentLoaded",function(){
     gsap.from(loads,{
        rotateX:120,
        transformOrigin:"center",
        opacity:0,

        duration:1,
        ease:"power4.out"
     });
});


// Make sure to register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Select all elements with class "scrool"
var scroolElements = document.querySelectorAll(".scrool");

// Loop through each element and apply animation
scroolElements.forEach((element) => {
    gsap.from(element, {
        rotateX: 120,
        transformOrigin: "center",
        opacity: 0,  // Fade in from 0 instead of 1
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: element,  // Use the element itself
            start: "top 80%", // Smooth effect
        }
    });
});
}
loads();

