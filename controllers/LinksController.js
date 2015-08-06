hackyNews.controller('LinksCtrl', function LinksCtrl($scope, LinksFactory, UtilitiesFactory) {
  $scope.links = LinksFactory.links;
  $scope.LinksFactory = LinksFactory;
  $scope.UtilitiesFactory = UtilitiesFactory;
  $scope.upVote = function(id) {
    $scope.link = UtilitiesFactory.findById(LinksFactory.links, id);
    $scope.link.points +=1;
    LinksFactory.rankLinks();
  }



  LinksFactory.rankLinks();
});
