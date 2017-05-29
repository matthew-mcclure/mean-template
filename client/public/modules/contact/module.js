(function () {
    angular
        .module('public.contact', ['ui.router'])
        .config(($stateProvider) => {
            $stateProvider
                .state('public.contact', {
                    url: '/contact',
                    data: {
                        title: '/CONTACT'
                    },
                    views: {
                        'content@public': {
                            templateUrl: 'app/contact/views/contact.html',
                            controller: 'ContactController as ContactCtrl'
                        }
                    }
                })
        })
})()