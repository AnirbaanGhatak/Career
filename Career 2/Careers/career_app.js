function flip() {
	var flip = document.getElementsByClassName("card");
	var i;

	for (i = 0; i < flip.length; i++) {
	  	flip[i].addEventListener("mouseover", function() {
		this.classList.toggle("cardIsFlipped");
	  });
	  	flip[i].addEventListener("mouseout", function() {
		this.classList.toggle("cardIsFlipped");
	  });
	}
}

flip();