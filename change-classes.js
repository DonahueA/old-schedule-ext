var classes = document.getElementsByClassName("fc-event-title");

console.log(classes)
//for (var i = 0; i < classes.length;i++) {
//	console.log(classes)
//}

var replaceCalendar = ()=> {
	//Error checking?
	var calendar_table = document.getElementById("calendar");

	var start = "<table style=\"background-color:#D3D3D3;border:1px;\"><tbody><tr style=\"background-color:#BfB292; font-size:12px;\"><tr style=\"background-color:#BfB292; font-size:12px;\"><th></th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr>"
	for(var i=0;i<28;i++){
		var tr = "<tr>"
		for(var j=0;j<8;j++){
			if(j==0){
				var thirty = (i%2) ? ":30" : ":00" 
				tr += "<td>" + (Math.floor(i/2) + 7) + thirty + "</td>";
			}else{
				tr += "<td></td>"	
			}
		}
		start += tr
	}
	start += "</table>"

	calendar_table.innerHTML = start;
}

replaceCalendar()