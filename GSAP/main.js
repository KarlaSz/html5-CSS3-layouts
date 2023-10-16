const box = document.querySelectorAll(".box");
const tl = new TimelineMax({ delay: 2 });

//jaki elelemnt animujemy w jakim czasie
// animujemy element, czas i stan od ktorego chcemy animowac do domyslnego
/* TweenMax.from(box, 5, {
  backgroundColor: "pink",
  x: 100,
  y: 200,
  opacity: 0,
}); */

// odwrotnosc from
//animujemy element od stanu domyslnego do koncowego
/* TweenMax.to(box, 5, {
  backgroundColor: "pink",
  x: 100,
  y: 200,
  opacity: 0,
}); */

/* TweenMax.set(box, { visibility: "visible" }); */

// jest polaczeniem, najpierw elem, czas i stan poczatkowy i koncowy
/* TweenMax.fromTo(
  box,
  2,
  {
    backgroundColor: "lime",
    opacity: 0,
  },
  {
    backgroundColor: "black",
    opacity: 0.5,
  }
);

TweenMax.to(box, 2, { x: 300, delay: 2.5 }); */

/* TweenMax.staggerFrom(box, 5, { opacity: 0, x: -200 }, 1.5); */

//timeline
tl.set(box, { visibility: "visible" });
tl.from(box, 1, { opacity: 0 })
  .to(box[0], 1, { x: -70, y: 70 })
  .to(box[2], 1, { x: 70, y: -70 }, "-=1");
