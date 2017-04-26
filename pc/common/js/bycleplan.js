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
		openwin('https://www.au-sonpo.co.jp/pca/popup_newbicycle_w','newbicycle_w');
		return true;
	}
}

function SetNewPlanCookie(){

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
		openwin('https://www.au-sonpo.co.jp/pca/popup_newbicycle_w_20120525','newbicycle_w_20120525');
		return true;
	}
}

function SetCourseCookie(planIdx){
	var sCourse1;
	var sCourse2;
	var selCourse1 =document.getElementsByName("course1");
	var selCourse2 =document.getElementsByName("course2");
	sCourse1 = selCourse1[0].selectedIndex;
	sCourse2 = selCourse2[0].selectedIndex;
	if (((planIdx == "1" || planIdx == "3" || planIdx == "5") && sCourse1 == "0") || ((planIdx == "2" || planIdx == "4" || planIdx == "6") && sCourse2 == "0")){
		alert("コースを選択してください。");
		return false;
	}
	else{
			if(planIdx == "1"){
				setCookie("bycleType","1");
				setCookie("bycleCourse",sCourse1);
				openwin('https://www.au-sonpo.co.jp/pca/popup_sports_20120525','popup_sports_20120525');
			}
			else if(planIdx == "2"){
				setCookie("bycleType","1");
				setCookie("bycleCourse",sCourse2);
				openwin('https://www.au-sonpo.co.jp/pca/popup_sports_20120525','popup_sports_20120525');
			}
			else if(planIdx == "3"){
				setCookie("bycleType","1");
				setCookie("bycleCourse",sCourse1);
				openwin('https://www.au-sonpo.co.jp/pca/popup_golf_20120525','popup_golf_20120525');
			}
			else if(planIdx == "4"){
				setCookie("bycleType","1");
				setCookie("bycleCourse",sCourse2);
				openwin('https://www.au-sonpo.co.jp/pca/popup_golf_20120525','popup_golf_20120525');
			}
			else if(planIdx == "5"){
				setCookie("bycleType","1");
				setCookie("bycleCourse",sCourse1);
				openwin('https://www.au-sonpo.co.jp/pca/popup_leisure_20120525','popup_leisure_20120525');
			}
			else if(planIdx == "6"){
				setCookie("bycleType","1");
				setCookie("bycleCourse",sCourse2);
				openwin('https://www.au-sonpo.co.jp/pca/popup_leisure_20120525','popup_leisure_20120525');
			}	
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
	var avW = screen.availWidth;
	var avH = screen.availHeight;

    if(winname == "myau" || winname == "newbicycle_100_20120525" || winname == "newbicycle_w_20120525"
	  || winname == "popup_golf_20120525" || winname == "popup_leisure_20120525" || winname == "popup_sports_20120525"){


	  win1 = open(pop,'popup',"toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,top=0,left=0,width=" + avW + ",height=" + avH + "");
//	  win1.resizeTo(screen.availWidth,screen.availHeight)
    }else{
	  win1 = open(pop,'popup',"toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=450,height=680");
    }
	win1.opener = self;
	win1.focus();
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
