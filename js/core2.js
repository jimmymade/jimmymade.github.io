
Parse.initialize("8FAGgqgRZpVOUZwFDX5Kc4gzIG75f18GaNGXTyB0", "RlX46F9yT7Miv56vHrqprSNtHJCbtAOdS5CbKKle");
    

var MeasurementsObject = Parse.Object.extend("Measurements");
  //var measurementObject = new MeasurementObject();

var query = new Parse.Query(MeasurementsObject);
  //var objects;
var object;

var getResults = function(callback) {
  query.find({
    success: function(results) {
      // for (var i = 0; i < results.length; i++) { 
            
      //     }
      //alert(objects[1].get("NameLF"))
      //alert(objects);
      callback(results)
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  })
}

getResults(function(results) {
  alert(results[0].get("NameLF"))
})

alert("HELLO");
