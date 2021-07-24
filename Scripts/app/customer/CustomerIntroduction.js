/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2021-07-24 12:08:10
 * @LastEditTime: 2021-07-24 14:57:48
 * @LastEditors: rodchen
 */
define(['knockout'], function (ko) {
  function CustomerIntroductionViewModel() {
    var self = this;

    self.init = function () { };

    self.Information = {
      name: 'rodchen',
      phone: '19815516122'
    };

    self.controllers = {
      '/': function () { }
    };

    self.afterRender = function (element) {
      console.log("Successful to load CustomerIntroductionViewModel page");
    };
  }

  return new CustomerIntroductionViewModel();
});