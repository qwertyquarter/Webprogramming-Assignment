document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('generate-btn').addEventListener('click', generateCard);
});

function generateCard() {
    const logoUrl = document.getElementById('logo-input').value;
    const companyName = document.getElementById('company-name-input').value;
    const position = document.getElementById('position-input').value;
    const name = document.getElementById('name-input').value;
    const zipcode = document.getElementById('zipcode-input').value;
    const phone = document.getElementById('phone-input').value;
    const mobile = document.getElementById('mobile-input').value;
    const fax = document.getElementById('fax-input').value;
    const email = document.getElementById('email-input').value;

    // 명함에 정보 적용
    document.getElementById('logo').src = logoUrl;
    document.getElementById('company-name').textContent = companyName;

    // 수정된 명함 형태에 맞게 정보 적용
    document.getElementById('position-name').innerHTML = `${position} ${name}`;
    document.getElementById('zipcode').textContent = `우편번호. ${zipcode}`;
    document.getElementById('phone-fax').textContent = `전화번호. ${phone} 팩스. ${fax}`;
    document.getElementById('mobile-email').textContent = `휴대폰번호. ${mobile} 이메일. ${email}`;

    document.getElementById('card').style.display = 'block';
}
