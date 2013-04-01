/**
 * Renderiza una fila de la tabla de resultados, se corresponde con un modelo
 */
var PaisModelView = Backbone.View.extend({

	template: null,

	// Inicializar
	initialize: function(options) {
		this.model = options.model;
		this.template = options.template;
	},

	// Renderizar
	render: function() {
		return this.template({
			idPais: this.model.get('idPais'), 
			nombrePais: this.model.get('nombrePais'), 
			codigoPais: this.model.get('codigoPais'),
			valorPais: this.model.get('valorPais')
		});
	}

});