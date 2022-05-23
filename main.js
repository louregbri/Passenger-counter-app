const countEl = document.getElementById('count-el');
const saveEl = document.getElementById('save-el');

let count = 0;

const increment = () => {
    count++;
    countEl.textContent = count;
}

const save = () => {
    let saveCount = ` ${count} - `;
    saveEl.textContent += saveCount;
    count = 0;
    countEl.textContent = count;
}
