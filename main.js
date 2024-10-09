function goBack() {
    window.location.href = 'index.html'; // นำทางกลับไปยังหน้า index โดยตรง
}

document.addEventListener('DOMContentLoaded', function () {
    const assignmentButtons = document.querySelectorAll('.assignment');

    assignmentButtons.forEach(button => {
        button.addEventListener('click', function () {
            const link = this.getAttribute('data-link');
            if (link) {
                window.location.href = link; // นำทางไปยังหน้า assignment
            }
        });
    });

    const socialButtons = document.querySelectorAll('.social-button');

    socialButtons.forEach(button => {
        button.addEventListener('click', function () {
            const link = this.getAttribute('data-link'); 
            if (link) {
                window.open(link, '_blank'); // เปิดลิงก์โซเชียลมีเดียในแท็บใหม่
            }
        });
    });
});

