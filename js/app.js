var app = angular.module("codeup", ['ngRoute', 'LocalStorageModule']);

app.directive("markdown", function ($compile, $http) {
  var converter = new Showdown.converter();
  return {
    restrict: 'E',
    replace: true,
    link: function (scope, element, attrs) {
      $http.get(attrs.src).then(function(data) {
        element.html(converter.makeHtml(data.data));
      });
    }
  };
});

app.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'ng-views/home.html'
  });

  $routeProvider.when('/prework/:course', {
    templateUrl: 'ng-views/prework.html',
    controller: 'PreworkCtrl'
  });

  $routeProvider.when('/prework/:course/:module', {
    templateUrl: 'ng-views/prework-module.html',
    controller: 'PreworkModuleCtrl'
  });

  $routeProvider.otherwise({redirectTo: '/'});

}]);

app.controller("MainCtrl", function ($scope, $http, localStorageService) {

  // load the prework data
  $http.get('/db/prework.json').success(function (data) {
    $scope.prework = data;
  });

  $scope.preworkProgress = localStorageService.get('prework-progress');

  if ($scope.preworkProgress == null || typeof $scope.preworkProgress != 'object') {
    localStorageService.add('prework-progress', {});
    $scope.preworkProgress = {};
  }

  $scope.$watch('preworkProgress', function () {
    // save progress in local storage anytime it changes
    localStorageService.add('prework-progress', $scope.preworkProgress);
  }, true);

  $scope.clearPreworkProgress = function () {
    if (confirm('Are you sure you want to clear all progress?')) {
      // just empty the prework progress object, it will autosave to local storage
      $scope.preworkProgress = {};
    }
  };

  $scope.isCheckpointComplete = function (courseSlug, moduleSlug, checkpointSlug) {
    return $scope.preworkProgress[courseSlug] &&
           $scope.preworkProgress[courseSlug][moduleSlug] &&
           $scope.preworkProgress[courseSlug][moduleSlug][checkpointSlug] == 1;
  };
  
});

app.controller("PreworkCtrl", function ($scope, $routeParams) {

  // locate the selected course
  $scope.course = _.find($scope.prework, function (course) { return course.slug == $routeParams.course; });

  $scope.completionPercentage = 0;

  $scope.updateCompletionPercentage = function () {
    var avaiableCheckpoints = 0;
    var completedCheckpoints = 0;
    // retrieve number of available and completed checkpoints
    _.each($scope.course.modules, function (module) {
      avaiableCheckpoints += module.checkpoints.length;
      _.each(module.checkpoints, function (checkpoint) {
        if ($scope.isCheckpointComplete($scope.course.slug, module.slug, checkpoint.slug)) {
          completedCheckpoints++;
        }
      });
    });
    // calculate and update completion percentage
    if (avaiableCheckpoints > 0) {
      $scope.completionPercentage = Math.floor((completedCheckpoints / avaiableCheckpoints) * 100);
    } else {
      $scope.completionPercentage = 0;
    }
  };

  $scope.$watch('preworkProgress', function () {
    // update completion precentage when progress changes
    $scope.updateCompletionPercentage();
  }, true);

  $scope.getCompletedCheckpointCountForModule = function (module) {
    var checkpointsComplete = 0;
    _.each(module.checkpoints, function (checkpoint) {
      if ($scope.preworkProgress[$scope.course.slug] &&
          $scope.preworkProgress[$scope.course.slug][module.slug] &&
          $scope.preworkProgress[$scope.course.slug][module.slug][checkpoint.slug] == 1) {
        checkpointsComplete++;
      }
    });
    return checkpointsComplete;
  };

});

app.controller("PreworkModuleCtrl", function ($scope, $routeParams, $location, $anchorScroll) {

  // locate the selected course and module
  $scope.course = _.find($scope.prework, function (course) { return course.slug == $routeParams.course; });
  $scope.module = _.find($scope.course.modules, function (module) { return module.slug == $routeParams.module; });

  $scope.cpIndex = 0;

  // find the first uncompleted checkpoint and update the index
  for (var i = 0; i < $scope.module.checkpoints.length; i++) {
    var checkpoint = $scope.module.checkpoints[i];
    if (!$scope.isCheckpointComplete($scope.course.slug, $scope.module.slug, checkpoint.slug)) {
      $scope.cpIndex = i;
      break;
    }
  }

  $scope.next = function () {
    $scope.cpIndex++;
    $anchorScroll();
  };

  $scope.prev = function () {
    $scope.cpIndex--;
    $anchorScroll();
  };

  $scope.finish = function () {
    $location.path('/prework/' + $scope.course.slug);
  };

  $scope.toggleCheckpoint = function (checkpoint) {
    if ($scope.isCheckpointComplete($scope.course.slug, $scope.module.slug, checkpoint.slug)) {
      delete $scope.preworkProgress[$scope.course.slug][$scope.module.slug][checkpoint.slug];
    } else {
      if (!$scope.preworkProgress[$scope.course.slug]) {
        $scope.preworkProgress[$scope.course.slug] = {};
      }
      if (!$scope.preworkProgress[$scope.course.slug][$scope.module.slug]) {
        $scope.preworkProgress[$scope.course.slug][$scope.module.slug] = {};
      }
      $scope.preworkProgress[$scope.course.slug][$scope.module.slug][checkpoint.slug] = 1;
    }
  };

  $scope.jumpToCheckpoint = function (index) {
    $scope.cpIndex = index;
  };

});