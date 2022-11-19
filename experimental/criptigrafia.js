const loopCripto = setInterval(refreshCripto,1000)

function refreshCripto(){
let AR = value.replaceAll("A",0)
let BR = AR.replaceAll("B",1)
let CR = BR.replaceAll("E",3)
const A = 0
const B = 1
const C = 2
const D = 3
const E = 4
const F = 5
const G =6
const H =7
const I =8
const J =9
const K = 1+"x"
const L = 2+"x"
const M = 3+"x"
const N = 4+"x"
const O = 5+"x"
const P = 6+"x"
const Q = 7+"x"
const R = 8+"x"
const S = 9+"x"
const T = 1+"y"
const U = 2+"y"
const V = 3+"y"
const W = 4+"y"
const X = 5+"y"
const Y = 6+"y"
const Z =  7+"y"
const _ = " "
const InpASerCripto = document.getElementById("msmASerCripto").value;
const msmC = document.getElementById("msmCripto");
let phrase = I+_+L+O+V+E+_+Y+O+U+_+InpASerCripto;

msmC.innerHTML = phrase

}