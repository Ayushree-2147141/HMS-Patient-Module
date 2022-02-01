var app = angular.module("Records",[]);
app.controller("RecordsController",function($scope,$http)
{
    // var employees=[
    //     {"firstname": "Ayushree",
    //     "lastname" : "Chakrabartty"},
    //     {"firstname" :  "Hrishik",
    //     "lastname" : "Kumar"},
    //     {"firstname" : "Tanushree",
    //     "lastname" : "Chakrabartty"},
    //     {"firstname" : "Divya",
    //     "lastname" : "Prasad"}

    // ]
    // $scope.employees=employees;
    // $scope.rowlimit = 4;

    $http.get("https://github.com/Ayushree-2147141/HMS-Patient-Module/blob/main/Lab%208/patient.json")
    .success(function(response)
    {
        records = response.doctors;
        $scope.doctors = records;
    });
    $scope.rowlimit=6;
}
);