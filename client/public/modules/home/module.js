(function () {
    angular
        .module('public.home', ['ui.router'])
        .config(($stateProvider) => {
            $stateProvider
                .state('public.home', {
                    url: '/home',
                    data: {
                        title: '/HOME'
                    },
                    views: {
                        'content@public': {
                            templateUrl: 'app/home/views/home.html',
                            controller: 'HomeController as HomeCtrl'
                        }
                    }
                })
        })
})()