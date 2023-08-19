/* eslint-disable */
import { useEffect } from 'react'
const id = 'canvas_sakura'
const Sakura = () => {
  const destroySakura = ()=>{
    const sakura = document.getElementById(id)
    if(sakura && sakura.parentNode){
      sakura.parentNode.removeChild(sakura)
    }
  }
      
  useEffect(() => {
    createSakura({})
    return () => destroySakura()
  }, [])
  return <></>
}

export default Sakura

/**
 * 创建樱花雨
 * @param config
 */
function createSakura() {
  var stop, staticx
  var img = new Image()
  img.src =
    'data:image/webp;base64,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'
    this.x = x
    this.y = y
    this.s = s
    this.r = r
    this.fn = fn
  }
  Sakura.prototype.draw = function (cxt) {
    cxt.save()
    var xc = (5 * this.s) / 5
    cxt.translate(this.x, this.y)
    cxt.rotate(this.r)
    cxt.drawImage(img, 0, 0, 25 * this.s, 30 * this.s)
    cxt.restore()
  }
  Sakura.prototype.update = function () {
    this.x = this.fn.x(this.x, this.y)
    this.y = this.fn.y(this.y, this.y)
    this.r = this.fn.r(this.r)
    if (
      this.x > window.innerWidth ||
      this.x < 0 ||
      this.y > window.innerHeight ||
      this.y < 0
    ) {
      this.r = getRandom('fnr')
      if (Math.random() > 0.4) {
        this.x = getRandom('x')
        this.y = 0
        this.s = getRandom('s')
        this.r = getRandom('r')
      } else {
        this.x = window.innerWidth
        this.y = getRandom('y')
        this.s = getRandom('s')
        this.r = getRandom('r')
      }
    }
  }
  let SakuraList = function () {
    this.list = []
  }
  SakuraList.prototype.push = function (sakura) {
    this.list.push(sakura)
  }
  SakuraList.prototype.update = function () {
    for (var i = 0, len = this.list.length; i < len; i++) {
      this.list[i].update()
    }
  }
  SakuraList.prototype.draw = function (cxt) {
    for (var i = 0, len = this.list.length; i < len; i++) {
      this.list[i].draw(cxt)
    }
  }
  SakuraList.prototype.get = function (i) {
    return this.list[i]
  }
  SakuraList.prototype.size = function () {
    return this.list.length
  }
  function getRandom(option) {
    var ret, random
    switch (option) {
      case 'x':
        ret = Math.random() * window.innerWidth
        break
      case 'y':
        ret = Math.random() * window.innerHeight
        break
      case 's':
        ret = Math.random()
        break
      case 'r':
        ret = Math.random() * 6
        break
      case 'fnx':
        random = -0.5 + Math.random() * 1
        ret = function (x, y) {
          return x + 0.5 * random - 1.7
        }
        break
      case 'fny':
        random = 1.5 + Math.random() * 0.7
        ret = function (x, y) {
          return y + random
        }
        break
      case 'fnr':
        random = Math.random() * 0.03
        ret = function (r) {
          return r + random
        }
        break
    }
    return ret
  }
  function startSakura() {
    requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.oRequestAnimationFrame
    var canvas = document.createElement('canvas'),
      cxt
    staticx = true
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    canvas.setAttribute(
      'style',
      'position: fixed;left: 0;top: 0;pointer-events: none;'
    )
    canvas.setAttribute('id', id)
    document.getElementsByTagName('body')[0].appendChild(canvas)
    cxt = canvas.getContext('2d')
    var sakuraList = new SakuraList()
    for (var i = 0; i < 50; i++) {
      var sakura,
        randomX,
        randomY,
        randomS,
        randomR,
        randomFnx,
        randomFny,
        randomFnR
      randomX = getRandom('x')
      randomY = getRandom('y')
      randomR = getRandom('r')
      randomS = getRandom('s')
      randomFnx = getRandom('fnx')
      randomFny = getRandom('fny')
      randomFnR = getRandom('fnr')
      sakura = new Sakura(randomX, randomY, randomS, randomR, {
        x: randomFnx,
        y: randomFny,
        r: randomFnR
      })
      sakura.draw(cxt)
      sakuraList.push(sakura)
    }
    stop = requestAnimationFrame(asd)
    function asd() {
      cxt.clearRect(0, 0, canvas.width, canvas.height)
      sakuraList.update()
      sakuraList.draw(cxt)
      stop = requestAnimationFrame(asd)
    }
  }
  img.onload = function () {
    startSakura()
  }
  function stopp() {
    if (staticx) {
      var child = document.getElementById(id)
      child.parentNode.removeChild(child)
      window.cancelAnimationFrame(stop)
      staticx = false
    } else {
      startSakura()
    }
  }
}
