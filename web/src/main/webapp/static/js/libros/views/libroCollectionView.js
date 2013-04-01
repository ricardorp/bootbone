var LibroCollectionView = Backbone.View.extend({
	// Elemento html
	el: $('#contenido'),
	template: null,
	libroModelViewTemplate: null,
	editarLibroTemplate: null,
	eliminarLibroTemplate: null,

	// Eventos
	events: {
		'click .editar' : 'editar',
		'click .eliminar' : 'eliminar'
	},

	// Inicializacion
	initialize: function(options) {

		this.collection = options.collection;
		this.template = options.template;
		this.libroModelViewTemplate = options.libroModelViewTemplate;
		this.editarLibroTemplate = options.editarLibroTemplate;
		this.eliminarLibroTemplate = options.eliminarLibroTemplate;
		this.collection.bind('reset', this.render, this);
	},

	// Renderizar
	render: function() {
		$(this.el).html('');
		//Solo si hay resultados renderizamos la tabla
		if(this.collection.length > 0){
			// Renderizado de tabla de resultados
			var libroRows = '';
			_.each(this.collection.models, 
				function(value) {
					libroRows += new LibroModelView({
						model : value, 
						template: this.libroModelViewTemplate
					}).render();
		      	}, this
		    );
		    $(this.el).append(this.template({rows : libroRows}));
		}
		
	    return this;
	},
	
	editar: function(item) {
		item.preventDefault();
		var atributo = 
			$(item.target).attr('id') == null ? $(item.target).parent().attr('id') : $(item.target).attr('id');
		var idStr = atributo.split('_')[1];
		var idLibro = parseInt(idStr);
		var model = this.collection.get(idLibro);
		$("#mensajes").html(this.editarLibroTemplate({libro : model}));
	},

	eliminar: function(item) {
		item.preventDefault();
		var atributo = 
			$(item.target).attr('id') == null ? $(item.target).parent().attr('id') : $(item.target).attr('id');
		var idStr = atributo.split('_')[1];
		var idLibro = parseInt(idStr);
		var model = this.collection.get(idLibro);
		$("#mensajes").html(this.eliminarLibroTemplate({libro : model}));
	}
});