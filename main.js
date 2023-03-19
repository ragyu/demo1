function time() {
  document.getElementById('time').innerHTML = new Date().toLocaleString();
}

setInterval(time, 1000);

function pink() {
  document.body.style.background = 'pink';
}
function lightblue() {
  document.body.style.background = 'lightblue';
}
function yellow() {
  document.body.style.background = 'yellow';
}
function green() {
  document.body.style.background = 'green';
}
function reset() {
  document.body.style.background =
    'linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)';
}

function showhtml() {
  document.getElementById('fig').src = 'img/html5.jpg';
  document.getElementById('desc').innerHTML =
    '<b>HTML</b>은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다.';
}

function showcss() {
  document.getElementById('fig').src = 'img/css3.jpg';
  document.getElementById('desc').innerHTML =
    '<b>CSS3</b>는 HTML 문서의 스타일을 지정하기 위한 언어이다.';
}

function showjs() {
  document.getElementById('fig').src = 'img/javascript.jpg';
  document.getElementById('desc').innerHTML =
    '<b>Javascript</b>는 웹을 위한 프로그래밍 언어이며 웹문서에서 동작을 실행할 수 있게 한다. ';
}

function hide() {
  document.getElementById('fig').src = '';
  document.getElementById('desc').innerHTML = '';
}
