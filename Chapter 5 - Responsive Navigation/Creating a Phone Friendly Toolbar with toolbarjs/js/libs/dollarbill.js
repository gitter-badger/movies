!function (a, b) { "use strict"; var c = function (a, b) { var d, e, f = new c.fn.init(a, b); if (!a) return f.length = 0, f; if ("string" == typeof a) for (d = b && b.nodeType ? b.querySelectorAll(a) : document.querySelectorAll(a), f.length = d.length, f.selector = a, e = 0; e < d.length; e++) f[e] = d[e]; else a.nodeType && (f[0] = a, f.length = a.length ? a.length : 1); return f }; return c.fn = c.prototype = { constructor: c, init: function () { return this }, version: "0.0.2", length: 0, context: b, selector: "", rclass: /[\t\r\n]/g, trim: function (a) { return null == a ? "" : a.trim(a) }, isArray: function (a) { return "[object Array]" === Object.prototype.toString.call(a) }, extend: function () { var a, c, d, e, f = arguments[0] || {}, g = 1, h = arguments.length; for (g = 1; h > g; g++) if (null !== (d = arguments[g])) for (a in d) e = f[a], c = d[a], f !== c && c !== b && (f[a] = c); return f }, merge: function () { }, each: function (a, c) { if (c === b && (c = a, a = this), this.isArray(a)) for (var d = 0, e = a.length; e > d; d++); }, map: function (a, b) { var c, d = 0, e = a.length, f = this.isArray(a), g = []; if (f) for (; e > d; d++) c = b(a[d], d, arg), null != c && (g[g.length] = c); else for (d in a) c = b(a[d], d, arg), null != c && (g[g.length] = c); return g }, grep: function (a, b, c) { var d, e = [], f = 0, g = a.length; for (c = !!c; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]); return e }, noop: function () { } }, c.fn.init.prototype = c.fn, a.dollarbill = a.$ = c }(window), dollarbill.fn.parseLocalStorage = function (a) { var b = localStorage.getItem(a); return b ? JSON.parse(b) || {} : {} }, dollarbill.fn.removeClass = function (a) { if (a && "string" == typeof a) { for (var b = 0; b < this.length; b++) for (var c = a.split(" "), d = 0; d < c.length; d++) "" !== c[d] && this[b].classList.remove(c[d]); return this } }, dollarbill.fn.addClass = function (a) { if (a && "string" == typeof a) { for (var b = 0; b < this.length; b++) for (var c = a.split(" "), d = 0; d < c.length; d++) "" !== c[d] && this[b].classList.add(c[d]); return this } }, dollarbill.fn.hasClass = function (a) { return a && "string" == typeof a ? (this[0].classList.contains(a), void 0) : this }, dollarbill.fn.toggleClass = function (a) { if (a && "string" == typeof a) { for (var b = 0; b < this.length; b++) this[b].classList.toggle(a); return this } }, dollarbill.fn.show = function (a) { a = a || "block"; for (var b = 0; b < this.length; b++) this[b].style.display = a }, dollarbill.fn.hide = function () { for (var a = 0; a < this.length; a++) this[a].style.display = "none" }, dollarbill.fn.toggle = function (a) { a = a || "block"; for (var b = 0; b < this.length; b++) { var c = this[b]; c.style.display = "" === c.style.display || "none" === c.style.display ? a : "none" } }, dollarbill.fn.getVendorPropertyName = function (a) { var b, c, d = ["Moz", "Webkit", "O", "ms"], e = document.createElement("div"), f = a.charAt(0).toUpperCase() + a.substr(1); if (a in e.style) return a; for (c = 0; c < d.length; ++c) if (b = d[c] + f, b in e.style) return b }, dollarbill.fn.hideURLBar = function () { var a = window, b = document, c = b.body, d = document.height > a.innerHeight ? document.height : a.innerHeight, e = a.pageYOffset || "CSS1Compat" === b.compatMode && b.documentElement.scrollTop || b.body.scrollTop || 0; 430 > d && (d = 430), d > c.clientHeight && (c.style.height = d + "px"), window.addEventListener("load", function () { setTimeout(function () { window.scrollTo(0, e) }, 0) }) }, dollarbill.fn.transitionend = { animation: "animationend", webkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd" }, dollarbill.fn.checkTransform3dSupport = function () { var a = document.createElement("div"), b = this.getVendorPropertyName("transform"); return a.style[b] = "", a.style[b] = "rotateY(90deg)", "" !== a.style[b] }, dollarbill.fn.buildVendorNames = function () { return { transition: this.getVendorPropertyName("transition"), transitionDelay: this.getVendorPropertyName("transitionDelay"), transform: this.getVendorPropertyName("transform"), transformOrigin: this.getVendorPropertyName("transformOrigin"), transform3d: this.checkTransform3dSupport() } }, dollarbill.fn.s4 = function () { return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) }, dollarbill.fn.guid = function () { return this.s4() + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + this.s4() + this.s4() }, dollarbill.fn.loadScript = function (a, b, c) { if (document.getElementById(a)) c(); else { var d = document.createElement("script"); d.type = "text/javascript", d.id = a, d.readyState ? d.onreadystatechange = function () { ("loaded" === d.readyState || "complete" === d.readyState) && (d.onreadystatechange = null, c()) } : d.onload = function () { c() }, d.src = b, document.body.appendChild(d) } };