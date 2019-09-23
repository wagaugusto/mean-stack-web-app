(function () {
    'use strict';

    angular
        .module('app')
        .controller('Estoque.IndexController', Controller);

    function Controller($window, RoupaService, FlashService) {
        var vm = this;

        vm.ConsultarRoupa = ConsultarRoupa;
        vm.DeletarRoupa = DeletarRoupa;
        vm.ListRoupa = null;
        vm.CalcularPrecoSugerido = CalcularPrecoSugerido;
        initController();

        function initController() {
            RoupaService.GetAll().then(function (roupas) {
                vm.ListRoupa = roupas;
            });
        }      
        
        function DeletarRoupa(Roupa) {
            RoupaService.Delete(Roupa._id)
                .then(function () {
                    initController();
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }

        function ConsultarRoupa(Roupa) {
            document.getElementById("FormUpdate").hidden = false;
            RoupaService.GetCurrent(Roupa._id)
            .then(function (roupa) {
                vm.roupa = roupa;
            })
            .catch(function (error) {
                FlashService.Error(error);
            });
        }

        function CalcularPrecoSugerido(Roupa)
        {
            var valor = Roupa.valorcompra;

            Roupa.valormargem = valor*2;
        }
    }   


})();