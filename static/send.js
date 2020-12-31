




var val = 0
var path = dir[0]
//$("img").attr("src",path);
var img = document.createElement("img")
img.id = 'img'
img.src = "static/img/"+path
img.height = "500"
img.width = "500"
$("#img").append(img)







function send(which){
  if (which === "left"){
    //ratings[0].push(path)
    ratings[path] = 0
    console.log(ratings)
  }
  if (which === "right"){
    //ratings[1].push(path)
    ratings[path] = 1
    console.log(ratings)
  }
  if (val+1 == dir.length){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText)
      }
    };
    console.log(JSON.stringify(ratings))
    xhttp.open("GET", "/send?ratings="+JSON.stringify(ratings), true);
    xhttp.send();
    document.write("<h2>Thanks For Filling Out this Survey</h2>")
  }else{
  val +=1
  path = dir[val]
  img.src = "static/img/"+path
}
t = 0
}

var ratings = {}
$("body").keydown(function(e) {

    if (e.keyCode === 37){
      //ratings[0].push(path)
      send("left")
    }
    if (e.keyCode === 39){
      send("right")
    }

})


//$("body").on( "swipeleft", send("left") );

  // Bind the swipeHandler callback function to the swipe event on div.box
  $( "body" ).on( "swipeleft", swipeHandler );

  // Callback function references the event target and adds the 'swipe' class to it
  function swipeHandler( event ){
    console.log("ello")
    send("left")

  }



  // Bind the swipeHandler callback function to the swipe event on div.box
  $( "body" ).on( "swiperight", swipeHandler );

  // Callback function references the event target and adds the 'swipe' class to it
  function swipeHandler( event ){

    send("right")

  }


$("#back").click(function() {
  send("left")
});
$("#forward").click(function() {
  send("right")
});
