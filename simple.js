'use strict'

var Keyframes = require('create-keyframes')
var svg = require('virtual-dom/virtual-hyperscript/svg')
var extend = require('xtend')
var cuid = require('cuid')

var gradientId = cuid()

var keyframes = Keyframes({
  0: {
    transform: 'rotate(0deg)',
    '-webkit-transform': 'rotate(0deg)'
  },
  100: {
    transform: 'rotate(359deg)',
    '-webkit-transform': 'rotate(359deg)'
  }
})

module.exports = function spinner (style) {
  var animation = keyframes + ' 750ms linear infinite'

  style = extend({
    height: '1.5em',
    stroke: 'currentColor',
    animation: animation,
    webkitAnimation: animation
  }, style || {})

  if (!style.width && style.height) style.width = style.height
  if (!style.height && style.width) style.height = style.width

  return svg('svg', {
    key: 'spinner',
    viewBox: [0, 0, 64, 64].join(' '),
    style: style
  }, svg('g', [
    svg('defs', [
      svg('linearGradient', {
        id: gradientId,
        gradientUnits: 'userSpaceOnUse',
        x1: 55,
        y1: 46,
        x2: 2,
        y2: 46
      }, [
        svg('stop', {
          offset: '0.1',
          style: {'stop-color': '#fff', 'stop-opacity': 0}
        }),
        svg('stop', {
          offset: '1',
          style: {'stop-color': 'currentColor'}
        })
      ])
    ]),
    svg('g', {
      'stroke-width': '8',
      'stroke-linecap': 'round',
      fill: 'none',
      transform: 'rotate(245.637 32 32)'
    }, [
      svg('path', {
        stroke: 'url(#' + gradientId + ')',
        d: 'M4,32 c0,15,12,28,28,28c8,0,16-4,21-9'
      }),
      svg('path', {
        d: 'M60,32 C60,16,47.464,4,32,4S4,16,4,32'
      })
    ])
  ]))
}
