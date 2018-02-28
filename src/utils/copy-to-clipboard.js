function copyToClipboard(containerid) {
  const textarea = document.createElement('textarea');
  textarea.id = 't';
  textarea.style.height = 0;
  document.body.appendChild(textarea);
  textarea.value = document.getElementById(containerid).innerText;
  let selector = document.querySelector('#t');
  selector.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

export {copyToClipboard};
