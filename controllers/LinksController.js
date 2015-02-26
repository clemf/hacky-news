hackyNews.controller('LinksCtrl', function LinksCtrl($scope, LinksFactory, UtilitiesFactory) {
  $scope.links = LinksFactory.links;
  $scope.LinksFactory = LinksFactory;
  $scope.upVote = function(id) {
    $scope.link = UtilitiesFactory.findById(LinksFactory.links, id);
    $scope.link.points +=1;
    LinksFactory.rankLinks();
  }

  $scope.hoursAgo = function(id) {
    $scope.link = UtilitiesFactory.findById(LinksFactory.links, id);
    var minutesSince = Math.round((Date.now() - $scope.link.date) / 60000);
    if (minutesSince < 1) {
      return "just now";
    }
    else if (minutesSince < 60) {
      return minutesSince + " minutes ago";
    }
    else if (minutesSince < 1440){
      return Math.round(minutesSince / 60) + " hours ago";
    }
    else {
      return Math.round(minutesSince / 1440) + " days ago";
    }
  }

  LinksFactory.rankLinks();
});
