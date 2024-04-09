document.getElementsByName('useBilling')[0].addEventListener('click', function() {
    if (this.checked) {
        document.getElementById('home').value = document.getElementById('billing').value;
        document.getElementById('home').disabled = true;
    }
    else {
        document.getElementById('home').value = '';
        document.getElementById('home').disabled = false;
    }
}
);