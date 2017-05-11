(function () {
	'use strict'

	angular
		.module('public')
		.factory('SampleService', SampleService)

	function SampleService($http) {
		return {
			getAll,
			insertOne,
			updateOne,
			deleteOne
		}

		function getAll(onSuccess, onError) {
			$http.get('/api/sample')
				.then((response) => {
					onSuccess(response.data)
				})
				.catch((response) => {
					onError(response)
				})
		}

		function insertOne(data, onSuccess, onError) {
			$http.post('/api/sample', data)
				.then((response) => {
					onSuccess(response.data)
				})
				.catch((response) => {
					onError(response)
				})
		}

		function updateOne(id, data, onSuccess, onError) {
			$http.put('api/sample/' + id, data)
				.then((response) => {
					onSuccess(response)
				})
				.catch((response) => {
					onError(response)
				})
		}

		function deleteOne(id, onSuccess, onError) {
			$http.delete('/api/sample/' + id)
				.then((response) => {
					onSuccess(response)
				})
				.catch((response) => {
					onError(response)
				})
		}
	}
})()