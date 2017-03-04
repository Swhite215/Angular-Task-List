var app = angular.module("myModule", []);

app.controller("listController", function($scope) {
  //beginning array for list.
  $scope.masterList = [];

  // console.log($scope.masterList);
  //function to add items to the list
  $scope.addToMaster = function() {
    var itemName = $scope.addItem;
    var newItem = {name: itemName, status: false};
    $scope.masterList.push(newItem);
    $scope.addItem = "";
  }

  //function to delete items from the list
  $scope.removeFromMaster = function(task) {
    var toRemove = $scope.masterList.indexOf(task);
    if (toRemove > -1) {
      $scope.masterList.splice(toRemove, 1);
    }
  }

  //function to update item status
  $scope.updateItem = function(task) {
    //store the position of the task object I am changing
    var toUpdate = $scope.masterList.indexOf(task);

    //alter the status property value to true or false
    if ($scope.masterList[toUpdate].status === true) {
      $scope.masterList[toUpdate].status = false;
    } else {
      $scope.masterList[toUpdate].status = true;
    }
    console.log(task);
  }


});
