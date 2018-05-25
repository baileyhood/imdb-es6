import './modules/search';
import './modules/movie-page';
import './index.scss';

!(function(app) {

	var self = app.SITE = {

		start: function() {
			runModules();
		}
	};

	function runModules() {
		for (var moduleName in app) {
			if (app.hasOwnProperty(moduleName)) {
				var module = app[moduleName];
				if (module.init) {
					module.init();
				}
			}
		}
	}

	self.start();

})(window._APP = (window._APP || {}));
