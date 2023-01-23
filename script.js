var $cont = document.querySelector('.cont');
var $elsArr =  [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));


setTimeout(function() {
  $cont.classList.remove('s--inactive');

}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function(){

    if(this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });

});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e){
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});

//Formulario

const $form = document.getElementById("form")
$form.addEventListener('submit',handleSubmit)
const $buttonMailto = document.getElementById("mailto")

function handleSubmit(event){
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href',`mailto:manufro@hotmail.com?subject=${form.get('name')} ${form.get('surname')} &body=${form.get('message')}`)
  $buttonMailto.click()
}

//Footer
const year =document.getElementById("year");
year.textContent = new Date().getFullYear();