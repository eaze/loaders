'use strict'

var Keyframes = require('create-keyframes')
var h = require('virtual-dom/h')
var prefix = require('preflex')
var extend = require('xtend')
var times = require('map-times')

var small = {
  transform: 'scale(0.5)',
  '-webkit-transform': 'scale(0.5)',
  opacity: 0.5
}

var large = {
  transform: 'scale(1.0)',
  '-webkit-transform': 'scale(1.0)',
  opacity: 1
}

var keyframes = Keyframes({
  0: small,
  40: large,
  80: small,
  100: small
})

module.exports = function dots (options) {
  options = options || {}

  var size = options.size || 10

  var style = prefix({
    display: 'flex',
    justifyContent: 'space-between',
    width: size * 6 + 'px'
  })

  return h('div', {style: style}, times(3, function (index) {
    return h('div', {
      style: extend({
        width: size + 'px',
        height: size + 'px',
        backgroundColor: 'black',
        borderRadius: '100%',
        animation: keyframes + ' 1.4s infinite ease-in-out',
        animationFillMode: 'both',
        webkitAnimationFillMode: 'both',
        animationDelay: -0.16 * (3 - index) + 's',
        webkitAnimationDelay: -0.16 * (3 - index) + 's'
      }, options.style)
    })
  }))
}
