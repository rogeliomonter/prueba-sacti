window.onload = () => {
    const cards = document.querySelectorAll('.card');
    const preview = document.getElementById('myPreview');

    cards.forEach((l) => {
        l.addEventListener('mouseenter', () => { setPreview(l, preview) })
    });

    cards.forEach((l) => {
        l.addEventListener('mouseleave', () => { preview.style.display = 'none' })
    });
}

function setPreview(l, preview){
    if(window.innerWidth > 1023){
        let src = l.getElementsByTagName('img')[0].src;
        let text = l.getElementsByTagName('p')[0].innerText;
        let textColor = window.getComputedStyle(l.getElementsByTagName('p')[0]).getPropertyValue('color');
        let borderColor = window.getComputedStyle(l).getPropertyValue('border-color');
        preview.getElementsByTagName('img')[0].src = src;
        preview.getElementsByTagName('p')[0].innerText = text;
        preview.getElementsByTagName('p')[0].style.color = textColor;
        preview.style.borderColor = borderColor
        preview.style.display = 'block';
    }
}