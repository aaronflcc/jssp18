function doSomething() {
    window.alert("test complete");
    console.log("doSomething() was called");
    document.querySelector("#firstPanel" ).innerHTML = "<p>First Panel Affected</p>";
}


function doSomethingElse() {
    document.querySelector("#thirdPanel").innerHTML = "<p>Look over here!</p>";
    console.log("Test of something else complete.");
}

function doAThirdThing() {
    //create an ordered list of number values that count from 50 to 0 by 5s
    var newStuff = "<ol>";
    for (var count=50; count >= 0; count -= 5) {
        newStuff += "<li>" + count + "</li>";
    }
    newStuff += "</ol>";
    document.querySelector("#secondPanel").innerHTML = newStuff;
}
