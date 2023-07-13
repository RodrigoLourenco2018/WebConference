

    fetch('https://dog.ceo/api/breed/boxer/images/random')
        .then(res => res.json())
        //.then(res => console.log(res))
            //.then(json => document.getElementById("teste").innerHTML = json.message)
                .then(json => document.getElementById('myimg').src = json.message)



