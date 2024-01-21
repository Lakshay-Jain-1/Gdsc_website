document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("scroll", () => {
    gsap.to("#nav", {
      y: 10,
      scrollTrigger: {
        trigger: "#nav",
        scrub: 5,
      },
    });
    if (document.documentElement.scrollTop === 0) {
       gsap.to("#nav", {
        y: -5,
        scrollTrigger: {
          trigger: "#nav",
          scrub: 5,
        },
      });
    } 
  });

  let maintext = document.getElementById("main-text");

  let tl = gsap.timeline({ repeat: -1 });
  function maintext_animation() {
    tl.to("#main-text", {
      onStart: function () {
        $("#main-text").textillate({
          in: {
            effect: "rollIn",
            delayScale: 15,
            reverse: false,
          },
          yoyo: true,
          repeat: 20,
        });
      },
    });
  }

  maintext_animation();
});

let main_heading = document.getElementById("main-heading");
document.addEventListener("mouseover", () => {
  let timeline = gsap.timeline();
  timeline
    .to("#main-line", {
      scaleX: 55,
      duration: 5,
    })
    .to("#main-heading", {
      onStart: function () {
        main_heading.style.display = "inline-block";
        $("#main-heading").textillate({
          in: {
            effect: "rollIn",
          },
        });
      },
    });
});

gsap.to("#main-image", {
  rotationY: 360,
  transformOrigin: "center center",
  delay: 1,
  repeat: 12,
});

gsap.to("#description", {
  onStart: function () {
    $("#description").textillate({
      in: {
        effect: "fadeInLeftBig",
        // set the delay factor applied to each consecutive character
        delayScale: 1,
      },
    });
  },
});


function intro() {
  var tl = gsap.timeline();
  document.addEventListener("mouseover",()=>{
    tl
      .to("#vertical-animation",{
      duration:4,
      scaleY:30,
      delay:0.4,
    })
  })
  return tl;
}

function middle() {
  var tl = gsap.timeline();
  tl
      .to("#vertical-animation-1",{
        duration:3,
        opacity:1,
        delay:0.2,
    })

  return tl;
}



// stitch them together in a master timeline...
var master = gsap.timeline();
master
  .add(intro())
  .add(middle(), "+=1") 
  

