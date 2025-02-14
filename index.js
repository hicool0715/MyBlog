function adaptPageWidth() {
  function updateWidth() {
    let pageWidth = this.window.innerWidth;
    const body_page = this.document.getElementById("body-page");
    const ele_footer = this.document.getElementsByTagName("footer")[0];
    if (pageWidth > 1200) {
      body_page.style.width = "1200px";
      body_page.style.margin = "auto";
      ele_footer.style.width = "1200px";
      ele_footer.style.margin = "auto";
    } else {
      body_page.style.width = "100%";
      ele_footer.style.width = "100%"
    }
  }
  window.addEventListener("DOMContentLoaded", updateWidth);
  window.addEventListener("resize", updateWidth)
}

adaptPageWidth();