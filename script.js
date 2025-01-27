```javascript
document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copy-button');
    const cardNumber = document.getElementById('card-number');

    copyButton.addEventListener('click', () => {
        const text = cardNumber.textContent.replace(/ /g, '');
        navigator.clipboard.writeText(text)
            .then(() => {
                copyButton.textContent = 'Скопировано!';
                copyButton.style.backgroundColor = '#4caf50';
                copyButton.style.transition = 'background-color 0.3s ease';
                setTimeout(() => {
                    copyButton.textContent = 'Скопировать карту';
                    copyButton.style.backgroundColor = '#ff9800';
                }, 2000);
            })
            .catch(err => {
                console.error('Ошибка копирования: ', err);
            });
    });
