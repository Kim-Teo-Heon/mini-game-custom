const nav = document.querySelector('nav');
const header = document.querySelector('header');
const btn = nav.querySelectorAll('button');
const img = nav.querySelectorAll('img');
const logo = header.querySelector('img');
const lists_ul = document.querySelector('.lists');

// function classify_color(e){
//     const color = e.target.innerText;

//     const filter_clothes = clothes.filter((clothes) =>{
//         return clothes.color === color
//     })

//     while(lists_ul.firstChild){
//         lists_ul.removeChild(lists_ul.firstChild);
//     }

//     filter_clothes.forEach(print_clothes);
// }

// function classify_part(e){
//     const part = e.target.alt;

//     const filter_clothes = clothes.filter((clothes) =>{
//         return clothes.part === part
//     })

//     while(lists_ul.firstChild){
//         lists_ul.removeChild(lists_ul.firstChild);
//     }

//     filter_clothes.forEach(print_clothes);
// }

function classify_btn(e) {
    const dataset = e.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    const items = document.querySelectorAll('.item');

    if(key === null || value === null) {
        return;
    }

    display_items(items, key, value);
}

function display_items(items, key, value){
    const logo = 'logo';

    items.forEach(item => {
        if(key === logo) {
            item.classList.remove('invisible');
        } else {
            if(item.dataset[key] === value) {
                item.classList.remove('invisible');
            } else {
                item.classList.add('invisible')
            }
        } 
    })
}

