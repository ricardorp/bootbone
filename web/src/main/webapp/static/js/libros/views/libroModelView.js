/**
 * Renderiza una fila de la tabla de resultados, se corresponde con un modelo
 */
var LibroModelView = Backbone.View.extend({

	template: null,

	// Inicializar
	initialize: function(options) {
		this.model = options.model;
		this.template = options.template;
	},

	// Renderizar
	render: function() {
		return this.template({
			idLibro: this.model.get('idLibro'), 
			titulo: this.model.get('titulo'), 
			autor: this.model.get('autor'),
		});
	}

});