window.onload = function() {
    document.getElementById('phone-menu').classList.add('menu-offscreen')
    document.getElementById('vertdiv').classList.toggle('vertikalni-meni')
    document.getElementById('vertdiv').classList.toggle('vertikalni-meni-display')
}

function openDiv() {
    document.getElementById('phone-menu').classList.add('menu-onscreen')
}

function closeDiv() {
    document.getElementById('phone-menu').classList.toggle('menu-onscreen')
}