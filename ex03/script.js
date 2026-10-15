document.addEventListener("DOMContentLoaded", function() {
   

    const counterValue = document.getElementById("counter-value");
	
	
    const incrementBtn = document.getElementById("increment-btn");
    const decrementBtn = document.getElementById("decrement-btn");
    const resetBtn = document.getElementById("reset-btn");
	
	
	
 let count = 0;
 
 
    function updateDisplay() {
		
        counterValue.textContent = count;

        if (count > 0) {counterValue.style.color = "green";} 
		
		else 	
		
		if (count < 0) { counterValue.style.color = "red";} 
		
		else
			
		{counterValue.style.color = "black";}
   
	}



    incrementBtn.addEventListener(
	
	"click", 
	function ()
	{
        count = count+1;
	 updateDisplay();
	
		//to avoid repeating the code 
		//we used nested functions 
		
		/*counterValue.textContent = count;
	
        if (count > 0) {
          counterValue.style.color = "#2ecc71";
        } else if (count < 0) {
            counterValue.style.color = "#e74c3c";
        } else {
            counterValue.style.color = "#333333";
        }
		*/
	
	}
	
	
);

    decrementBtn.addEventListener("click", function() {
        count = count - 1;
        updateDisplay();
    });


    resetBtn.addEventListener("click", function() {
        count = 0;
        updateDisplay();
    });
});