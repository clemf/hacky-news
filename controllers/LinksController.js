hackyNews.controller('LinksCtrl', function LinksCtrl($scope, LinksFactory, UtilitiesFactory) {
  $scope.links = LinksFactory.links;
  $scope.LinksFactory = LinksFactory;
  $scope.upVote = function(id) {
    console.log(id)
    $scope.link = UtilitiesFactory.findById(LinksFactory.links, id);
    $scope.link.points +=1;

    // LinksFactory.links[id].points += 1
  }
});
