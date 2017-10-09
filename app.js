new Vue({
	el: '#app',
	mounted() {
		axios.get('https://jsonplaceholder.typicode.com/todos')
		.then((respuesta) => {
			this.tareasAjax = respuesta.data;
		});
	},
	data: {
		tareasAjax: [],
	}
});