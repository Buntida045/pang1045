window.onload = pageLoad;
function pageLoad() {
	const from = document.getElementById('myRegister');
    from.onsubmit = checkLogin;
	// form.addEventListenr('submit', function(event)) {
	// 	if (!validateForm()){
	// 		event.preventDefault();
	// 	}
        
	// }
}

function checkLogin() {
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const user = document.forms['myRegister']['username'].value;
	const password = document.forms['myRegister']['password'][0].value;
	const Retype = document.forms['myRegister']['password'][1].value;


    console.log(user);
    console.log(password);
    console.log(Retype);

	if (user == '' || password == '' || Retype == '') {
        console.log("1");
		 document.getElementById("errormsg").innerHTML = "กรุณากรอกข้อมูลให้ครบ";
        
		return false;
	 }
	 else if (password != Retype) {
         console.log("2");
	 	document.getElementById('errormsg').innerHTML = "กรุณากรอกรหัสให้ตรงกัน";
	 	return false;   
     }
     localStorage.setItem("username",user);
     localStorage.setItem("password",password);
    console.log("3");

    alert('ลงทะเบียนเรียบร้อยแล้ว');
    return true;
}
