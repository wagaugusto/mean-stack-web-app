(function () {
    'use strict';

    angular
        .module('app')
        .controller('Roupa.IndexController', Controller);

        function Controller($window, RoupaService, FlashService) {
            var vm = this;
    
            vm.roupa = null;
            vm.salvarRoupa = salvarRoupa;
            vm.CalcularPrecoSugerido = CalcularPrecoSugerido;                    
                
            function salvarRoupa() {
                RoupaService.Create(vm.roupa)
                    .then(function () {
                        FlashService.Success('Roupa cadastrada');
                    })
                    .catch(function (error) {
                        FlashService.Error(error);
                    });
            }
    
            function CalcularPrecoSugerido()
            {
                var valor = document.getElementById("valorcompra").value;
                document.getElementById("valormargem").value = valor*2;
            }

        }
})();
