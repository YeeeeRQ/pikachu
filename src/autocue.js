// 接收一个字符串, 在指定element上显示3s后隐藏;

// autocue.innerText = "/* hello */";

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

    this.el.innerText = subtitle;

    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (this.el.innerText) {
        this.el.innerText = "";
      }
    }, 6 * 1000);
  }
}

// let autocue = new Autocue();
// autocue.showSubtitle("asdfasd");

// setTimeout(() => {
//   autocue.showSubtitle("hello1");
// }, 1000);
// setTimeout(() => {
//   autocue.showSubtitle("hello2");
// }, 5000);
