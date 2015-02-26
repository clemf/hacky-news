hackyNews.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, LinksFactory, UtilitiesFactory) {
  $scope.link = UtilitiesFactory.findById(LinksFactory.links, $stateParams.linkId)
  $scope.addComment = function() {
    $scope.link.comments.push({ userName: $scope.userName, comment: $scope.comment});
    $scope.userName = null;
    $scope.comment = null;
  }
});
