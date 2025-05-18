window.onload = function () {
  const el = document.getElementById("main");
  el.style.fontWeight = "bold";

  gsap.to(".box", {
    x: 200,
  });
};
