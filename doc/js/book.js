var page = 1;
var userpage;

function droidrage() {
 if (navigator.userAgent.match(/Android/)) {
     document.getElementById("real").style.right = "0px";
 }
}

function printpage() {
        var pagenum = document.getElementById("pagedepo").value;
        var elem = document.getElementById("page");
        elem.value=pagenum;
}

function getpage(userpage) {
    page = userpage;
}

function stoppage() {
      return false;
}
function gotopage() {
    if(page>0 && page<411 && (page%1)===0) {
        if (document.getElementById("test") != null) {
            document.getElementById("post").action="/book.cgi";
            document.getElementById("pageinput").value = page;
            var vol = document.getElementById("volinp").value;
            document.getElementById("volinp").value = Number(vol);
            document.getElementById("post").submit();
            }
            else {
        var url = window.location.href;
        url = url.replace(/:\d+$/,"");
        url+= ":" + page;
        window.open(url,"_self");
            }
    }
    else {
        var url = window.location.href;
        var regex = /:\d+$/;
        var printpage = regex.exec(url);
        printpage = printpage[0].replace(":","");
        var elem = document.getElementById("page");
        elem.value=printpage;
        alert("Entry must be an integer between 1 and 410.");
    }
}
function posttobrowse() {
    document.getElementById("pageinput").value = "";
    document.getElementById("posttitle").value = "";
    document.getElementById("post").action="libraryofbabel.info/browse.cgi";
    document.getElementById("post").submit();
}
function postpage(requested) {
    document.getElementById("post").action="/book.cgi";
    if (requested) {document.getElementById("pageinput").value = requested;}
    else { document.getElementById("pageinput").value = Math.floor((Math.random() * 410)+1); }
    var vol = document.getElementById("volinp").value;
    document.getElementById("volinp").value = Number(vol);
    document.getElementById("post").submit();
}
function postdownload() {
    var keeper = document.getElementById("pageinput").value;
    document.getElementById("pageinput").value = "";
    document.getElementById("post").action="/download.cgi";
    document.getElementById("post").submit();
    document.getElementById("pageinput").value = keeper;
}
function postanglish() {
    document.getElementById("post").action="/anglishize.cgi";
    var vol = document.getElementById("volinp").value;
    if (vol<10) {vol = Number(vol); vol.toString(); vol = "0" + vol;}
    document.getElementById("volinp").value = vol;
    document.getElementById("pageinput").value = document.getElementById("pagedepo").value;
    document.getElementById("post").submit();
}
function postbookmark() {
    document.getElementById("pageinput").value = document.getElementById("pagedepo").value;
    var title = document.getElementById("posttitle").value;
    title += document.getElementById("pageinput").value;
    title = prompt("Enter a title for your bookmark (use a-z, 0-9, space, comma and period. Max length 80)",title);
    title = title.toLowerCase();
    title=title.replace(/[^a-z0-9 ,.]/g,"");
    if (title.length>80) {title = title.substring(0,80);}
    document.getElementById("posttitle").value=title;
    document.getElementById("post").action="/bookmarker.cgi";
    document.getElementById("post").submit();
}
