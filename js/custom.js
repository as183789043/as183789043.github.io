window.addEventListener("load", function () {
  // 延遲添加 'loaded' 類，以確保動畫至少顯示 0.3 秒
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 300);
});

// document.querySelector(".scroll-down").addEventListener("click", function (e) {
//   e.preventDefault();
//   document.querySelector("#main-content").scrollIntoView({
//     behavior: "smooth",
//   });
// });
