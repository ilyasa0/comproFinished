
function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyLang(lang);   // update parent text

  const iframe = document.getElementById("serviceFrame");

// ensure iframe is ready
iframe.onload = () => {
  iframe.contentWindow.postMessage(
    { type: "setLang", lang: localStorage.getItem("lang") },
    "*"
  );
};

function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyLang(lang);

  iframe.contentWindow.postMessage(
    { type: "setLang", lang: lang },
    "*"
  );
}

}

// For height auto-resize (keep your existing code)
window.addEventListener('message', (event) => {
  if (event.data.type === 'setHeight') {
    const iframe = document.getElementById('serviceFrame');
    iframe.style.height = event.data.height + 'px';
  }
});

