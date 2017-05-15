(function () {
    angular.module('public')
        .component('footerBar', {
            templateUrl: '/modules/_common/components/footerBar/footerBarComponent.tpl.html',
            controller: footerBarController,
            bind: {

            }
        })

    function footerBarController() {
        var vm = this
        vm.tagline = "this controlls the footer"
    }
})()