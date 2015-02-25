var hackyNews = angular.module('hackyNews', ['ui.router']);

hackyNews.config(function($stateProvider) {
  $stateProvider.stat('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: "LinksCtrl"
  });
};
