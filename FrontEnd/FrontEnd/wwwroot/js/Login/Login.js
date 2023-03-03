

function LoginAcceso() {


    var user = document.getElementById("txtcorreo").value;
    var pass = document.getElementById("txtcontrasena").value;


    fetch(UrlBack + "Login/UserLogin", {
        method: 'POST',
        body: JSON.stringify({

            "credential": user,
            "password": pass

        }),
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }

    })
        .then(function (response) { return response.json(); })
        .catch(error => {
            console.log(error);
        });
        //.then(res => {
        //    console.log("ok");
        //})
        //.catch(error => {
        //    console.log(error);
        //});
}

