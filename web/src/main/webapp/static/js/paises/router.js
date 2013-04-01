var AppRouter = Backbone.Router.extend({
	
    routes: {
        "": "index",
        "libros": "libros",
        "paises": "paises",
        "referencias": "referencias"
    },

    paisCollectionView: null,
    indexView: null,
    	
    initialize: function () {
    },

    index: function() {
    	var indexTemplate = this.loadTemplate('paises', 'indexTemplate');
    	this.indexView = new IndexView({template: indexTemplate});
        this.indexView.render();
    },
    
    libros: function () {
    	var libroCollection = new LibroCollection();
    	libroCollection.fetch({    // genera GET /libros
    	    success: function(){
    	        console.log('Recuperados ' + libroCollection.length + ' libros');
    	    },
    	    error: function() {
    	    	alert('Se ha producido un error al recuperar la lista de libros.');
    	    }
    	});
    	var libroCollectionTemplate = _.template(this.loadTemplate('libros', 'libroCollection'));
    	var libroModelTemplate = _.template(this.loadTemplate('libros', 'libroModel'));
    	var editarLibroTemplate = _.template(this.loadTemplate('libros', 'editarLibro'));
    	var eliminarLibroTemplate = _.template(this.loadTemplate('libros', 'eliminarLibro'));
        this.libroCollectionView = new LibroCollectionView({
        	collection: libroCollection,
        	template: libroCollectionTemplate,
        	libroModelViewTemplate: libroModelTemplate,
        	editarLibroTemplate : editarLibroTemplate,
        	eliminarLibroTemplate : eliminarLibroTemplate
        });	
        this.libroCollectionView.render();
    },    
    
    paises: function () {
    	var paisCollection = new PaisCollection();
    	paisCollection.fetch({    // genera GET /paises
    	    success: function(){
    	        console.log('Recuperados ' + paisCollection.length + ' países');
    	    },
    	    error: function() {
    	    	alert('Se ha producido un error al recuperar la lista de países.');
    	    }
    	});
    	var paisCollectionTemplate = _.template(this.loadTemplate('paises', 'paisCollection'));
    	var paisModelTemplate = _.template(this.loadTemplate('paises', 'paisModel'));
        this.paisCollectionView = new PaisCollectionView({
        	collection: paisCollection,
        	template: paisCollectionTemplate,
        	paisModelViewTemplate: paisModelTemplate
        });	
        this.paisCollectionView.render();
    },

    referencias: function() {
    	var template = this.loadTemplate('paises', 'referencias');
    	this.referenciasView = new ReferenciasView({template: template});
        this.referenciasView.render();
    },
    
    loadTemplate: function(module, name) {
    	var baseUrl = CONTEXT_PATH + '/static/js/'+module+'/templates';
    	var url = baseUrl + '/' + name + '.tmpl';

    	var template = '';
    	$.ajax({
    	    url: url,
    	    method: 'GET',
    	    async: false,
    	    typeFile: 'html',
    	    success: function(data) {
    	        template = data;
    	    }
    	});
    	return template;
    }
});

var app = new AppRouter();
new NavBar({el:document.getElementById('nav-item-container')});
Backbone.history.start();
