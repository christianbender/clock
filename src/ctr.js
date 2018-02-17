var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    // time expression for the UI
    $scope.time = "00:00:00";

    /*
        This function is the initalize-start 
    */
    $scope.start = function () {
        setInterval($scope.timer, 1000);
    };

    /*
        This is the actual timer. It updates the time in each second.
    */
    $scope.timer = function () {

        var d = new Date();
        $scope.time = d.toLocaleTimeString();
        $scope.$apply();
    };
});