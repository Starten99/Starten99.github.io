document.getElementsByClassName('circle')[0].addEventListener('click', function (ruletka){
  ruletka.target.style.transform='rotate('+Math.random()*1000+'rad)';
});
