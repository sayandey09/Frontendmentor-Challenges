var iconShareBlock = document.querySelector(".icon-share"),
  iShare = document.querySelector(".i-share"),
  networks = document.querySelector(".networks");

iconShareBlock.addEventListener("click", function () {
  if (
    networks.style.visibility === "hidden" ||
    networks.style.visibility === ""
  ) {
    networks.style.visibility = "visible";
    this.style.background = "var(--desaturated-dark-blue)";
    iShare.style.fill = "var(--light-grayish-blue)";
    return;
  }
  networks.style.visibility = "hidden";
  this.style.background = "";
  iShare.style.fill = "";
});

document.addEventListener("click", function (event) {
  if (
    event.path[0].nodeName.toLowerCase() === "path" ||
    event.path[0].nodeName.toLowerCase() === "div" ||
    event.path[0].nodeName.toLowerCase() === "svg"
  ) {
    return;
  }
  networks.style.visibility = "hidden";
  iconShareBlock.style.background = "";
  iShare.style.fill = "";
});
