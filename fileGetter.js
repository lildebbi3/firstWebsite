//Gets the text file of the list of youtube channels 
const file = "ytlinks.text";
var f = new XMLHttpRequest();
var res;
f.open("GET", file, false);
f.onreadystatechange = function () {
  if (f.readyState === 4) {
    if (f.status === 200 || f.status == 0) {
      res = f.responseText;
      res = res.split("\n").map(function (row) {
        row.split(" ");
        return row.replace(" , ", "");
      });
      console.log(res); //to see if contents are readable
    }
  }
};

f.send(null);
//turns them into buttons
for (var i = 0, len = res.length; i < len; ++i) {
  if (i % 2 == 0 && i != 0) {
    var x = document.createElement("button");
    x.setAttribute("onclick", "runCode(" + i + ")");
    x.setAttribute("class", "button");
    x.setAttribute("size", "12px");
    x.innerHTML = res[i - 1];
    document.getElementById('butt').appendChild(x);
  }
  console.log(x);
}
//important don't delete (line 23-25)
function runCode(num) {
  window.open(res[num]);
}
