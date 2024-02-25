const text = document.getElementById('header-text');
const btn = document.getElementById('btn');
setTimeout(() => {
    document.querySelector('#bulb').src = './images/pic_bulbon.gif';
    text.style.display = 'none';
    btn.style.display = 'block';
}, 5000);

setTimeout(() => {
    text.innerHTML = 'coming...';
    text.style.color = '#f00';
}, 4000);

btn.addEventListener('click', () => {
    if (btn.innerHTML === 'OFF') {
        document.querySelector('#bulb').src = './images/pic_bulboff.gif';
        btn.innerHTML = 'ON';
    } else {
        document.querySelector('#bulb').src = './images/pic_bulbon.gif';
        btn.innerHTML = 'OFF';
    }
});