(function () {
    'use strict';

    angular
        .module('app')
        .factory('RoupaService', Service);

    function Service($http, $q) {
        var apiURL = "http://localhost:9050/api/roupas";
        var service = {};

        
        service.Create = Create;
        service.GetCurrent = GetCurrent;
        service.Delete = Delete;
        service.Update = Update;
        service.GetAll = GetAll;

        
        return service;

        function GetUserId() {
            // get userId token from server
            return $.get('/app/roupaId');
        }

        function GetToken() {
            // get userId token from server
            return $.get('/app/token');
        }

        function GetCurrent(RoupaId) {
            return $http.get(apiURL + '/' + RoupaId).then(handleSuccess, handleError);
        }

        function GetAll() {
            return $http.get(apiURL).then(handleSuccess, handleError);    
        }

        function GetById(_id) {
            return $http.getapiURL + (apiURL + '/' + _id).then(handleSuccess, handleError);
        }

        function GetByUsername(username) {
            return $http.get(apiURL + '/' + username).then(handleSuccess, handleError);
        }

        function Create(roupa) {
            return $http.post(apiURL + '/register', roupa).then(handleSuccess, handleError);
        }

        function Update(roupa) {
            return $http.put(apiURL+ '/' + roupa._id, roupa).then(handleSuccess, handleError);
        }

        function Delete(_id) {
            return $http.delete(apiURL + '/' + _id).then(handleSuccess, handleError);
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
        
    }

})();