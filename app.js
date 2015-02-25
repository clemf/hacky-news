var hackyNews = angular.module('hackyNews', ['ui.router']);

hackyNews.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: "LinksCtrl"
  });
});
