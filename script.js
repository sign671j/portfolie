// LAVER EFFEKT PÅ ALLE KNAPPERNE //

// LAVER HOVER EFFEKT PÅ BILLEDER I PORTFOLIO PÅ FORSIDEN OG PORTFOLIOSIDEN //

// // ======== ALLE KONSTANTER ========
const tema2 = document.querySelector(".tema2");
const tema3 = document.querySelector(".tema3");
const tema4 = document.querySelector(".tema4");
const tema5 = document.querySelector(".tema5");
const tema6 = document.querySelector(".tema6");

// // LYTTER EFTER OM DER ER MOUSE OVER ELLER OUT
tema2.onmouseover = function () {
  tema2MouseOver();
};
tema2.onmouseout = function () {
  tema2MouseOut();
};

tema3.onmouseover = function () {
  tema3MouseOver();
};
tema3.onmouseout = function () {
  tema3MouseOut();
};

tema4.onmouseover = function () {
  tema4MouseOver();
};
tema4.onmouseout = function () {
  tema4MouseOut();
};

tema5.onmouseover = function () {
  tema5MouseOver();
};
tema5.onmouseout = function () {
  tema5MouseOut();
};

tema6.onmouseover = function () {
  tema6MouseOver();
};
tema6.onmouseout = function () {
  tema6MouseOut();
};

// FUNKTIONERNE DER SKIFTER BILLEDER VED MOUSE OVER OG OUT

function tema2MouseOver() {
  tema2.setAttribute("src", "img/tema_2_blue.webp");
}

function tema2MouseOut() {
  tema2.setAttribute("src", "img/tema_2.webp");
}

function tema3MouseOver() {
  tema3.setAttribute("src", "img/tema_3_blue.webp");
}

function tema3MouseOut() {
  tema3.setAttribute("src", "img/tema_3.webp");
}

function tema4MouseOver() {
  tema4.setAttribute("src", "img/tema_4_blue.webp");
}

function tema4MouseOut() {
  tema4.setAttribute("src", "img/tema_4.webp");
}

function tema5MouseOver() {
  tema5.setAttribute("src", "img/tema_5_blue.webp");
}

function tema5MouseOut() {
  tema5.setAttribute("src", "img/tema_5.webp");
}

function tema6MouseOver() {
  tema6.setAttribute("src", "img/tema_6_blue.webp");
}

function tema6MouseOut() {
  tema6.setAttribute("src", "img/tema_6.webp");
}
