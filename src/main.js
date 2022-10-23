import $ from 'jquery'

import './css/index.css'

import './less/index.less'

// import logo from './assets/logo_small.png'
import iconfont from './assets/fonts/iconfont.css'
import logo2 from './assets/1.gif'

$('#myUL li:odd').css('color', 'red')
$('#myUL li:even').css('color', 'pink')

const img1 = document.createElement('img')
img1.src = logo2
document.body.appendChild(img1)
const i1 = document.createElement('i')
i1.className = 'iconfont icon-weixin'
document.body.appendChild(i1)
const fun = () => console.log('wad')
console.log(fun)
console.log(111)
