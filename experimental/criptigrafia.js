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
const WR = UR.replaceAll("V",3+"y")
const XR = UR.replaceAll("V",3+"y")
const YR = UR.replaceAll("V",3+"y")
const ZR = UR.replaceAll("V",3+"y")
const ReplacedItems = ZR.replaceAll("V",3+"y")

const msmC = document.getElementById("msmCripto");

msmC.innerHTML = VR

}