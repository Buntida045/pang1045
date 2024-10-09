window.onload = loginLoad;

function loginLoad() {
    // เมื่อหน้าเว็บโหลด ให้ผูกฟังก์ชัน checkLogin กับฟอร์ม
    document.getElementById("myLogin").onsubmit = checkLogin;
}
ๅ

function checkLogin(){
    const username = document.myLogin.username.value;
    const password = document.myLogin.password.value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    //ตรวจว่าusernameและpasswordตรงกับที่บันทึกไว้มั้ย
      if (username === storedUsername && password === storedPassword) {
        alert("เข้าสู่ระบบสำเร็จ!");
        return true; // 
    } else {
        alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!");
        return false; // 
    }
    
}
	




// window.onload = pageLoad;
// function loginLoad() {
//     // เมื่อหน้าเว็บโหลด ให้ผูกฟังก์ชัน checkLogin กับฟอร์ม
//     document.getElementById("myLogin").onsubmit = checkLogin;
// }

//     // ดึงค่าจากช่องอินพุต
//     const username = document.getElementById("username").value;
//     const password = document.getElementsByName("password")[0].value;


//     // สมมติว่า username = "admin" และ password = "1234" คือข้อมูลที่ถูกต้อง
//     if (username === "PANG" && password === "1234") {
//         alert("เข้าสู่ระบบสำเร็จ!");
//         return true;  // การเข้าสู่ระบบสำเร็จ
//     } else {
//         alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!");
//         return false;  // การเข้าสู่ระบบไม่สำเร็จ
//     }
// }
// }