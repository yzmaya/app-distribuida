(function () {
//Inicializar Firebase
  var config = {
      apiKey: "AIzaSyBOylNl-Ka7T5yo5EWl2KMaIqXu4cuj4fg",
    authDomain: "vue-test-e6acb.firebaseapp.com",
    databaseURL: "https://vue-test-e6acb.firebaseio.com",
    projectId: "vue-test-e6acb",
    storageBucket: "vue-test-e6acb.appspot.com",
    messagingSenderId: "920258140742"
  };
  firebase.initializeApp(config);

//creamos el objeto de autentificación de google 
var providerGoogle = new firebase.auth.GoogleAuthProvider();

  // Le decimos que va a hacer nuestro boton con id btnGoogle
  btnGoogle.addEventListener('click', e => {
        //en seguida abrira un pop up indicando que usará la información básica de su perfil
        //(basicamente es boilerplate de la documentación de firebase)
        firebase.auth().signInWithPopup(providerGoogle).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  });
//************************aqui termina el inicio de sesión con google****************************

//creamos el objeto de autentificación de Facebook 
var providerFb = new firebase.auth.FacebookAuthProvider();
providerFb.addScope('public_profile');

 // Le decimos que va a hacer nuestro boton con id btnGoogle
  btnFacebook.addEventListener('click', e => {
        //en seguida abrira un pop up indicando que usará la información básica de su perfil
        //(basicamente es boilerplate de la documentación de firebase)
        firebase.auth().signInWithPopup(providerFb).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  });

//************************aqui termina el inicio de sesión con Facebook ****************************

  // Obtener elementos
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');

  const error = document.getElementById('demo');
  const prevencion = document.getElementById('demo2');

    // Añadir Evento login
  btnLogin.addEventListener('click', e => {
    //Obtener email y pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message)); 
    promise.catch(e => error.innerHTML = e.message); 
     
  });

  // Añadir evento signup
  btnSignUp.addEventListener('click', e => {
    // Obtener email y pass
    // TODO: comprobar que el email sea real
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    promise.catch(e => error.innerHTML = e.message); 
  });





// Añadir un listener en tiempo real
   firebase.auth().onAuthStateChanged( firebaseUser => {
//Si existe autenticación hacer.....
    if(firebaseUser) {
         window.location.href = "home.html";
    } else {
      console.log('no logueado');
      
    }    
  });




} ());

