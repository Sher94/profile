window.onload = function(){
	console.log("ready");
	// slider
	var bg = document.querySelector(".bg");
	var count = 0;
	function slide(){
		count ++;
		
		if (count == 1){
			console.log("one");
			bg.style.backgroundImage = "url(mac.jpg)";
		}
		else if (count == 2){
			console.log("two");
			bg.style.backgroundImage = "url(main.jpg)";
			count = 0;
		}
		
		
	}
	var slider = setInterval(slide,3000);
	
	if(window.innerWidth <768){
		clearInterval(slider);
	}
	
	
	// mobile
	var menu = document.querySelector(".mobile i");
	var nav = document.querySelector(".mobile ul");
	var time = 0;
	
	menu.addEventListener("click",go);
		function go(){
			time++;
			if(time%2 !=0){
				nav.style.display = "block";
			}
			else if(time%2 ==0){
				nav.style.display = "none";
			}
		}
	
	
	
	
	
	
	
	
	
}
