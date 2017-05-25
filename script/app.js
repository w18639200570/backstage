/**
 * Created by Administrator on 2017/5/21 0021.
 */
var app = angular.module("myApp",['ui.router','ngAnimate','ui.bootstrap']);
    app.config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.when("", "/sidebar");
        $stateProvider
            .state("sidebar", {
                url : "/sidebar",
                templateUrl : "page/sidebar.html"
            })
        ;
    });