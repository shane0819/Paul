if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('SW註冊成功'))
    .catch(err => console.log('SW註冊失敗', err));
}
