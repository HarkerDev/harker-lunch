window.onload = function() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] =  "sunday";
    weekday[1] = "monday";
    weekday[2] = "tuesday";
    weekday[3] = "wednesday";
    weekday[4] = "thursday";
    weekday[5] = "friday";
    weekday[6] = "saturday";

    var n = d.getDay();
    hidePreviousDays(n);
    
    function hidePreviousDays(currentDayInteger) {
        if (window.innerWidth>770) { //desktop
            if (currentDayInteger!=6) {
                for (var i=0; i < currentDayInteger; i++) {
                    document.getElementById(weekday[i]).style.display='none';
                }
            }
        } else { //mobile
            for (var i=0; i < 7; i++) {
                if (i!=currentDayInteger) {
                    document.getElementById(weekday[i]).style.display='none';
                }
            }
            if (currentDayInteger==6||currentDayInteger==7) {
                var p = document.createElement("P");
                var t = document.createTextNode("no lunch");
                p.appendChild(t);
                document.body.appendChild(p);
            }
        }
    }
}