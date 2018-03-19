function copyToClipboard(containerid) {
  const textArea = document.createElement('textarea');
  textArea.id = 't';
  textArea.style.height = 0;
  document.body.appendChild(textArea);
  textArea.value = document.getElementById(containerid).innerText;
  let selector = document.querySelector('#t');
  selector.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}

export {copyToClipboard};
