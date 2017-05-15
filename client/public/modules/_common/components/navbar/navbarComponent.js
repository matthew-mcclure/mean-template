(function() {
    angular
        .module('public')
        .component('headerBar', {
            templateUrl: '/modules/_common/components/navbar/navbarComponent.tpl.html',
            controller: headerBarController,
            bindings: {
            }
        })

        function headerBarController() {
            var vm = this
            vm.tagline = "hello components!"
        }
})()