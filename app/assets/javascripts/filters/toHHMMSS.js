angular.module('toHHMMSS', [])
.filter('toHHMMSS', function() {
  return function(seconds) {
    var date = new Date(seconds * 1000);
    var hh = date.getUTCHours();
    var mm = date.getUTCMinutes();
    var ss = date.getSeconds();
    // This line gives you 12-hour (not 24) time
    if (hh > 12) {hh = hh - 12;}
    // These lines ensure you have two-digits
    if (hh < 10) {hh = "0"+hh;}
    if (mm < 10) {mm = "0"+mm;}
    if (ss < 10) {ss = "0"+ss;}

    return (hh > 1 && (hh + ":")) || "" + mm + ":" + ss;
  }
});
