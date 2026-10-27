/*
  Màn hình đăng nhập đơn giản (chạy trước khi trang hiện ra).
  Chỉ là "cổng chắn" cho học viên: trang tĩnh trên GitHub Pages không thể bảo mật thật.
  Mật khẩu không ghi trực tiếp ở đây; chỉ lưu SHA-256 của "tài khoản:mật khẩu".
  Đổi mật khẩu: tính lại hash rồi thay giá trị HASH bên dưới.
*/
(function () {
  'use strict';
  var KEY = 'n3-auth';
  var HASH = '1ee8b02a225f4a8d036d8c0a8bb97f15b635d004c38b72469592e6df53c103db';

  // Đăng nhập một lần cho mỗi phiên trình duyệt (đóng tab/trình duyệt là phải đăng nhập lại).
  try { if (sessionStorage.getItem(KEY) === HASH) return; } catch (e) {}
  document.documentElement.classList.add('locked');

  function sha256(text) {
    var data = new TextEncoder().encode(text);
    return crypto.subtle.digest('SHA-256', data).then(function (buf) {
      return Array.prototype.map.call(new Uint8Array(buf), function (b) {
        return ('0' + b.toString(16)).slice(-2);
      }).join('');
    });
  }

  function build() {
    var box = document.createElement('div');
    box.className = 'login-screen';
    box.innerHTML =
      '<form class="login-card" autocomplete="off">' +
      '<div class="login-logo" lang="ja">読解</div>' +
      '<h1>Đọc hiểu N3</h1>' +
      '<p class="login-sub">Đăng nhập để vào học</p>' +
      '<label>Tài khoản<input name="u" type="text" autocapitalize="none" autocorrect="off" spellcheck="false" required></label>' +
      '<label>Mật khẩu<input name="p" type="password" required></label>' +
      '<p class="login-err" role="alert" hidden>Sai tài khoản hoặc mật khẩu.</p>' +
      '<button type="submit" class="btn">Đăng nhập</button>' +
      '</form>';
    document.body.appendChild(box);
    var form = box.querySelector('form');
    var err = box.querySelector('.login-err');
    form.u.focus();
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      err.hidden = true;
      sha256(form.u.value.trim() + ':' + form.p.value).then(function (h) {
        if (h !== HASH) {
          err.hidden = false;
          form.p.value = '';
          form.p.focus();
          return;
        }
        try { sessionStorage.setItem(KEY, HASH); } catch (e2) {}
        document.documentElement.classList.remove('locked');
        box.remove();
      });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
