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
        vm.CalcularValorMargem = CalcularValorMargem;
        initController();

        function initController() {
            RoupaService.GetAll().then(function (roupas) {
                vm.ListRoupa = roupas;
            })
            .catch(function (error) {
                FlashService.Error(error);
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

        function CalcularValorMargem(Roupa)
        {
            var valor = Roupa.valorCompra;

            Roupa.valorMargem = valor*2;
        }
    }   


})();