(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListShowController', ShoppingListShowController)
.controller('BoughtListShowController', BoughtListShowController)
.service('ShoppingListService', ShoppingListService);

BoughtListShowController.$inject = ['ShoppingListService'];
ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
  var showList = this;

  showList.items = ShoppingListService.getItems();

  showList.markItem = function (item,bought) {
    ShoppingListService.markItem(item,bought);
  };
}

function BoughtListShowController(ShoppingListService) {
  var showList = this;
  showList.items = ShoppingListService.getItems();
}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [
    {quantity: 3, name: "Cookies",bought: false},
    {quantity: 2, name: "Books",bought: false},
    {quantity: 1, name: "Courses",bought: false},
    {quantity: 4, name: "Flowers",bought: false},
    {quantity: 5, name: "Diamonds",bought: false}
  ];

  service.markItem = function (item,bought) {
    item.bought = bought;
  };

  service.getItems = function () {
      return items;
  }

}

})();
