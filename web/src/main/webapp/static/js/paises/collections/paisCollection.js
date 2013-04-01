/**
 * Modelo para listas de países
 */
var PaisCollection = Backbone.Collection.extend({
	url : CONTEXT_PATH + '/rest/paises',
    model: PaisModel
});