angular.module('public')
    .config(($stateProvider) => {
        $stateProvider
            .state('public', {
                url: '/',
                data: {
                    title: 'TOP LEVEL STATE',
                },
                views: {
                    'content@public': {
                        templateUrl: 'app/sample/views/sample.html',
                        controller: 'SampleController as SampleCtrl'
                    }
                }
            })
    })