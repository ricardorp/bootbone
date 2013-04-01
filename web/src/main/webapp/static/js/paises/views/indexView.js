var IndexView = Backbone.View.extend({
	// Elemento html
	el: $('#contenido'),
	template: null,
	
	initialize: function(options) {
		this.template = options.template;
	},
	render: function() {
		$(this.el).html(this.template);
	    return this;
	}
});
