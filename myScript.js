window.alert("This is my portfolio.")
function anotherFunction(){
  var change = document.getElementById("theImage");
  change.width = "400";
  change.height = "400";
}
function thisFunction(){
  var change = document.getElementById("theImage");
  change.width = "200";
  change.height = "200";
}
function writeAbout(){
  var about=document.getElementById("me");
  if (about.innerHTML=="I am a girl and I am in a program called Girls Who Code. They teach me how to code. They even taught me how to make this website. These are a few projects that I have done. I go to Dr. Michael M. Krop High School. It has a really long name which is why we always shorten it to just Krop. I'm a senior in high school too."){
  about.innerHTML="I am a girl and I am in a program called Girls Who Code. They teach me how to code. They even taught me how to make this website. These are a few projects that I have done.";
}
  else if (about.innerHTML=="I am a girl and I am in a program called Girls Who Code. They teach me how to code. They even taught me how to make this website. These are a few projects that I have done."){
  about.innerHTML="I am a girl and I am in a program called Girls Who Code. They teach me how to code. They even taught me how to make this website. These are a few projects that I have done. I go to Dr. Michael M. Krop High School. It has a really long name which is why we always shorten it to just Krop. I'm a senior in high school too.";
}
}
function Previous(){
  var change=document.getElementById("theImage");
  if (change.src.match("HappyFace.png")){
    change.src="image-1.jpg"
  }
  else if (change.src.match("image-1.jpg")){
    change.src="image-2.jpg"
  }
  else if (change.src.match("image-2.jpg")){
    change.src="image-3.jpg"
  }
  else if (change.src.match("image-3.jpg")){
    change.src="HappyFace.png"
  }
}
function Next(){
  var change=document.getElementById("theImage");
  if (change.src.match("HappyFace.png")){
    change.src="image-3.jpg"
  }
  else if (change.src.match("image-3.jpg")){
    change.src="image-2.jpg"
  }
  else if (change.src.match("image-2.jpg")){
    change.src="image-1.jpg"
  }
  else if (change.src.match("image-1.jpg")){
    change.src="HappyFace.png"
  }
}
