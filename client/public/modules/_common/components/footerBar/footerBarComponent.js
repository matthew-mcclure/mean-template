(function () {
    angular.module('public')
        .component('footerBar', {
            templateUrl: '/modules/_common/components/footerBar/footerBarComponent.tpl.html',
            controller: FooterBarController,
            bind: {

            }
        })

    function FooterBarController() {
        var vm = this
        vm.tagline = "this controlls the footer"
    }
})()