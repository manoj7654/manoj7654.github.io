 // typing text animation script
 var typed = new Typed(".typing", {
  strings: ["Full Stack Back-End Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

let drive=document.querySelector(".Drivegoogle")
drive.addEventListener("click",openDrive);


function openDrive(){
  window.open(
    (href="https://drive.google.com/file/d/10C5IVHqeM2huu0F-KyZHNAo3XD0VGp9w/view?usp=share_link")
  );
}
