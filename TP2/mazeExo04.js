
boundaries.forEach(box => {
    startBtn.addEventListener('click', function () {
      console.log('box clicked');
      box.classList.remove('youlose');
    });
  });