/**
 * Modelo para listas de libros
 */
var LibroCollection = Backbone.Collection.extend({
	url : CONTEXT_PATH + '/rest/libros',
    model: LibroModel
});