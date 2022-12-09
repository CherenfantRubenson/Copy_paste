const TextUncopy = document.querySelector('h1')
const TextUncopy2 = document.querySelector('p')
TextUncopy.style.userSelect = 'none';
TextUncopy2.style.userSelect = 'none';


const button = document.getElementById('copy')

button.onclick = (event) => {
    const TextUncopy = document.querySelector('h1')
    TextUncopy.style.userSelect = 'text';
    const TextUncopy2 = document.querySelector('p')
    TextUncopy.style.userSelect = 'text';
    TextUncopy2.style.userSelect = 'text';

    const getText = document.querySelector('main');

    let range = document.createRange()

    range.setStart(getText.firstElementChild, 0)
    range.setEnd(getText.nextElementSibling, TextUncopy2)

    let selection = document.getSelection();
    selection.addRange(range);

    navigator.clipboard.writeText(selection.toString());



}

