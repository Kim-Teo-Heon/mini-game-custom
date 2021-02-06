const nav = document.querySelector('nav');
const header = document.querySelector('header');

const btn = nav.querySelectorAll('button');
const img = nav.querySelectorAll('img');
const logo = header.querySelector('img');

function classify_color(e){
    const color = e.target.innerText;

    const filter_clothes = clothes.filter((clothes) =>{
        return clothes.color === color
    })

    while(lists_ul.firstChild){
        lists_ul.removeChild(lists_ul.firstChild);
    }

    filter_clothes.forEach(print_clothes);
}

function classify_part(e){
    const part = e.target.alt;

    const filter_clothes = clothes.filter((clothes) =>{
        return clothes.part === part
    })

    while(lists_ul.firstChild){
        lists_ul.removeChild(lists_ul.firstChild);
    }

    filter_clothes.forEach(print_clothes);
}

function print_all(){
    while(lists_ul.firstChild){
        lists_ul.removeChild(lists_ul.firstChild);
    }

    clothes.forEach(print_clothes);
}

