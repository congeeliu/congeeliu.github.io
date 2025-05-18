let intervalOfI;

window.onload = function () {
  const rotateLetterI = () => {
    gsap.fromTo(
      "#i",
      { rotationX: 0, transformPerspective: 600, ease: "none", repeat: -1 }, // 初始状态和配置
      { rotationX: 540, duration: 1.75 } // 目标状态和更多配置
    );
    setTimeout(() => {
      gsap.fromTo(
        "#i",
        { rotationX: 540, transformPerspective: 600, ease: "none", repeat: -1 }, // 初始状态和配置
        { rotationX: 0, duration: 1.75 } // 目标状态和更多配置
      );
    }, 4750);
  };

  setTimeout(() => {
    rotateLetterI();
  }, 2000);
  intervalOfI = setInterval(rotateLetterI, 9500);

  gsap.to(".windmill-img", {
    rotation: 90,
    duration: 0.5, // 动画持续时间
    repeat: -1,
    repeatDelay: 1,
  });

  // const el = document.getElementById("main");
  // el.style.fontWeight = "bold";

  // gsap.to(".box", {
  //   x: 200,
  // });
};

window.onbeforeunload = function () {
  clearInterval(intervalOfI);
};
