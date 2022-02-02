var myapp = angular.module("myapp",[]);
myapp.controller("myctrl", function($scope,$http) 
{
$http.get("https://ayushree-2147141.github.io/JSON/customer.json")
.success(function(response)
{
    $scope.names = response.records;
});

});