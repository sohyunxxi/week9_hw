function showPwEvent() {
    var hidden = document.getElementById('hiddenPW');
    var button = document.getElementById('checkButton');
    hidden.style.display = "block";
    button.style.display = "none";
} function updateEvent() {
    var pwInput = document.getElementById('pwBox');
    var confirmPwInput = document.getElementById('confirmPwBox');
    var numInput = document.getElementById('telBox'); // Corrected ID

    // Check if any required field is empty
    if (pwInput.value.trim() === '' ||
        confirmPwInput.value.trim() === '' ||
        numInput.value.trim() === '') {
        alert('모든 필수 입력란을 채워주세요.');
    } else {

        if (pwInput.value !== confirmPwInput.value) {
            alert('비밀번호가 일치하지 않습니다.');
        } else {
            alert('정보를 성공적으로 수정하였습니다.');
            location.href = "../html/showInfo.html";
        }
    }
}




function moveBackEvent() {
    window.history.back();
}

function deleteEvent() {
    var returnValue = confirm("정말 탈퇴하시겠습니까?");
    if (returnValue) {
        alert("회원을 탈퇴하였습니다.안녕히 가십시오.")
        location.href = "../html/login.html";
    }
}
