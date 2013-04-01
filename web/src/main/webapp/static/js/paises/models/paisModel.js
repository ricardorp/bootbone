/**
 * Modelo para países individuales.
 */
var PaisModel = Backbone.Model.extend({
	/*
	 * definiendo urlRoot no será necesario asociar a un modelo a ninguna colección para poder sincronizarlo 
	 * con el servidor.
	 */
	urlRoot: CONTEXT_PATH + '/rest/paises',
	/*
	 * Indicamos a Backbone que utilice la propiedad idPais como identificador el país
	 */
	idAttribute: 'idPais',

	defaults: {
		idPais: null,
		nombrePais : '',
		codigoPais : '',
		valorPais : null
	}

});