fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => {
        const users = data.results;

        users.forEach(user => {
            console.log(user.name.first, user.name.last);
            console.log(user.email);
            console.log(user.picture.large);
        });
    })
    .catch(error => {
        console.log('Ha ocurrido un error:', error);
    });
