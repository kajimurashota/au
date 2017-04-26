function openwin(pop){
	win1 = open(pop,'popup',"toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=970,height=680");
	if(document.images) {
		win1.opener = self;
		win1.focus();
	}
}
