       ///resume-button///

       let resume1 = document
       .getElementById("resume-link-1")
        .addEventListener("click",opendrive);
     
       let resume2 = document
       .getElementById("resume-link-2")
       .addEventListener("click",opendrive);
     
     
     function opendrive(){
       window.open(
         (href =
           "https://drive.google.com/file/d/10C5IVHqeM2huu0F-KyZHNAo3XD0VGp9w/view?usp=share_link")
       );
      }
     
     
     
     
               //hamburger//
     
     let hamburger = document.querySelector(".hamburger")
     hamburger.onclick = ()=>{
      let navlist = document.querySelector(".nav-list")
      navlist.classList.toggle("active")
     
     }
      
         // typing animation//
     
     var typed = new Typed(".typing", {
       strings: ["Full Stack Web Developer"],
       typeSpeed: 100,
       backSpeed: 60,
       loop: true,
     });
     
     
     
     
  