document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.textAlign = 'center';
document.body.style.backgroundColor = '#f0f0f0';
document.body.style.margin = '0';
document.body.style.padding = '20px';

const container = document.getElementById('container');
container.style.maxWidth = '900px';
container.style.margin = 'auto';
container.style.backgroundColor = '#ffffff';
container.style.padding = '20px';
container.style.borderRadius = '10px';
container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';



const errorMsg = document.querySelector('.errorMsg')
errorMsg.style.color = "red"
const numberInput = document.getElementById('numberInput');
numberInput.style.width = '300px';
numberInput.style.padding = '10px';
numberInput.style.fontSize = '18px';
numberInput.style.borderRadius = '5px';
numberInput.style.marginRight = '10px';
numberInput.style.border = '2px solid #4CAF50';

const generateButton = document.getElementById('generateButton');
generateButton.style.padding = '12px 20px';
generateButton.style.fontSize = '18px';
generateButton.style.backgroundColor = '#4CAF50';
generateButton.style.color = '#fff';
generateButton.style.border = 'none';
generateButton.style.borderRadius = '5px';
generateButton.style.cursor = 'pointer';
generateButton.style.alignSelf = "flex-end    "

const numbersContainer = document.getElementById('numbersContainer');
numbersContainer.style.display = 'flex';
numbersContainer.style.flexWrap = 'wrap';
numbersContainer.style.justifyContent = 'flex-start';
numbersContainer.style.marginTop = '20px';

generateButton.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    const count = parseInt(numberInput.value, 10);

    if (numberInput.value === "") {
        errorMsg.textContent = "Enter a value to generate numbers";
        return;
    } else {
        errorMsg.textContent = "";
    }

    if (isNaN(count)) {
        errorMsg.textContent = "Enter a valid number";
        return;
    } else if (count <= 0) {
        errorMsg.textContent = "Enter a number greater than zero";
        return;
    } else {
        errorMsg.textContent = "";
    }

    for (let i = 0; i <= count; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.textContent = i;
        numberDiv.style.width = '85px';
        numberDiv.style.height = '60px';
        numberDiv.style.display = 'flex';
        numberDiv.style.alignItems = 'center';
        numberDiv.style.justifyContent = 'center';
        numberDiv.style.margin = '5px';
        numberDiv.style.fontSize = '24px';
        numberDiv.style.fontWeight = 'bold';
        numberDiv.style.color = '#fff';
        numberDiv.style.borderRadius = '5px';

        if (isPrime(i)) {
            numberDiv.style.backgroundColor = '#F44336'; // Red for prime numbers
        } else if (i % 2 === 0) {
            numberDiv.style.backgroundColor = '#4CAF50'; // Green for even numbers
        } else {
            numberDiv.style.backgroundColor = '#FFEB3B'; // Yellow for odd numbers
        }

        numbersContainer.appendChild(numberDiv);
    }
});

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
