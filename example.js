var createElement = require('virtual-dom/create-element')
var simple = require('./simple')
var dots = require('./dots')

document.body.appendChild(createElement(simple()))
document.body.appendChild(createElement(dots({width: '100px'})))
