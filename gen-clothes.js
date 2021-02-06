function select_img(clothes){
    let src = '';
    switch(clothes.part){
        case 'top' :
            switch(clothes.color){
                case 'Blue' :
                    src = './imgs/blue_t.png';
                break;

                case 'Yellow' :
                    src = './imgs/yellow_t.png';
                break;

                case 'Pink' :
                    src = './imgs/pink_t.png';
                break;
            }
        break;
        
        case 'pants' :
            switch(clothes.color){
                case 'Blue' :
                    src = './imgs/blue_p.png';
                break;

                case 'Yellow' :
                    src = './imgs/yellow_p.png';
                break;

                case 'Pink' :
                    src = './imgs/pink_p.png';
                break;
            }
        break;

        case 'skirts' :
            switch(clothes.color){
                case 'Blue' :
                    src = './imgs/blue_s.png';
                break;

                case 'Yellow' :
                    src = './imgs/yellow_s.png';
                break;

                case 'Pink' :
                    src = './imgs/pink_s.png';
                break;
            }
    }
    return src
}

function gen_random_num(key){
    const random_num = Math.floor(Math.random() * key.length);
    return random_num
}

function gen_random_part(){
    const part = ['top', 'pants', 'skirts'];
    const num = gen_random_num(part);
    const gen_part = part[num];

    return gen_part
}

function gen_random_color(){
    const color = ['Blue', 'Yellow', 'Pink'];
    const num = gen_random_num(color);
    const gen_color = color[num];

    return gen_color
}

function gen_random_size(){
    const size = ['small', 'medium', 'large'];
    const num = gen_random_num(size);
    const gen_size = size[num];

    return gen_size
}

function gen_random_sex(){
    const sex = ['male', 'female']
    const num = gen_random_num(sex);
    const gen_sex = sex[num];

    return gen_sex
}

function gen_clothes(){
    const sex = gen_random_sex();
    const size = gen_random_size();
    const color = gen_random_color();
    const part = gen_random_part();

    clothes.push({
        sex,
        size,
        color,
        part
    })
}