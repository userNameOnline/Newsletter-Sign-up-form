

function checkMobile() {
    if(window.innerWidth < 900) {
        const img = document.createElement('img');

        img.id = 'mobile-img';
        img.src = 'illustration-sign-up-mobile.svg';

        if(document.getElementsByTagName('main')[0].children.length < 3) {
           document.getElementsByTagName('main')[0].prepend(img);
        } 
        document.getElementsByTagName('main')[0].style.display = 'block';
        
    } else {
        document.getElementById('mobile-img').remove();
        document.getElementsByTagName('main')[0].style.display = 'flex';
    }


}

window.onload = checkMobile;
window.onresize = checkMobile;

function checkInput() {
    
    if(document.getElementById('email').value !== '') {
        document.getElementsByTagName('main')[0].style.display = 'none';
        document.getElementById('modal').style.display = 'block';
    } else {
        document.getElementById('email').style.border = '1px solid red';
    }

    document.getElementById('recipient').innerHTML = document.getElementById('email').value;
}

function clearInput() {
    document.getElementById('email').value = '';
    document.getElementById('email').style.border = '1px solid';
}

function closeModal() {
    if(window.innerWidth > 900) {
        document.getElementById('modal').style.display = 'none';
        document.getElementsByTagName('main')[0].style.display = 'flex';
        clearInput();
    } else {
        document.getElementById('modal').style.display = 'none';
        document.getElementsByTagName('main')[0].style.display = 'block';
        clearInput();
    }
}
