let PikachuStyles = `
/* 创建一个画布并居中 */
.skin{
    font-size: 100px;
    background-color: #ffe600;

    width: 4.5em;
    height: 2.8em;

    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-2.25em, -1.25em);
}
/* 两个可爱的眼睛 */
.eye{
    background-color: black;
    width: .55em;
    height: .55em;
    border-radius: 50%;
    position: absolute;
    top: .1em;
    margin-left: .8em;
}
.eye::after{
    content: '';
    display: block;

    background-color: white;
    border-radius: 50%;
    width: .18em;
    height: .18em;
    position: relative;
    left: .12em;
    top: .12em;
}
.eye.right{
    right: .8em;
}
/* 准备小鼻子 */
.nose{
    position: absolute;
    top: .55em;
    left: 50%;
    transform: translate(-50%, -50%);
    border: .12em solid transparent;
    border-top-color: black ;
    border-radius: 38%;
}
/* 俩腮红 */
.cheek{
    background-color: #ff0000;
    border:0.015em solid black;
    width: .8em;
    height: .8em;
    border-radius: 50%;
    position: absolute;
    top: 1.2em;
}
.cheek.left{
    left: .3em;
}
.cheek.right{
    right: .3em;
}
/* 嘴巴部分 */
.mouth{
    width: 2.6em;
    height: 2.6em;
    position: absolute;
    top: 2.0em;
    left: 50%;
    transform-origin: center;
    transform: translate(-1.3em, -1.3em);
}
.mouth svg{
    display: block;
    position: absolute;
    top: -1.5em;
    z-index: 1;
}
/* 俏皮的上嘴唇 */
.mouth svg:first-child{
    transform: scale(.2) translate(-5.53em);
}
.mouth svg:last-child{
    transform: scale(.2) matrix(-1,0,0,1.0,0,0) translate(1.53em);
}
/* 啊~~~ 张嘴 */
.mouth > .down{
    position: absolute;
    top: .18em;
    width: 100%;
    height: 1.6em;
    overflow: hidden;
}
.mouth > .down .yuan1{
    border: 2px solid black;
    width: 1.5em;
    height: 10em;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/420px;
    background-color: #9b000a;
    overflow: hidden;
}
.mouth > .down .yuan2{
    width: 2em;
    height: 3em;
    background-color: #ff485f;
    position: absolute;
    bottom: -1.75em;
    left: 50%;
    margin-left: -1em;
    border-radius: 1em;
}
/* 完成, 恭喜 !!! */
body {
    transition: background 1s ease;
    background: #ffe600;
}
`;

const hideMouseStyles = `
.mouth svg{
    display: none;
}
`;

// 先隐藏svg作图的mouth
let step;
step = hideMouseStyles.length - 1;

PikachuStyles = hideMouseStyles + PikachuStyles;
styles4pikachu.innerHTML = PikachuStyles.substring(0, step);

// 按行读取css, 并输出注释到提词器element
let reg4comment = /^\/\*.+\*\/$/; //匹配注释
let autocue = new Autocue("#autocue");
const run = () => {
  let newStep = PikachuStyles.indexOf("\n", step + 1);
  let currentLine = PikachuStyles.substring(step, newStep).trim();
  if (reg4comment.test(currentLine)) {
    console.log(currentLine);
    currentLine = currentLine.slice(2, -2);
    autocue.showSubtitle(currentLine);
  }

  step = newStep; // 更新step

  if (step < 0 || step > PikachuStyles.length) {
    clearInterval(id);
    return;
  }

  styles4pikachu.innerHTML = PikachuStyles.substring(0, step);
};

let time = 100;

const play = () => {
  return setInterval(run, time);
};
const pause = () => {
  clearInterval(id);
};

let id = play();
