const fetchData = async () => {
    try {
        const data = await fetch("https://randomuser.me/api")
            .then((response) => {
                return response.json();
            })
            .then((result) => result.results);

        const user = data[0];

        const userInformation = {
            picture: user.picture.large,
            cell: user.cell,
            country: user.location.country,
            email: user.email,
            coordinates: user.location.coordinates,
        };

        displayUserData(userInformation);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const itemTemplate = ({ picture, cell, country, email, coordinates }) => `
<div class="item">
    <img src="${picture}" alt="pic" class="user-image">
    <div class="info-container">
        <h4 class="info">Cell: ${cell}</h4>
        <h4 class="info">Country: ${country}</h4>
        <h4 class="info">Email: ${email}</h4>
        <h4 class="info">Coordinates: ${coordinates.latitude}, ${coordinates.longitude}</h4>
    </div>
</div>
`;

const displayUserData = (userInformation) => {
    const userDataContainer = document.getElementById('userDataContainer');

    userDataContainer.insertAdjacentHTML(
        'beforeend',
        itemTemplate(userInformation)
    );
};

document.getElementById('showDataButton').addEventListener('click', () => {
    fetchData();
});
