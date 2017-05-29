(function () {
    angular
        .module('public')
        .component('imageCard', {
            templateUrl: '/modules/_common/components/imageCard/imageCardComponent.tpl.html',
            controller: ImageCardController,
            bindings: {
                image: '<'
            }
        })

    function ImageCardController() {
        var vm = this
        vm.sampleImage = "http://couvignou.com/wp-content/themes/divergent/images/placeholder.jpg"
        vm.tagline = "this is the image card controller"
    }
})()