/*addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu ) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})*/

const btn_menu = document.querySelector('#btn_menu'),
      menu_items = document.querySelector('#menu_items');

btn_menu.addEventListener('click', (e) => {
         menu_items.classList.toggle('active');

});     