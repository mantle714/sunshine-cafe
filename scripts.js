`use strict`

{
  const modalBtns = document.querySelectorAll('.modal-open');
  const mask = document.getElementById('mask');
  const closeBtns = document.querySelectorAll('.modal-close');

  modalBtns.forEach(function (btn) {
    btn.addEventListener('click', () => {
      var modalId = btn.getAttribute('data-modal');
      var modal = document.getElementById(modalId);
      modal.classList.remove('hidden');
      mask.classList.remove('hidden');
    });
  });
  closeBtns.forEach(function (btn) {
    btn.addEventListener('click', () => {
      var modal = btn.closest('.modal');
      modal.classList.add('hidden');
      mask.classList.add('hidden');
    });
  });
  
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('お問い合わせありがとうございます！');
  });
}

