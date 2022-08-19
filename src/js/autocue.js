class Autocue {
  constructor(sel) {
    this.el = this.__getConsole(sel || "#autocue");
    this.timer = null;
  }
  __getConsole(sel) {
    return document.querySelector(sel);
  }
  showSubtitle(subtitle) {
    console.log(this.el);

    if (typeof subtitle !== "string") return;

    this.el.innerHTML = `<span class="autocue-subtitle">${subtitle}</span>`;

    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (this.el.innerHTML) {
        this.el.innerHTML = "";
      }
    }, 6 * 1000);
  }
}
