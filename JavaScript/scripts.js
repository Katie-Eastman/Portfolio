window.addEventListener("DOMContentLoaded", loadedHandler);

function loadedHandler() {
    setUpParticleEffect();
}

$(document).ready(function() {
    $("#homeDiv").addClass("fade-slide-up");
    $("#educationDiv").addClass("fade-slide-right");
    $("#skillsDiv").addClass("fade-slide-left");
    $("#contactDiv").addClass("fade-slide-up");
    $("#aboutDiv").addClass("fade-slide-up");
    $("#projectDiv").addClass("fade-slide-right");
	$("#carouselExampleIndicators").addClass("fade-slide-left");
});


function confirmSubmit(){
	alert("Thank you for contacting me! I will get back to you as soon as possible.");
}

function setUpParticleEffect() {
    let lastTimestamp = 0;

    document.addEventListener("mousemove", (event) => {
		const now = performance.now();
		if (now - lastTimestamp < 25) {
			return;
		}
		lastTimestamp = now;

		const particle = document.createElement("div");
		particle.className = "cursor-particle";
		const size = 5 + Math.random() * 8;
		particle.style.fontSize = `${size}px`;
		particle.style.left = `${event.clientX}px`;
		particle.style.top = `${event.clientY}px`;
		particle.style.opacity = "0";
		document.body.appendChild(particle);

		requestAnimationFrame(() => {
			particle.style.opacity = "1";
			particle.style.transform = `translate(-50%, -50%) scale(${1.4 + Math.random() * 0.7})`;
		});

		setTimeout(() => {
			particle.style.opacity = "0";
			particle.style.transform = `translate(-50%, -50%) scale(${2 + Math.random() * 0.8})`;
		}, 180);

		setTimeout(() => {
			particle.remove();
		}, 1500);
	});
}