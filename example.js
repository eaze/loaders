var createElement = require('virtual-dom/create-element')
var simple = require('./simple')

document.body.appendChild(createElement(simple()))
