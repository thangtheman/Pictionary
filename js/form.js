(function() {

    'use strict';

    angular
        .module('myApp' +
        '')

        .controller('MainController', MainController);

    function MainController(ship) {


        var vm = this;
        vm.rental = {};


        // An array of our form fields with configuration
        // and options set. We make reference to this in
        // the 'fields' attribute on the <formly-form> element
        vm.rentalFields = [
            {
                key: 'rfid',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'RFID Numbers',
                    placeholder: 'Enter The Container RFID',
                    required: true
                }
            },
            {
                key: 'weight',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Weights',
                    placeholder: 'Enter Container Weights',
                    required: true
                }
            },
            {
                key: 'info',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Container Information',
                    placeholder: 'Exotic cars from China',
                    required: true
                }
            },
            {
                key: 'fragile',
                type: 'checkbox',
                templateOptions: {
                    label: 'Fragile?'
                },
                // Hide this field if we don't have
                // any valid input in the info field
                hideExpression: '!model.info'
            },
            {
                key: 'shipName',
                type: 'select',
                templateOptions: {
                    label: 'Ship Name',

                    options: ship.getShips()
                }

            }


        ];

        var ref = new Firebase("https://buffship.firebaseio.com/");
        vm.onSubmit = onSubmit;
        function onSubmit() {
            ref.child(vm.rental.shipName).push({RFID: vm.rental.rfid, Weight: vm.rental.weight, Info: vm.rental.info, ShipName: vm.rental.shipName});
            console.log(vm.rental.shipName);
        };
        //FIELD VALUES


    }





})();
