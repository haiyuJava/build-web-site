document.querySelector('#copy-name').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('价投知行合一');
    status.textContent = '已复制，请打开微信搜索。';
  } catch {
    status.textContent = '请手动选中并复制名称：价投知行合一，然后打开微信搜索。';
  }
});

const qrDialog = document.querySelector('#qr-dialog');
const qrTrigger = document.querySelector('#open-qr');
qrTrigger.addEventListener('click', (event) => {
  if (typeof qrDialog.showModal !== 'function') return;
  event.preventDefault();
  qrDialog.showModal();
});
document.querySelector('#close-qr').addEventListener('click', () => qrDialog.close());
qrDialog.addEventListener('click', (event) => {
  const bounds = qrDialog.getBoundingClientRect();
  if (event.target === qrDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) qrDialog.close();
});
qrDialog.addEventListener('close', () => qrTrigger.focus());
