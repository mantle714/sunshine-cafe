`use strict`

{
  // スクロール

  function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({behavior: 'smooth'});
  }

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', scrollToSection);
  });

  // メニューのモーダルウィンドウ

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

  // 質問フォーム
  
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('お問い合わせありがとうございます！');
  });
}

