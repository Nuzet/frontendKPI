function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var faculty = document.getElementById("faculty").value;
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;

    var nameRegex = /^[А-ЩЬЮЯҐЄІЇа-щьюяґєії']{2,}\s[А-ЩЬЮЯҐЄІЇа-щьюяґєії']{1}.\s[А-ЩЬЮЯҐЄІЇа-щьюяґєії']{1}.$/;
    var facultyRegex = /[0-9]{4}/;
    var dobRegex = /(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}/;
    var addressRegex = /[0-9]{6}/;
    var emailRegex = /\S+@\S+\.\S+/;

    var isValid = true;

    if (!nameRegex.test(fullName)) {
        alert('Заповніть поле "Ваше им’я"');
        isValid = false;
    }

    if (!facultyRegex.test(faculty)) {
        alert('Заповніть поле "Факультет"');
        isValid = false;
    }

    if (!dobRegex.test(dob)) {
        alert('Заповніть поле "дату Народж."');
        isValid = false;
    }

    if (!addressRegex.test(address)) {
        alert('Заповніть поле "Адреса"');
        isValid = false;
    }

    if (!emailRegex.test(email)) {
        alert('Заповніть поле "email"');
        isValid = false;
    }

    // Перевірка введеної інформації
    if (isValid) {
        var result = `1) ПІБ: ${fullName}\n6) Факультет: ${faculty}\n7) Дата народж.: ${dob}\n8) Адреса м.: ${address}\n9) e-mail: ${email}`;
        alert(result);
        resetForm();
    } 
}

function resetForm() {
    document.getElementById("myForm").reset();
}

document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('interactiveTable');
    const palette = ['#FF5733', '#33FF57', '#5733FF', '#FF5733', '#33FF57', '#5733FF'];

    function generateTable() {
        let cellNumber = 1;

        for (let i = 0; i < 6; i++) {
            const row = table.insertRow(i);

            for (let j = 0; j < 6; j++) {
                const cell = row.insertCell(j);
                cell.textContent = cellNumber++;

                cell.addEventListener('mouseover', function () {
                    if (cell.textContent == '5') {
                        cell.style.backgroundColor = getRandomColor();
                    }
                });

                cell.addEventListener('click', function () {
                    if (cell.textContent == '5') {
                        const colorInput = document.createElement('input');
                        colorInput.type = 'color';
                        colorInput.addEventListener('input', function () {
                            cell.style.backgroundColor = colorInput.value;
                        });
                        colorInput.click();
                    }
                });

                cell.addEventListener('dblclick', function () {
                    const cells = document.querySelectorAll('td');
                    cells.forEach((otherCell) => {
                      if (otherCell !== cell) {
                        otherCell.style.backgroundColor = getRandomColor();
                      }
                    });
                  });
            }
        }
    }

    function getRandomColor() {
        return palette[Math.floor(Math.random() * palette.length)];
    }

    generateTable();
});