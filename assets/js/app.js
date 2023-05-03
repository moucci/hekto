/**
 * form header search
 * @type {Element}
 */
let $formSearch = document.querySelector(' header #form-search');

/**
 * blind event to btn submit
 */
$formSearch.querySelector('.btn-submit')
    .addEventListener('click', function (event) {

        event.preventDefault();
        let $input = $formSearch.querySelector('input');
        if (this.classList.contains('submit')) {
            alert('send form')
        } else if (this.classList.contains('close')) {
            $input.style.display = "none";
            this.classList.remove('close');
        } else {
            $input.style.display = "block";
            return (window.innerWidth < 771) && this.classList.add('close');
        }


    })
/**
 * add event keyup to input form to change icon
 */
$formSearch.querySelector('input')
    .addEventListener('keyup', function (event) {
        let $btn_submit = $formSearch.querySelector('.btn-submit');

        if (this.value.length > 0) {
            $btn_submit.classList.remove('close');
            $btn_submit.classList.add('submit')
        } else {
            $btn_submit.classList.remove('submit');
            return (window.innerWidth < 771) && $btn_submit.classList.add('close');
        }
    })


/**
 * btn menu burger
 */
let $btnBurger = document.querySelector('header .btn-menu');

/**
 * bind click to btnBurger
 */
$btnBurger.addEventListener('click', function (event){
    let $menu = document.querySelector('header nav');

    if ($menu.classList.contains('active')) {


        $menu.classList.remove('active');
        this.classList.remove('actived')
    } else {
        $menu.classList.add('active')
        this.classList.add('actived')

    }
})
