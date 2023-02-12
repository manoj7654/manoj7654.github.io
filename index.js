let sidemenu=document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}
 // typing text animation script
 var typed = new Typed(".typing", {
  strings: ["Full Stack Back-End Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
})

document.getElementById('resume-link-1').addEventListener("click",()=>{
  // console.log("OPENinig.....")
  window.location.assign("https://drive.google.com/file/d/10C5IVHqeM2huu0F-KyZHNAo3XD0VGp9w/view?usp=share_link", "_blank");
})

// document.getElementById('resume-link-1').addEventListener("click",()=>{
//   // console.log("OPENinig.....")
//   window.location.assign("https://drive.google.com/file/d/10C5IVHqeM2huu0F-KyZHNAo3XD0VGp9w/view?usp=share_link", "_blank");
// })

document.getElementById('resume-link-2').addEventListener("click",()=>{
  // console.log("OPENinig.....")
  window.location.assign("https://drive.google.com/file/d/10C5IVHqeM2huu0F-KyZHNAo3XD0VGp9w/view?usp=share_link", "_blank");
})
