
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

function checkData() {
  if (document.form.data.value.length == 4) {
    return true;
  } else {
    alert(
        `${document.form.data.value} must have four characters.`);
    return false;
  }
}
