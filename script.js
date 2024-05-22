document.addEventListener('DOMContentLoaded', () => {
    const countElement = document.getElementById('count');
    let count = 0;

    document.getElementById('increment').addEventListener('click', () => {
        count++;
        countElement.textContent = count;
    });

    document.getElementById('decrement').addEventListener('click', () => {
        count--;
        countElement.textContent = count;
    });
});