var PaisCollectionView = Backbone.View.extend({
	// Elemento html
	el: $('#contenido'),
	template: null,
	paisModelViewTemplate: null,

	// Eventos
	events: {
	},

	// Inicializacion
	initialize: function(options) {

		this.collection = options.collection;
		this.template = options.template;
		this.paisModelViewTemplate = options.paisModelViewTemplate;
		this.collection.bind('reset', this.render, this);
	},

	// Renderizar
	render: function() {
		$(this.el).html('');
		//Solo si hay resultados renderizamos la tabla
		if(this.collection.length > 0){
			// Renderizado de tabla de resultados
			var paisRows = '';
			_.each(this.collection.models, 
				function(value) {
					paisRows += new PaisModelView({
						model : value, 
						template: this.paisModelViewTemplate
					}).render();
		      	}, this
		    );
		    $(this.el).append(this.template({rows : paisRows}));
		}
		
	    return this;
	}
});