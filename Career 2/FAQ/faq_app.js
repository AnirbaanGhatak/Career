function collapse() {
	var coll = document.getElementsByClassName("collapsible");
	var i;
	var last;

	for (i = 0; i < coll.length; i++) {
	  	coll[i].addEventListener("click", function() {
	  		if(last)
	  		{
	  			if(last != this) {
		  			last.classList.toggle("active",false);
		  			last.nextElementSibling.style.maxHeight = null;
		  		}
	  		}
			this.classList.toggle("active");
		    var content = this.nextElementSibling;
		    if (content.style.maxHeight){
		    	content.style.maxHeight = null;
		    } else {
		      content.style.maxHeight = content.scrollHeight + "px";
		    }
		    last = this;
	  });
	}
}

collapse();