hackyNews.controller('SubmissionsCtrl', function SubmissionsCtrl($scope, $state, LinksFactory) {
  $scope.links = LinksFactory.links;
  $scope.LinksFactory = LinksFactory;
  $scope.changeView = function(view) {
    // $location.path(view);
    LinksFactory.addLink()
    $state.go(view);
  }
});
