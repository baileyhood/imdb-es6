import './search';
import './movie-page';
import './modal';
import './index.scss';

!(function(app) {

    var self = app.SITE = {

        start: function() {
            runModules();
        }
    }

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

    app.SITE.start();

})(window._APP = (window._APP || {}));
