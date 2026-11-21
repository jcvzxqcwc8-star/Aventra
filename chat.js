// Live chat via Tawk.to (gratis). Vul hieronder je eigen ID's in.
// Zolang ze leeg zijn, gebeurt er niets.
var TAWK_PROPERTY_ID = "";
var TAWK_WIDGET_ID = "";

if (TAWK_PROPERTY_ID && TAWK_WIDGET_ID) {
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://embed.tawk.to/" + TAWK_PROPERTY_ID + "/" + TAWK_WIDGET_ID;
  s.charset = "UTF-8";
  s.setAttribute("crossorigin", "*");
  document.head.appendChild(s);
}