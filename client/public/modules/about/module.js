(function () {
    angular
        .module('public.about', ['ui.router'])
        .config(($stateProvider) => {
            $stateProvider
                .state('public.about', {
                    url: '/about',
                    data: {
                        title: '/ABOUT'
                    },
                    views: {
                        'content@public': {
                            templateUrl: 'app/about/views/about.html',
                            controller: 'AboutController as AboutCtrl'
                        }
                    }
                })
        })
})()