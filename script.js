const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

usernameInput.addEventListener("input", function() {
    console.log("Username changed:", usernameInput.value);
});

passwordInput.addEventListener("input", function() {
    console.log("Password changed:", passwordInput.value);
});

document.getElementById("submit-btn").addEventListener("click", function() {
    console.log("Submit button clicked!");
    console.log("Username (at submit):", usernameInput.value);
    console.log("Password (at submit):", passwordInput.value);

    login(); 
});

const checkUsername = (username) => {
    if (username === "") {
        alert("กรุณากรอกชื่อผู้ใช้");
        return false; 
    }
    return true; 
};

const login = () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (!checkUsername(username)) {
        return; 
    }

    if (password === "") {
        alert("กรุณากรอกรหัสผ่าน");
        return; 
    }

    if (username === "admin" && password === "123456") {
        alert("เข้าสู่ระบบสำเร็จแล้วไอหน้าหี!");
    } else {
        alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้องไอควาย");
    }
};

document.getElementById("login-btn").addEventListener("click", login);