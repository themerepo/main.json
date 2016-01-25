var app = angular.module('ThemeRepoToolMainJSON', [], function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});
app.controller("ThemeRepoToolMainJSONMain", function($scope) {
    $scope.theme = {};
    $scope.dump = function() {
        console.log($scope.theme);
    }
});
app.directive('ngCleanInput', function() {
    return {
        link: function(scope, element, attrs) {
            attrs.$set('autocomplete', "off");
            attrs.$set('autocorrect', "off");
            attrs.$set('autocapitalize', "off");
            attrs.$set('spellcheck', "false");
        }
    }
});
app.directive('ngAutoExpand', function() {
    return {
        link: function(scope, element, attrs) {
            var textarea = element[0];
            textarea.oninput = function() {
                textarea.style.height = "62px"; /* Reset the height*/
                textarea.style.height = Math.min(textarea.scrollHeight, 300) + "px";
            };
        }
    }
});
app.filter('prettify', function () {
    return function (json) {
        return angular.toJson(json, 4);
    };
});
