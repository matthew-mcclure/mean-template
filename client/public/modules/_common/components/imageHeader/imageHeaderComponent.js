(function () {
    angular
        .module('public')
        .component('imageHeader', {
            templateUrl: '/modules/_common/components/imageHeader/imageHeaderComponent.tpl.html',
            controller: imageHeaderController,
            bindings: {

            }
        })

    function imageHeaderController() {
        var vm = this
    }
})()