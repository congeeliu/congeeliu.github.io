document.addEventListener("DOMContentLoaded", function () {
  const wheel = document.getElementById("wheel");
  let angle = 0;
  let isDragging = false;
  let startX, startY, startAngle;
  let inertiaActive = false;

  // 摩擦系数
  const friction = 0.97;

  // 更新转盘的角度
  function updateWheelRotation() {
    wheel.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
  }

  // 计算角度变化
  function calculateAngle(x, y) {
    return Math.atan2(y - startY, x - startX) * (180 / Math.PI) - startAngle;
  }

  // 开始拖动
  wheel.addEventListener("mousedown", function (e) {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    startAngle = angle;
  });

  // 当鼠标移动时更新角度
  window.addEventListener("mousemove", function (e) {
    if (!isDragging) return;
    angle += calculateAngle(e.clientX, e.clientY);
    updateWheelRotation();
  });

  // 结束拖动并应用惯性
  window.addEventListener("mouseup", function () {
    if (!isDragging) return;
    isDragging = false;
    inertiaActive = true;

    function inertia() {
      if (!inertiaActive) return;
      angle += 5; // 假设的速度增量
      angle *= friction; // 应用摩擦力
      updateWheelRotation();

      if (Math.abs(angle) < 0.1) {
        // 当速度足够小，停止惯性
        inertiaActive = false;
        return;
      }

      requestAnimationFrame(inertia);
    }

    inertia();
  });
});
