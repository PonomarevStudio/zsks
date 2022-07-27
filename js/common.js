/*
 *  Вспомогательные javascript функции
 */

function trim(str)
{
	var searchStr  = " ";
	var replaceStr = "";
	var re = new RegExp(searchStr, "g");
	return str.replace(re, replaceStr);
}
function is_int(value){
	if (trim(value).length == 0) 
	{
		return true;
	};
	if ((parseInt(value) != trim(value)))
	{
		return false;
	};
	if (parseInt(value) < 0) 
	{
		return false;
	}
	return true;
}

/*
 * Функция для обработки соченитая клавиш Ctrl+стрелка вправо и Ctrl+стрелка влево в классе pager.
 * Для работы необходимы глобальные переменные ctlrprevions и ctrlnext.
 */

function ctrlnav(evt) {
	if (!evt && window.event) 
	{
		evt = window.event;
	};
	if (evt.ctrlKey) 
	{
		var lnk = null;
		var keycode = (evt.keyCode)? evt.keyCode : (evt.which)? evt.which : null;
		if (keycode) switch (keycode) {
			case 0x25: 
				if(ctrlprevions) lnk = ctrlprevions;
				break;
			case 0x27:
				if(ctrlnext) lnk = ctrlnext;
				break;
		}
		if (lnk) document.location.href = lnk;
	}
}
document.onkeydown = ctrlnav;