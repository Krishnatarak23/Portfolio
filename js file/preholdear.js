window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    setTimeout(function () {
      preloader.style.display = "none";
    }, 2000); // Change the duration (in milliseconds) as desired
  });
  

        var imageno =1;
        displayimg(imageno);
    
           function nextimg(n)
           {
           displayimg(imageno += n)
        }
    
        function currentSlide(n)
        {
           displayimg(imageno = n)
        }
    
        function displayimg(n)
        {
           var i;
           var image = document.getElementsByClassName("image");
           var dots = document.getElementsByClassName("dot");
    
           if(n > image.length){
                   imageno = 1;
           }
    
           if( n < 1){
                  imageno = image.length;
           }
           
           for(i=0; i < image.length; i++){
                  image[i].style.display ="none"
           }
    
    
           for(i=0;  i < dots.length; i++){
                 dots[i].className = dots[i].className.replace(" active", "");
           }
    
    
           image[imageno - 1].style.display="block";
           dots[imageno - 1].className += " active"
    
        }
    
  


    let btn =document.querySelector('a');
    btn.addEventListener('mousemove',e=>{
        let rect =e.target.getBoundingClientRect();
        let x = e.clientX * 3 - rect.left;
        btn.style.setProperty('--x',x + 'deg');
    })





    var hamburger = document.querySelector(".hamburger");
    var navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() =>{
   hamburger.classList.toggle("active");
   navMenu.classList.toggle("active");

})


document.querySelectorAll(".nav-link").forEach( n => n.addEventListener("click", () =>{
   hamburger.classList.remove("active");
   navMenu.classList.remove("active");

}))
     