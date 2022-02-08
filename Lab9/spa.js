var app = angular.module('myapp',['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider.when('/appointments',
    {
        templateUrl: 'HTML files/appointments.html',
        controller : 'apptcntrl'

    }).when('/medicalhistory',
    {
        templateUrl : 'HTML files/medical_history.html',
        controller: 'historycntrl'

    }).when('/patientinfo',{

        templateUrl : 'HTML files/medical_reports.html',
        controller : 'patientinfocntrl'

    });
})

app.controller('myappcntrl',function()
{

});


app.controller("",function($scope,$http)
{
    $http.get('student.json')
    .success(function(response)
    {
        $scope.students=response.records;
    });
});