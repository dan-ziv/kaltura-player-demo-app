function loadScriptAsync(url) {
  return new Promise(function (resolve, reject) {
    let s;
    s = document.createElement('script');
    s.src = url;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

export {loadScriptAsync};
