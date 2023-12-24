import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isBackgroundWhite: true,
            isTextBlack: true,
        };
    }

    handleElementClick = (elementId, color) => {
        const element = document.getElementById(elementId);

        if (this.state.isBackgroundWhite) {
            element.style.backgroundColor = color;
        } else {
            element.style.backgroundColor = "white";
        }

        if (this.state.isTextBlack) {
            element.style.color = "white";
        } else {
            element.style.color = "black";
        }

        this.setState((prevState) => ({
            isBackgroundWhite: !prevState.isBackgroundWhite,
            isTextBlack: !prevState.isTextBlack,
        }));
    };

    render() {
        return (
            <div>
                <p id="element1" onClick={() => this.handleElementClick("element1","green")}>
                    Місце народження: 14 квітня 2004 року, місто Симферополь, АР Крим, Україна
                </p>
                <p id="element2" onClick={() => this.handleElementClick("element2","red")}>
                    Осіта: КПІ ім. Сикорського м. Київ
                </p>
                <p>Хоббі:</p>
                <ul>
                    <li>Спорт</li>
                    <li>Танці</li>
                    <li>Комп'ютерні ігри</li>
                    <li>Прогулянки у паркі</li>
                </ul>
                <p>Улюбленні фільми:</p>
                <ol>
                    <li>Зелена книга, 2019</li>
                    <li>Людина-павук. Немає шляху додому, 2021</li>
                    <li>Фокус, 2015</li>
                    <li>Хлопчик у смуганній піжамі, 2008</li>
                </ol>
                <p>Лейпциг (Ляйпциґ; нім. Leipzig) — місто в Центральній Німеччині, розташоване на заході федеральної землі
                    Саксонія. Є одним з найбільш динамічно зростаючих міст країни та найбільшим в регіоні. Лейпциг — місто з багатою
                    історією, заснований більше ніж 1000 років тому на перетині торгових шляхів і завжди грав важливу роль в
                    Саксонії. Сьогодні він є важливим економічним і культурним центром Німеччини.</p>
                <p>Населення — майже 570 000 осіб.</p>
                <p>Площа – 298 км².</p>
                <p>Час — центральноєвропейський UTC + 1, взимку + 2.</p>
                <p>Різдвяний ринок відкривається в останній тиждень листопада і триває практично до Різдва.</p>
                <p>Мова — німецька.</p>
                <p>Традиційна їжа: Lerchen – солодке тісто з марципаном, Quarkkeulchen – десерт, Leipziger Allerlei – овочеве блюдо,
                    Reformationsbrötchen – печення.</p>
            </div>
        );
    }
}

export default Content;
