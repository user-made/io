(() => {
  console.log(window.location.pathname);
  if (window.location.pathname === '/') {
    document.body.classList.add('lp');
  } else {
    document.body.classList.remove('lp');
  }
})()