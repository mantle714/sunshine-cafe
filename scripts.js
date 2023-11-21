`use strict`

{
  // スクロール

  let about = document.getElementById('about');
  let menu = document.getElementById('menu');
  let contact = document.getElementById('contact');
  let access = document.getElementById('access');

  function scrollToAbout(event) {
    event.preventDefault();
    about.scrollIntoView({behavior: 'smooth'});
  }
  function scrollToMenu(event) {
    event.preventDefault();
    menu.scrollIntoView({behavior: 'smooth'});
  }
  function scrollToContact(event) {
    event.preventDefault();
    contact.scrollIntoView({behavior: 'smooth'});
  }
  function scrollToAccess(event) {
    event.preventDefault();
    access.scrollIntoView({behavior: 'smooth'});
  }

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

