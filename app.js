var hackyNews = angular.module('hackyNews', ['ui.router']);

hackyNews.config(function($stateProvider, $locationProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: 'LinksCtrl'
  });

  $stateProvider.state('submit', {
    url:"submit",
    templateUrl: "partials/submit.html",
    controller: 'SubmissionsCtrl'
  });

  $stateProvider.state('comments', {
    url:"comments/:linkId",
    templateUrl: "partials/comments.html"
  })
});
