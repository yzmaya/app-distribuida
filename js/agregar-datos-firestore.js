

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

 const btnGuardar = document.getElementById('guardar');
 var input = $('#texto');
 var caja = $('#caja');

  btnGuardar.addEventListener('click', e => {
     var data = {
        notas:input.val(),
     }
     firebase.firestore().collection('notas').add(data).then(function(snap){
        
     })
  });


  var traerDatos = function(){
    firebase.firestore().collection('notas').onSnapshot(function(snap){
      console.log(snap);
      snap.docChanges.forEach(function(change){
          caja.append('<p>'+ change.doc.data().notas + '</p>')
      })
    })
  }

traerDatos();

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
     //aqui imprimo o visualizo mi contenido en html
      document.querySelector("h3.test").textContent = "Bienvenido " + miNombre; 
      imagencita.setAttribute("src", myImage);
    } else {
      window.location.href = 'index.html';
    }    
  });
