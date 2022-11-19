const loopCripto = setInterval(refreshCripto,1000)

function refreshCripto(){
const InpASerCripto = document.getElementById("msmASerCripto").value;
const Criptografar = InpASerCripto.toUpperCase()
const AR = Criptografar.replaceAll("A",0)
const BR = AR.replaceAll("B",1)
const CR = BR.replaceAll("C",2)
const DR = CR.replaceAll("D",3)
const ER = DR.replaceAll("E",4)
const FR = ER.replaceAll("F",5)
const GR = FR.replaceAll("G",6)
const HR = GR.replaceAll("H",7)
const IR = HR.replaceAll("I",8)
const JR = IR.replaceAll("J",9)
const KR = JR.replaceAll("K",1+"x")
const LR = KR.replaceAll("L",2+"x")
const MR = LR.replaceAll("M",3+"x")
const NR = MR.replaceAll("N",4+"x")
const OR = NR.replaceAll("O",5+"x")
const PR = OR.replaceAll("P",6+"x")
const QR = PR.replaceAll("Q",7+"x")
const RR = QR.replaceAll("R",8+"x")
const SR = RR.replaceAll("S",9+"x")
const TR = SR.replaceAll("T",1+"y")
const UR = TR.replaceAll("U",2+"y")
const VR = UR.replaceAll("V",3+"y")
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

const msmC = document.getElementById("msmCripto");

msmC.innerHTML = VR

}