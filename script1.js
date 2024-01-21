function intro() {
  var tl = gsap.timeline();
  tl.to("#program_1", {
    delay: 1,
    opacity: 1,
  })
    .to("#diagonal-animation-1", {
      opacity: 1,
      scale: 50,
      fontSize: 4.3,
      delay: 1,
      duration: 2.5,
      ease: "back.out(1.7)",
    })
    .to("#program_3", {
      opacity: 1,
    })
    .to("#diagonal-animation-2", {
      opacity: 1,
      scale: 50,
      fontSize: 4.3,
      duration: 2.5,
      ease: "back.out(1.7)",
    })

    .to("#program_4", {
      delay: 1,
      opacity: 1,
    })
    .to("#diagonal-animation-3", {
      opacity: 1,
      scale: 50,
      fontSize: 4.3,
      duration: 2.5,
      ease: "back.out(1.7)",
    })
    .to("#program_2", {
      opacity: 1,
    })
    .to("#diagonal-animation-4", {
      opacity: 1,
      scale: 50,
      fontSize: 4.3,
      duration: 2.5,
      ease: "back.out(1.7)",
    })
    .to("#program_5", {
      opacity: 1,
    });
  return tl;
}

var master = gsap.timeline();
master.add(intro());

//----
let click = 0;
document.getElementById("drop_down").addEventListener("click", () => {
  if (click == 0) {
    click = 1;
    gsap.to("#past-year-events", {
      y: -3,
    });
    let parent = document.createElement("div");
    parent.style.display = "flex";
    parent.style.flexDirection = "column";
    parent.style.rowGap = "5px";
    parent.setAttribute("id", "drop_down_1");

    let child1 = document.createElement("a");
    child1.setAttribute(
      "href",
      "https://gdsc.community.dev/events/details/developer-student-clubs-bharati-vidyapeeths-college-of-engineering-delhi-presents-gdsc-bvp-info-session-2023-24/",
    );
    const textNode1 = document.createTextNode("GDSC BVP Info Session ");
    child1.appendChild(textNode1);

    let child2 = document.createElement("a");

    child2.setAttribute(
      "href",
      " https://gdsc.community.dev/events/details/developer-student-clubs-bharati-vidyapeeths-college-of-engineering-delhi-presents-how-to-start-your-cloud-journey/",
    );
    const textNode2 = document.createTextNode(
      "How to start your Cloud Journey!🚀  ",
    );
    child2.appendChild(textNode2);

    let child3 = document.createElement("a");
    child3.setAttribute(
      "href",
      "https://gdsc.community.dev/events/details/developer-student-clubs-bharati-vidyapeeths-college-of-engineering-delhi-presents-cloud-study-jam-session-1/",
    );
    const textNode3 = document.createTextNode("Cloud Study Jam (Session-1)  ");
    child3.appendChild(textNode3);
    parent.append(child1, child2, child3);
    document.getElementById("past-year-events").append(parent);
  } else {
    gsap.to("#past-year-events", {
      y: 3,
    });
    document.getElementById("drop_down_1").remove();
    click = 0;
  }
});

let click_1 = 0;
document.getElementById("drop_down_3").addEventListener("click", () => {
  if (click_1 == 0) {
    click_1 = 1;
    gsap.to("#past-year-events_1", {
      y: -3,
    });
    let parent = document.createElement("div");
    parent.style.display = "flex";
    parent.style.flexDirection = "column";
    parent.style.rowGap = "5px";
    parent.setAttribute("id", "drop_down_2");

    let child1 = document.createElement("a");
    child1.setAttribute(
      "href",
      "https://gdsc.community.dev/events/details/developer-student-clubs-bharati-vidyapeeths-college-of-engineering-delhi-presents-onboarding-event-gdsc-bvp/",
    );
    const textNode1 = document.createTextNode("GDSC BVP Info Session ");
    child1.appendChild(textNode1);

    let child2 = document.createElement("a");

    child2.setAttribute(
      "href",
      " https://gdsc.community.dev/events/details/developer-student-clubs-bharati-vidyapeeths-college-of-engineering-delhi-presents-compose-camp/",
    );
    const textNode2 = document.createTextNode("Compose Camp");
    child2.appendChild(textNode2);

    let child3 = document.createElement("a");
    child3.setAttribute(
      "href",
      "https://gdsc.community.dev/events/details/developer-student-clubs-bharati-vidyapeeths-college-of-engineering-delhi-presents-blockchain-and-web3/",
    );
    const textNode3 = document.createTextNode("BlockChain and Web 3");
    child3.appendChild(textNode3);
    parent.append(child1, child2, child3);
    document.getElementById("past-year-events_1").append(parent);
  } else {
    gsap.to("#past-year-events_1", {
      y: 3,
    });
    document.getElementById("drop_down_2").remove();
    click_1 = 0;
  }
});
const carouselItems = document.querySelectorAll(".carousel_item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let i = -1;

setInterval(() => {
  Array.from(carouselItems).forEach((item, index) => {
    if (i < carouselItems.length) {
      item.style.transform = `translateX(-${i * 110}%)`;
    }
  });

  if (i < carouselItems.length) {
    i++;
  } else {
    i = 0;
  }
}, 1000);
