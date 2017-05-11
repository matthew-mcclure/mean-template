(function () {
    angular.module('public')
        .controller('SampleController', SampleController)

    SampleController.$inject = ['SampleService']

    function SampleController(SampleService) {
        var vm = this
        vm.brand = 'sample'
        vm.samples = null
        let doc = {
            name: 'updated three',
            description: 'inserted from client'
        }
        getAll()
        insertOne(doc)
        updateOne("5902a2239113b5270c850e03", doc)
        deleteOne("5902a2239113b5270c850e03")


        function getAll() {
            SampleService.getAll(onGetAllSuccess, onError)
        }

        function onGetAllSuccess(response) {
            vm.samples = response
        }

        function insertOne(data) {
            SampleService.insertOne(data, onInsertOneSuccess, onError)
        }

        function onInsertOneSuccess(response) {
            vm.rooms = response
        }

        function updateOne(id, data) {
            SampleService.updateOne(id, data, onUpdateOneSuccess, onError)
        }

        function onUpdateOneSuccess(response) {
            console.log(response)
        }

        function deleteOne(id) {
            SampleService.deleteOne(id, onDeleteSuccess, onError)
        }

        function onDeleteSuccess(response) {
            console.log(response)
        }

        function onError(response) {
            console.log(response)
        }
    }
})()