class GADERYPOLUKIcypher {
  constructor(        
  G = "A",
  g = "a",
  a = "g",
  A = "G",
  D = "E",
  d = "e",
  E = "D",
  e = "d",
  R = "Y",
  r = "y",
  Y = "R",
  y = "r",
  P = "O",
  p = "o",
  O = "P",
  o = "p",
  L = "U",
  l = "u",
  U = "L",
  u = "l",
  K = "I",
  k = "i",
  I = "K",
  i = "k",
  ) {
  this.G = G;
  this.g = g;
  this.a = a;
  this.A = A;
  this.D = D;
  this.d = d;
  this.E = E;
  this.e = e;
  this.R = R;
  this.r = r;
  this.Y = Y;
  this.y = y;
  this.P = P;
  this.p = p;
  this.O = O;
  this.o = o;
  this.L = L;
  this.l = l;
  this.U = U;
  this.u = u;
  this.K = K;
  this.k = k;
  this.I = I;
  this.i = i;
  };

  calc(string){
    return string.split('').map((element) => {
      if(element === this.G) return "G";
      if(element === this.g) return "g";
      if(element === this.A) return "A";
      if(element === this.a) return "a";
      if(element === this.D) return "D";
      if(element === this.d) return "d";
      if(element === this.E) return "E";
      if(element === this.e) return "e";
      if(element === this.R) return "R";
      if(element === this.r) return "r";
      if(element === this.Y) return "Y";
      if(element === this.y) return "y";
      if(element === this.P) return "P";
      if(element === this.p) return "p";
      if(element === this.O) return "O";
      if(element === this.o) return "o";
      if(element === this.L) return "L";
      if(element === this.l) return "l";
      if(element === this.U) return "U";
      if(element === this.u) return "u";
      if(element === this.K) return "K";
      if(element === this.k) return "k";
      if(element === this.I) return "I";
      if(element === this.i) return "i";
      else return element;
    }).join('');
  };

  encode(string){ return this.calc(string); };
  decode(string){ return this.calc(string); };
};

module.exports = { GADERYPOLUKIcypher };


//https://www.codewars.com/kata/592a6ad46d6c5a62b600003f/train/javascript


//-------------Function solution---------------------------------->
// const calc = (string) => {
//   return string.split('').map((element) => {
//      if(element === "A") return "G";
//      if(element === "a") return "g";
//      if(element === "G") return "A";
//      if(element === "g") return "a";
//      if(element === "E") return "D";
//      if(element === "e") return "d";
//      if(element === "D") return "E";
//      if(element === "d") return "e";
//      if(element === "Y") return "R";
//      if(element === "y") return "r";
//      if(element === "R") return "Y";
//      if(element === "r") return "y";
//      if(element === "O") return "P";
//      if(element === "o") return "p";
//      if(element === "P") return "O";
//      if(element === "p") return "o";
//      if(element === "U") return "L";
//      if(element === "u") return "l";
//      if(element === "L") return "U";
//      if(element === "l") return "u";
//      if(element === "I") return "K";
//      if(element === "i") return "k";
//      if(element === "K") return "I";
//      if(element === "k") return "i";
//      else return element;
//    }).join('');
// };

// const encode = (string) => { return calc(string); };
// const decode = (string) => { return calc(string); };