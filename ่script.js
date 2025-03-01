const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const errorMessage = document.getElementById('error-message');
const regUsernameInput = document.getElementById('reg-username');
const regPasswordInput = document.getElementById('reg-password');
const confirmPasswordInput = document.getElementById('confirm-password');
const registerBtn = document.getElementById('register-btn');
const registerError = document.getElementById('register-error');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.pop-up');
const popupTitle = document.getElementById('popup-title');
const popupMessage = document.getElementById('popup-message');
const popupBtn = document.getElementById('popup-btn');

const users = [];

registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});

loginBtn.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        errorMessage.textContent = '';
        showPopup('สำเร็จ', 'เข้าสู่ระบบสำเร็จ!');
        window.location.href = 'index.html';
    } else {
        errorMessage.textContent = 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง';
        showPopup('ผิดพลาด', 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
});

registerBtn.addEventListener('click', () => {
    const username = regUsernameInput.value;
    const password = regPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        registerError.textContent = 'รหัสผ่านไม่ตรงกัน';
        return;
    }

    if (users.find(u => u.username === username)) {
        registerError.textContent = 'ชื่อผู้ใช้นี้มีผู้ใช้แล้ว';
        return;
    }

    users.push({ username, password });
    registerError.textContent = '';
    showPopup('สำเร็จ', 'ลงทะเบียนสำเร็จ!');
    window.location.href = 'index.html';
});

function showPopup(title, message) {
    popupTitle.textContent = title;
    popupMessage.textContent = message;
    popup.classList.add('active');
    overlay.classList.add('active');
}

popupBtn.addEventListener('click', () => {
    popup.classList.remove('active');
    overlay.classList.remove('active');
});