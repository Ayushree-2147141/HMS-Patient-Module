angular.module('myapp',['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider.when('/appointment',
    {
        templateUrl:'html/diagnosis_report.html',
        controller:'firstctrl'
    }).when('/schedule',
    {
        templateUrl:'html/doctor_schedule.html',
        controller:'secondctrl'
    }).when('/patient',
    {
        templateUrl:'html/patient_info.html',
        controller:'thirdctrl'
    }).when('/patient/:first/:last/:age',
    {
        templateUrl:'html/patient_info.html',
        controller:'thirdctrl'
    })
})
.controller('myctrl',function()
{

})

.controller("secondctrl",function($scope,$http)
{
    $http.get("https://ayushree-2147141.github.io/JSON/doctorSchedule.json")
    .success(function(response)
    {
        $scope.schedule=response.schedule;
    });
})


.controller("thirdctrl",function($scope,$routeParams)
{
    $scope.message="Patient Information"
    if($routeParams.first && $routeParams.last && $routeParams.age)
    {
        $scope.person={
            first:$routeParams.first,
            last:$routeParams.last,
            age:$routeParams.age
        };
    }
})


.controller("firstctrl",function($scope,$http)
{
    $http.get("https://ayushree-2147141.github.io/JSON/patient.json")
    .then(function(response)
    {
        $scope.patient = response.data.patient;
    });
})


const showImage = () => {
    document.getElementById("first").style.display ='block';
}

const showDetailedReport = () => {
    document.getElementById("report").style.display ='block';
}

const prescription = () => {
    document.getElementById("prescription").style.display ='block';
}