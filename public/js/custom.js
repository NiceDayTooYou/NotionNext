var OriginTitile = document.title;
var jiao;

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === undefined || document.visibilityState === 'visible') {
        document.title = '(^∇^*)欢迎肥来！' + OriginTitile;
        jiao = setTimeout(function () {
            document.title = OriginTitile;
        }, 4000);
    } else {
        document.title = '你怎么跑啦w(ﾟДﾟ)w';
        clearTimeout(jiao);
    }
});

/**
 * 封装文字弹出的函数
 * @param {*} arr
 * @param {*} options
 * @returns
 */
const fnTextPopup = function (arr, options) {
  // arr参数是必须的
  if (!arr || !arr.length) {
    return
  }
  // 主逻辑
  let index = 0
  document.documentElement.addEventListener('click', function (event) {
    const x = event.pageX; const y = event.pageY
    const eleText = document.createElement('span')
    // 随机颜色
    eleText.style.color = 'rgb(' + 255 * Math.random() + ',' + 255 * Math.random() + ',' + 255 * Math.random() + ')'
    // 动画样式
    eleText.className = 'text-popup'
    this.appendChild(eleText)
    if (arr[index]) {
      eleText.innerHTML = arr[index]
    } else {
      index = 0
      eleText.innerHTML = arr[0]
    }
    // 动画结束后删除自己
    eleText.addEventListener('animationend', function () {
      eleText.parentNode.removeChild(eleText)
    })
    // 位置
    eleText.style.left = (x - eleText.clientWidth / 2) + 'px'
    eleText.style.top = (y - eleText.clientHeight) + 'px'
    // index递增
    index++
  })
}

// 执行，传入文字内容
fnTextPopup(['❤', '🙂', '💩', '👻', '👀', '🪴', '🍉', '☃️', '🎄', '🎈', '🎯', '💯'])

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

// for intro motion
let mouseMoved = false;

let mouse = {
    x: .5 * window.innerWidth,
    y: .5 * window.innerHeight,
    tX: 0,
    tY: 0
}
let params = {
    pointsNumber: 40,
    widthFactor: .3,
    mouseThreshold: .6,
    spring: .4,
    friction: .5
};

const touchTrail = new Array(params.pointsNumber);
for (let i = 0; i < params.pointsNumber; i++) {
    touchTrail[i] = {
        x: mouse.x,
        y: mouse.y,
        vx: 0,
        vy: 0,
    }
}

window.addEventListener("click", e => {
    updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("mousemove", e => {
    mouseMoved = true;
    updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("touchmove", e => {
    mouseMoved = true;
    updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
});

function updateMousePosition(eX, eY) {
    mouse.tX = eX;
    mouse.tY = eY;
}

setupCanvas();
updateBubbles(0);
window.addEventListener('resize', () => {
    setupCanvas();
});


function updateBubbles(t) {

    // for intro motion
    if (!mouseMoved) {
        mouse.tX = (.5 + .3 * Math.cos(.002 * t) * (Math.sin(.005 * t))) * window.innerWidth;
        mouse.tY = (.5 + .2 * (Math.cos(.005 * t)) + .1 * Math.cos(.01 * t)) * window.innerHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    touchTrail.forEach((p, pIdx) => {
        if (pIdx === 0) {
            p.x = mouse.x;
            p.y = mouse.y;
            ctx.moveTo(p.x, p.y);
        } else {
            p.vx += (touchTrail[pIdx - 1].x - p.x) * params.spring;
            p.vy += (touchTrail[pIdx - 1].y - p.y) * params.spring;
            p.vx *= params.friction;
            p.vy *= params.friction;

            p.x += p.vx;
            p.y += p.vy;
        }
    });

    for (let i = 1; i < touchTrail.length - 1; i++) {
        const xc = .5 * (touchTrail[i].x + touchTrail[i + 1].x);
        const yc = .5 * (touchTrail[i].y + touchTrail[i + 1].y);
        ctx.quadraticCurveTo(touchTrail[i].x, touchTrail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
    }
    ctx.lineTo(touchTrail[touchTrail.length - 1].x, touchTrail[touchTrail.length - 1].y);
    ctx.stroke();

    mouse.x += (mouse.tX - mouse.x) * params.mouseThreshold;
    mouse.y += (mouse.tY - mouse.y) * params.mouseThreshold;

    window.requestAnimationFrame(updateBubbles);
}

function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
