/**
 <!-- =======================================================
  * Website Name: Climachan
  * URL: https://climchan.adityavermareal.repl.co/
  * Author: Aditya Verma
  * GitHub: https://github.com/ADITYAVOFFICIAL/climchan
  ======================================================== -->
*/
var str = document.getElementsByTagName('div')[0].innerHTML.toString();
var i = 0;
document.getElementsByTagName('div')[0].innerHTML = "";

setTimeout(function () {
    var se = setInterval(function () {
        i++;
        document.getElementsByTagName('div')[0].innerHTML = str.slice(0, i) + "|";
        if (i == str.length) {
            clearInterval(se);
            document.getElementsByTagName('div')[0].innerHTML = str;
        }
    }, 5);
}, 0);
