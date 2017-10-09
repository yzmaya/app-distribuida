
	function ocultarDiscap(){
		$('#discapacity').hide();
		var erase1 = $('#otherdis').val('');
	}
	function ocultarApoyo(){
	$('#turn').hide();
	var erase2 = $('#otherAp').val('');
	}


	function discapacidad(){
		$('#discapacity').show();
	}

	function OtraDiscapacidad(){
		$('#otherdis').show();
		$('#otherdisp').show();
	}

	function Apoyo(){
		$('#turn').show();
	}

	function otroApoyo(){
		$('#otherAp').show();
		$('#otherApp').show();
	}

function confirma(){



};


	$(function(){
		$('#frm-test').form({
			nombre : {
				identifier : 'nombre',
				rules : [{
					type : 'empty',
					prompt : 'Ingrese su Nombre Completo'
				}]
			},
			telephone : {
				identifier : 'telephone',
				rules : [{
					type : 'empty',
					prompt : 'Por favor ingrese su Teléfono'
				}

				]
			},

			email: {
				identifier : 'email',
				rules : [{
					type : 'email',
					prompt : 'Por favor Ingrese un correo electrónico válido'
				}]
			},
			clave : {
				identifier : 'clave',
				rules : [{
					type : 'empty',
					prompt : 'Necesitas una clave de acceso'
				}]
			}


		}, {
			onSuccess: function(e){
				e.preventDefault();
				guardarConfirmado();
					alert('¡Gracias! Su registro se completó exitósamente.');
			}
		});
	});