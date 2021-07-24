/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-07-24 12:08:10
 * @LastEditTime: 2021-07-24 21:31:48
 * @LastEditors: rodchen
 */
define(function() {
  function RequireCodeViewModel() {
    var self = this;

    self.init = function() {};

    self.controllers = {
      '/': function() {}
    };

    self.data = {
      information: 123
    }

    self.afterRender = function(element) {
      debugger
        console.log("Successful to load RequireCodeViewModel page");
    };

  }

  return new RequireCodeViewModel();

});