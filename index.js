function adaptPageWidth() {
  function updateWidth() {
    let pageWidth = this.window.innerWidth;
    const body_page = this.document.getElementById("body-page");
    if (pageWidth > 1200) {
      body_page.style.width = "1200px";
      body_page.style.margin = "auto";
    } else {
      body_page.style.width = "100%";
    }
  }
  window.addEventListener("DOMContentLoaded", updateWidth);
  window.addEventListener("resize", updateWidth)
}

adaptPageWidth();