const tl = new TimelineMax();

const plant = document.querySelectorAll(".plant");
const leafs = document.querySelectorAll(".leaf");
const body = document.getElementsByTagName("body");
const pot = document.getElementById("Pot");
const flower = document.getElementById("flower");
const stem = document.getElementById("stem");

tl.set(body, { backgroundColor: "#f8f6f3" });

tl.from(pot, 1, { y: -400 })
  .addLabel("lightsOn")
  .to(body, 0.5, { backgroundColor: "#f8f6f3" })
  .addLabel("grow")
  .from(stem, 1, { scaleY: 0, transformOrigin: "50% 100%" })
  .staggerFromTo(
    leafs,
    0.3,
    { scale: 0.6, opacity: 0 },
    { scale: 1, opacity: 1 },
    1
  )
  .staggerFromTo(
    flower.children,
    0.6,
    { scale: 0.7, opacity: 0 },
    { scale: 1, opacity: 1 },
    0.7
  );
