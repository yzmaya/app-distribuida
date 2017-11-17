

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

  // Se crea una variable con el id imagencita
  var imgn = document.getElementById("imagencita");
  const btnLogout = document.getElementById('btnLogout');
  var UID;
  var CONS;





  //al presionar el boton con id btnLogout ....
  btnLogout.addEventListener('click', e => {
  //cierro la sesión con la funcion y regreso a mi pagina inicial index.html  
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
       window.location.href = 'index.html';
    }).catch(function(error) {
      // An error happened.
    });

  });


  // Añadir un listener en tiempo real
   firebase.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser) {
      //con esto solo veo los datos de mi conexion a firebase
      
    //se crean dos variables, una para traer el nombre e imagen de mi cuenta de google
     var miNombre = firebaseUser.displayName; 
     var myImage = firebaseUser.photoURL; 
     
     console.log(firebaseUser);
 
     //aqui imprimo o visualizo mi contenido en html
      document.querySelector("a.test").textContent =  miNombre + '▼'; 
     // imagencita.setAttribute("src", myImage);
    } else {
      window.location.href = 'index.html';
    }    
  });

  function saveNumber() {
  var name = $('#name').val();
  var number = $('#number').val();
  CONS.push({
    girl: name,
      contact:number
      
  });
  var name = $('#name').val('');
  var number = $('#number').val('');
}



//AQUI VA A IR EL AGREGAR DATOS PERO CON SESION ACTIVA
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    UID = user.uid;
    var sesionSess = '' + UID + '/' + '';
    CONS = firebase.database().ref(sesionSess);


CONS.on('child_added', function(data) {
  var numero = data.val().contact;
  var nombre = data.val().girl;

  $('#lista').prepend('<p> ❤️ ' + nombre + ': ' + numero + '</p>' );
});




  } 
});


