var app = angular.module('myApp',[]);
app.controller('customersCtrl',function($scope, $http)
{
    $http.get("https://ayushree-2147141.github.io/JSON/doctors.json")
    .then(function(response)
    {
        $scope.myData = response.data.doctors;
        $scope.rowlimit = response.data.length();
        // $scope.orderByMe = function(x) 
        // {
        //     $scope.myOrderBy = x;
        // }
    });

    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
      }
    
});

app.filter("myfilter",function()
{
    return function(input)
    {
        return input.substring(0,1).toUpperCase() + input.substring(1);
    }
});


app.filter('myNameFilter',function()
{
    return function(input)
    {
        return 'Dr. ' + input;
    }
});

