hackyNews.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, LinksFactory, UtilitiesFactory) {
  $scope.UtilitiesFactory = UtilitiesFactory;
  $scope.link = UtilitiesFactory.findById(LinksFactory.links, $stateParams.linkId)
  $scope.comments = $scope.link.comments;
  $scope.addComment = function() {
    $scope.link.comments.push({ userName: $scope.userName, comment: $scope.comment, id:$scope.link.comments.length + 1,date: new Date()});
    $scope.userName = null;
    $scope.comment = null;
  }
});
