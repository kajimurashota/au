function SetPlanCookie(){

	var sType;
	var sCourse;
	var selType =document.getElementsByName("type");
	sType = selType[0].selectedIndex;
	var selCourse =document.getElementsByName("course");
	sCourse = selCourse[0].selectedIndex;
	if (sCourse == "0" || sType == "0"){
		alert("タイプとコースを選択してください。");
		return false;
	}
	else{
		setCookie("bycleType",sType);
		setCookie("bycleCourse",sCourse);
		openwin('/pca/popup_newbicycle_w_test2','newbicycle_w_test2');
		return true;
	}
}

function Set100PlanCookie(){
	setCookie("bycleType","100");
	setCookie("bycleCourse","100");
}

function setCookie(astrKey, astrVal) {
	var lstrTmp;
	lstrTmp = astrKey + "=" + astrVal + "; ";
	document.cookie = lstrTmp + "; path=/;";
}


function openwin(pop,winname){
	win1 = open(pop,'popup',"toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=450,height=680");
	if(document.images) {
		win1.opener = self;
		win1.focus();
	}
}

function getCookie(astrKey) {
	var lstrTmp1;
	var lstrTmp2;
	var lstrTmp2U;
	var lintCont1;
	var lintCont2;
	var lintCont3;
	var lintLen;

	lstrTmp1 = " " + document.cookie + ";";
	lintCont1 = lintCont2 = 0;
	lintLen = lstrTmp1.length;
	while (lintCont1 < lintLen) {
		lintCont2 = lstrTmp1.indexOf(";", lintCont1);
		lstrTmp2 = lstrTmp1.substring(lintCont1 + 1, lintCont2);
		lintCont3 = lstrTmp2.indexOf("=");
		lstrTmp2U = lstrTmp2.toUpperCase();
		if (lstrTmp2U.substring(0, lintCont3) == astrKey.toUpperCase()) {
			return(unescape(lstrTmp2.substring(lintCont3 + 1, lintCont2 - lintCont1 - 1)));
		}
		lintCont1 = lintCont2 + 1;
	}
	return("");
}

function getBycleType() {
	return getCookie("bycleType");
}

function getBycleCourse() {
	return getCookie("bycleCourse");
}
