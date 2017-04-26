function smartRollover() {
	if(document.getElementsByTagName) {

		//画像
		var images = document.getElementsByTagName("img");
		for(var i=0; i < images.length; i++) {
			if(images[i].getAttribute("src").match("_off."))
			{
				images[i].onmouseover = function() {
					this.style.cursor = 'pointer';
					this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
				}
				images[i].onmouseout = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
				}
			}
		}

		//画像Submitボタン
		var images = document.getElementsByTagName("input");
		for(var i=0; i < images.length; i++) {
			if(images[i].getAttribute("type") == "image" && images[i].getAttribute("src").match("_off."))
			{
				images[i].onmouseover = function() {
					this.style.cursor = 'pointer';
					this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
				}
				images[i].onmouseout = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
				}
			}
		}

	}
}

if(window.addEventListener) {
	window.addEventListener("load", smartRollover, false);
}
else if(window.attachEvent) {
	window.attachEvent("onload", smartRollover);
}