let sidemenu=document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}
 // typing text animation script
 var typed = new Typed(".typing", {
  strings: ["Full Stack  Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
})

// document.getElementById('resume-button-1').addEventListener("click",()=>{
//   // console.log("OPENinig.....")
//   window.location.assign("https://drive.google.com/file/d/10C5IVHqeM2huu0F-KyZHNAo3XD0VGp9w/view?usp=share_link", "_blank");
// })

document.getElementById('resume-link-1').addEventListener("click",()=>{
  // console.log("OPENinig.....")
  window.location.assign("https://drive.google.com/file/d/10C5IVHqeM2huu0F-KyZHNAo3XD0VGp9w/view?usp=share_link", "_blank");
})

document.getElementById('resume-link-2').addEventListener("click",()=>{
  // console.log("OPENinig.....")
  window.location.assign("https://drive.google.com/file/d/10C5IVHqeM2huu0F-KyZHNAo3XD0VGp9w/view?usp=share_link", "_blank");
})

// sr.reveal('#home',{})
// sr.reveal('#main-cont p',{delay:200})
// sr.reveal('#main-cont h1',{delay:300})
// sr.reveal('.container',{delay:400})
// sr.reveal('#resume-button-2',{interval:500})


const sr = ScrollReveal({
  origin:'left',
  distance:'120px',
  duration:2000,
  reset:true
})             

   // scroll HOME//
  sr.reveal('#home',{})
  sr.reveal('#one',{delay:300})
  sr.reveal('.home-img',{delay:400})
  sr.reveal('#user-detail-name',{delay:500})
  sr.reveal('.text-1',{delay:600})
  sr.reveal('#resume-button-2',{interval:700})

  sr.reveal('#about h1',{delay:200})
  sr.reveal('#img',{delay:400})
  sr.reveal('#user-detail-intro',{delay:600})

  // scroll SKILLS//
  sr.reveal('.skill',{delay:200})


       // scroll PROJECTS//
       sr.reveal('.project',{})
       sr.reveal('.project-card img',{delay:100})
       sr.reveal('.project-title',{delay:200})
       sr.reveal('.project-description',{delay:200})
       sr.reveal('.project-tech-stack',{delay:200})
       sr.reveal('.repo-links',{delay:200})


         // scroll GITHUB//
    sr.reveal('#github-streak-stats',{delay:200})
    sr.reveal('#github-top-langs',{delay:400})
    sr.reveal('#github-stats-card',{delay:600})

    sr.reveal('.calendar',{delay:600})



     // scroll CONTACT//
     sr.reveal('.column-left',{})   
     sr.reveal('#contact-github',{delay:100})
     sr.reveal('#contact-linkedin',{delay:200}) 
     sr.reveal('#contact-phone',{delay:300}) 
     sr.reveal('#contact-email',{delay:400})