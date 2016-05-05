var warning = false;

// create angular form validator
angular
    .module('form', [])

    .controller('FormController', function($scope) {
      $scope.submit = function() {
        
        checkDeets($scope.details);
        
        if (warning) { // show warning form is not valid yet
            $scope.warning = true;
            form.$valid = false;
        } else { // show success if it passes the validator
            $scope.warning = false;
            $scope.success = true;
            $scope.complete = true;
        }

      };
    });


// this checks details before the user submits
function checkDeets(str) {
    // if user has been warned once, dont warn them again
    if (warning) {
        warning = false;
    } else if (/\d{3,}/ig.test(str)) { // str contains 3 consecutive digits or more
        warning = true;
    }
}

// could get into more detail by parsing string if needed - 
// check if ss # is part of str
// check if str contains 9 consecutive digits 
// check if str contains 9 digits with dashes xxx-xx-xxxx
// check if str contains 9 digits with spaces xxx xx xxxx
// check if cc # is part of str 14 digits 