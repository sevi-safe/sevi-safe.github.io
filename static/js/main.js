const copyButton = document.getElementById('copyBibtex');
const code = document.getElementById('bibtexCode');

if (copyButton && code) {
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(code.innerText);
      const oldText = copyButton.textContent;
      copyButton.textContent = 'Copied';
      setTimeout(() => { copyButton.textContent = oldText; }, 1300);
    } catch (_) {
      copyButton.textContent = 'Select + copy';
    }
  });
}
