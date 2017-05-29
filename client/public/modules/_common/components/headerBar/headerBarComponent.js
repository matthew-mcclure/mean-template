(function () {
    angular
        .module('public')
        .component('headerBar', {
            templateUrl: '/modules/_common/components/headerBar/headerBarComponent.tpl.html',
            controller: HeaderBarController,
            bindings: {
            }
        })

    function HeaderBarController() {
        var vm = this
        vm.tagline = "hello components!"
    }
})()