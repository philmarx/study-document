	function dateTimeFormat(dateNum){
		function repair(minute){
			var str=minute+'';
			if(str.length===1){
				str='0'+str;
			}
			return str;
		}
		var date=new Date(dateNum);
		var dateString=date.getFullYear()+'-'+repair((date.getMonth()+1))+'-'+repair(date.getDate())+" "+date.getHours()+":"+repair(date.getMinutes())+repair(date.getSeconds());
		return dateString;
	}