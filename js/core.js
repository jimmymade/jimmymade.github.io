
Parse.initialize("8FAGgqgRZpVOUZwFDX5Kc4gzIG75f18GaNGXTyB0", "RlX46F9yT7Miv56vHrqprSNtHJCbtAOdS5CbKKle");

var familyFitnessApp = angular.module('familyFitnessApp', []);


familyFitnessApp.controller('MeasurementListController', function ($scope) {
  var MeasurementsObject = Parse.Object.extend("Measurements");
  var query = new Parse.Query(MeasurementsObject);

  $scope.loadData = function(callback) {
    query.find({
      success: function(results) {
        callback(results);
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }

  $scope.loadData(function(results) {
    var measurements = new Array();

    for (i = 0; i < results.length; i++) {
      measurements[i] = {'name': results[i].get("NameLF"),
                          'initialWeight': results[i].get("Weight"),
                          'initialBF' : results[i].get("BFPercent")};
    }

    $scope.$apply(function() {
      $scope.measurements = measurements;
    })
  });

});
