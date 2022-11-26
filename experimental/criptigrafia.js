const loopCripto = setInterval(refreshCripto,2000)
const loopDescripto = setInterval(refreshDescripto,1000)

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
const WR = VR.replaceAll("W",4+"y")
const XR = WR.replaceAll("X",5+"y")
const YR = XR.replaceAll("Y",6+"y")
const ZR = YR.replaceAll("Z",7+"y")
const ReplacedItems = ZR

const msmC = document.getElementById("msmCripto");

msmC.innerHTML = ReplacedItems
  
function copyCripto(){
  navigator.clipboard.writeText(ReplacedItems.value)
  
}
  
}//Fim do criptografo


function refreshDescripto(){
let InpASerDescripto = document.getElementById("msmASerDescripto").value;
let Criptografar2 = InpASerDescripto.toUpperCase()
let KD = Criptografar2.replaceAll(1+"X","K")
let LD = KD.replaceAll(2+"X","L")
let MD = LD.replaceAll(3+"X","M")
let ND = MD.replaceAll(4+"X","N")
let OD = ND.replaceAll(5+"X","O")
let PD = OD.replaceAll(6+"X","P")
let QD = PD.replaceAll(7+"X","Q")
let RD = QD.replaceAll(8+"X","R")
let SD = RD.replaceAll(9+"X","S")
let TD = SD.replaceAll(1+"Y","T")
let UD = TD.replaceAll(2+"Y","U")
let VD = UD.replaceAll(3+"Y","V")
let WD = VD.replaceAll(4+"Y","W")
let XD = WD.replaceAll(5+"Y","X")
let YD = XD.replaceAll(6+"Y","Y")
let ZD = YD.replaceAll(7+"Y","Z")
let AD = ZD.replaceAll(0,"A")
let BD = AD.replaceAll(1,"B")
let CD = BD.replaceAll(2,"C")
let DD = CD.replaceAll(3,"D")
let ED = DD.replaceAll(4,"E")
let FD = ED.replaceAll(5,"F")
let GD = FD.replaceAll(6,"G")
let HD = GD.replaceAll(7,"H")
let ID = HD.replaceAll(8,"I")
let JD = ID.replaceAll(9,"J")
let ReplacedItems2 = JD

let msmD3 = document.getElementById("msmDescripto");

msmD3.innerHTML = ReplacedItems2
}