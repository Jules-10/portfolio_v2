jQuery(document).ready(function() {

    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;
     
    $(document).mousemove(function(e){
      mouseX = e.pageX - 10;
      mouseY = e.pageY - 10; 
    });
      
    setInterval(function(){
      xp += ((mouseX - xp)/6);
      yp += ((mouseY - yp)/6);
      $("#cursorCircle").css({left: xp +'px', top: yp +'px'});
    }, 20);
  
});

const timer = ms => new Promise(res => setTimeout(res, ms))

async function cursorOnAction(){
    var curseur = document.getElementById("cursorCircle");
    curseur.style.height= "50px";
    curseur.style.width= "50px";
}
async function cursorOutAction(){
    var curseur = document.getElementById("cursorCircle");
    curseur.style.height= "30px";
    curseur.style.width= "30px";
}

function openContact(){
    var page = document.getElementById('contact');
    page.className = "left flex vertical opened"; 
    document.body.style.overflow="hidden";
}

async function closeContact(){
    var page = document.getElementById('contact');
    await timer(5);
    page.className = "left flex vertical closed"; 
    document.body.style.overflowY="scroll";
}