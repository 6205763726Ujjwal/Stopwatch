//Function to include in html popup code

function includePopupHTML(){

let html = '<div id="vis-popup"><span id="close"><img id="npop" src="/Images/Closed.png"alt="closed"><span><img id="leftarrow" src="/Images/Left.png" alt="">
<img id="rightarrow" src="/Images/Right.png" alt=""><img id="mainPopImage" src="/Images/lap1.jpg" alt=""></div>';

let popdiv = document.createElement("div");
popdiv.innerHTML = html;
document.body.insertBefore(popdiv,document.body.firstChild);
}

let img;
let current;
 

function imagePopupInit(target){

    img = document. getElementsByClassName(target);

    // add event listener on all selected images

    for(var i = 0; i<img.length;i++){
        //add pointer
        img[i].style.cursor = 'pointer';

        // add event Listener
        img[i].addEventListener("click",function(){
            document.getElementById("mainPopImage").src = this.src;
            document.getElementById("vis-popup").style.display = "block";
            checkArrow();
    
    });

}
includePopupHTML();
// next button 
document.getElementById('rightarrow').addEventListener('click',function(){
    nextimg();
});
//prev button
document.getElementById('leftarrow').addEventListener('click',function(){
    previmg();
});

// close  image
 function closePopUp(){
    document.getElementById("mainPopImage").src="";
    document.getElementById("vis-pop").style.display = 'none';

 }
 //next image

 function nextimg(){
    getCurrentImage();
    current++;
    document.getElementById("mainPopImage").src = img[current].src;
    checkArrow();
 }

// prev image
function nextimg(){
    getCurrentImage();
    current -- ;
    document.getElementById("mainPopImage").src = img[current].src;
    checkArrow();
 }
 function  getCurrentImage(){
    for(var i = 0;i<img.length;i++){
        if(img[i].src ==document.getElementById("mainPopImage").src){
            current = i;
        }
    }
 }
  function checkArrow(){
    getCurretnImage();
    if(current == "0"){
        document.getElementById('leftarrow').style.display ='none';
        document.getElementById('rightarrow').style.display ='block';
        


    }
    else if(current == img.length-1){
        document.getElementById('rightarrow').style.display ='none';
        document.getElementById('leftarrow').style.display ='block';

    }
    else{
        document.getElementById('leftarrow').style.display ='block';
        document.getElementById('rightarrow').style.display ='block';
    }
  }

