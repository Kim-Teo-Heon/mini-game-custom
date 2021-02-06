const clothes = [];
const lists_ul = document.querySelector('.lists');

function print_clothes(clothes){
    const li = document.createElement('li');
    const img = document.createElement('img');
    const span = document.createElement('span');
    const src = select_img(clothes);

    img.src = src;
    span.innerText = `${clothes.sex}, ${clothes.size}`

    li.appendChild(img);
    li.appendChild(span);
    lists_ul.appendChild(li);
}

function init(){
    for(let i = 0; i < 10; i++){
        gen_clothes();
    }

    clothes.forEach(print_clothes);

    logo.addEventListener('click',print_all);

    for(let i=0; i< img.length; i++){
        img[i].addEventListener('click',classify_part);
    }

    for(let i=0; i< btn.length; i++){
    btn[i].addEventListener('click',classify_color);
    }
}

init();