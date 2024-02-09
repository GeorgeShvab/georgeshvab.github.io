const DOTS_NUMBER = 1000
const SPEED_ADDITION = 0.1 // So speed can't be very low
const SPEED_DIVISION = 10
const MAX_OPACITY = 0.75
const MIN_OPACITY = 0.25
const SIZE_ADDITION = 0.25 // So size can't be very low
const RADIUS_MULTIPLICATOR = 75
const RADIUS_ADDITION = 50 // So radius can't be very low

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const dots = []

for (let i = 0; i < DOTS_NUMBER; i++) {
  let colorOpacity = Math.random()

  if (colorOpacity < MIN_OPACITY) colorOpacity = MIN_OPACITY
  if (colorOpacity > MAX_OPACITY) colorOpacity = MAX_OPACITY

  const dot = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: (Math.random() + SPEED_ADDITION) / SPEED_DIVISION,
    radius: Math.random() * RADIUS_MULTIPLICATOR + RADIUS_ADDITION,
    angle: Math.random() * 2 * Math.PI,
    size: Math.random() + SIZE_ADDITION,
    color: `rgba(100, 100, 100, ${colorOpacity})`,
  }

  dots.push(dot)
}

const mousePos = {
  x: undefined,
  y: undefined,
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  for (const dot of dots) {
    if (mousePos.x && mousePos.y) {
      if (Math.abs(dot.x - mousePos.x) < dot.radius && Math.abs(dot.y - mousePos.y) < dot.radius) {
        const dx = mousePos.x - dot.x
        const dy = mousePos.y - dot.y
        dot.angle = Math.atan2(dy, dx)
      }
    }

    dot.x += Math.cos(dot.angle) * dot.speed
    dot.y += Math.sin(dot.angle) * dot.speed

    if (dot.x < 0) dot.x = canvas.width
    if (dot.x > canvas.width) dot.x = 0
    if (dot.y < 0) dot.y = canvas.height
    if (dot.y > canvas.height) dot.y = 0

    ctx.fillStyle = dot.color
    ctx.beginPath()
    ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
    ctx.fill()
  }

  requestAnimationFrame(update)
}

let handleMouseMove = (e) => {
  mousePos.x = e.clientX
  mousePos.y = e.clientY
}

let handleTouchEnd = () => {
  // setTimeout because using throttle sometimes makes touch event before the last move event
  setTimeout(() => {
    mousePos.x = undefined
    mousePos.y = undefined
  }, 50)
}

let handleTouchMove = (e) => {
  mousePos.x = e.changedTouches[0].clientX
  mousePos.y = e.changedTouches[0].clientY
}

handleTouchMove = throttle(handleTouchMove, 35)
handleMouseMove = throttle(handleMouseMove, 35)

document.addEventListener('mousemove', handleMouseMove)
document.addEventListener('touchmove', handleTouchMove)
document.addEventListener('touchstart', handleTouchMove)
document.addEventListener('touchend', handleTouchEnd)

update()

function throttle(fn, ms = 250) {
  let savedArgs
  let savedThis
  let isThrottled

  function wrapper(...args) {
    if (isThrottled) {
      savedArgs = args
      savedThis = this

      return
    }

    fn.apply(this, args)

    isThrottled = true

    setTimeout(() => {
      isThrottled = false

      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs)
        savedArgs = savedThis = undefined
      }
    }, ms)
  }

  return wrapper
}

console.log('Nothing interesting here.')
