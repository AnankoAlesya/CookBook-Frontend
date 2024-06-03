

function changeIcon(like)
{
    if (like.getAttribute('src') === getLikePath('active'))
    {
        like.setAttribute('src', getLikePath(''));
        return;
    }

    like.setAttribute('src', getLikePath('active'));
}

function getLikePath(state){
    return `heart${state}.png`;
}

