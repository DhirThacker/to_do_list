const inp = document.getElementById('input');
const ul = document.getElementById('ul');
const button = document.getElementById('but');
const button1 = document.getElementById('but1');

button.addEventListener('click', (event) => {
  if (inp.value !== '') {
    const li = document.createElement('li');

    li.innerHTML = `<input type="checkbox" name="checkbox">${inp.value}`;
    ul.appendChild(li);
    inp.value = '';
  }
});

inp.addEventListener('keyup', (event) => {
  if (event.which === 13) {
    if (inp.value !== '') {
      const li = document.createElement('li');

      li.innerHTML = `<input type="checkbox" name="checkbox">${inp.value}`;
      ul.appendChild(li);
      inp.value = '';
    }
  }
});

ul.onclick = function (e) {
  // console.log(e);
  if (e.target.tagName === 'INPUT') {
    e.target.parentNode.remove();
  }
};
