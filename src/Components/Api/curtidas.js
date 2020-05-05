const imagemLike = (curtiu) => {
    if(curtiu) {
        return require("../../../res/img/s2-checked.png")
    } else {
        return require("../../../res/img/s2.png")
    }
}

const curtiuFoto = (curtiu, likes) => {
    let quantidade = likes;
    if(curtiu) {
        quantidade--;
    } else {
        quantidade++;
    }
    return[!curtiu, quantidade]
}

export {imagemLike, curtiuFoto}  