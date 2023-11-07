function generateCode() {
    var link = document.getElementById("linkInput").value;
    var title = document.getElementById("titleInput").value;
    var generatedCode = `
  javascript:javascript: "use strict";
var t = window.open('_blank').document;
t.write('<!DOCTYPE html><html lang="en"><head><title>${title}</title><style>body{margin: 0px; height:100vh;}</style><meta charset="utf-8"/></head><body><iframe src="${link}" style="border: none; width: 100%; height: 100%; margin: 0px; z-index:100;"></iframe><div id="myDIV" style="z-index:500;width: 100%; height: 100vh; margin: 0px;position:fixed;top:0;left:0;display:none;background-color:white;"></div><script>document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState == "visible") {
	setTimeout(function(){
    document.title = "SnowRider";
document.getElementById("myDIV").style.display = "none";
}, 5000);
  } else {
    document.title = "about:blank";
	document.getElementById("myDIV").style.display = "block";
  }
});
let control = false;
let shift = false;
let h = false;
let isactive = false






</script><body/></html>');
t.close();`;

    var outputDiv = document.getElementById("output");
    outputDiv.textContent = generatedCode;
}
