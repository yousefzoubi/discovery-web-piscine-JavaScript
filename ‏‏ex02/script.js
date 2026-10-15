document.addEventListener("DOMContentLoaded", function() {
    const mainHeader = document.getElementById("main-header");
	
    const descriptionText = document.querySelector(".description");
    const statusBox = document.querySelector("#status-box");


    mainHeader.textContent = "DOM Tree Mutated Successfully!";
    descriptionText.textContent = "This text was updated safely using textContent.";

    statusBox.style.fontSize = "20px";
	
    statusBox.classList.add("active");
	
	//statusBox.classList.remove("active");
});

