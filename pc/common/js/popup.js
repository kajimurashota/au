function openwin(pop,winname){
	var avW = screen.availWidth;
	var avH = screen.availHeight;

	win1 = open(pop,'popup',"toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizable=1,top=0,left=0,width=" + avW + ",height=" + avH + "");
//	win1.resizeTo(screen.availWidth,screen.availHeight);
	win1.opener = self;
	win1.focus();
}