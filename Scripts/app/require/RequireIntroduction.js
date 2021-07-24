define(function () {
    function RequireIntroductionViewModel() {
        var self = this;

        self.init = function () { };

        self.controllers = {
            '/': function () { }
        };

        self.afterRender = function (element) {
            console.log("Successful to load RequireIntroductionViewModel page");
        };
        
        self.TestRequireJs = () => {
            console.log('testRequireJS');
          }
    }

    return new RequireIntroductionViewModel();
});