window.addEventListener('load', function() {
  this.document.querySelector('h1').classList.add('heading');
}
);

emailBox = document.getElementById('emailBox')

document.querySelector('#toggle').addEventListener('click', function() {

    if (emailBox.classList.contains('hidden')) {
        emailBox.classList.remove('hidden');
    }
    else {
        emailBox.classList.add('hidden');
}
}
);

document.querySelector('#submit').addEventListener('click', function() {
    window.location.href = 'challenge2.html';
}
);

document.addEventListener('dblclick', function() {
    alert('You double clicked!');
}
);
