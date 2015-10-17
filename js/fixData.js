(function(){

    'use strict';

    angular
        .module('myApp')
        .factory('ship', ship);

    function ship() {

        function getShips() {
            return [
                {
                    "name": "The Black Pearl",
                    "value":"The Black Pearl"
                },
                {
                    "name":"The Awesome Prince",
                    "value":"The Awesome Prince"
                },
                {
                    "name":"Capt Joel",
                    "value":"Capt Joel"
                }

            ];
        }

        return {
            getShips: getShips
        }
    }
})();