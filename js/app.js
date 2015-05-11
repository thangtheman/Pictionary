"use strict";
var myApp = angular.module("myApp", ["firebase"]);

myApp.controller("MyController", ["$scope", "$firebaseArray",

    //Chat box
    function($scope, $firebaseArray) {
        //CREATE A FIREBASE REFERENCE
        var chat = new Firebase("https://task4thang.firebaseio.com/Chat");
        var answer1, msg;

        // GET MESSAGES AS AN ARRAY
        $scope.messages = $firebaseArray(chat);

        //ADD MESSAGE METHOD
        $scope.addMessage = function(e) {

            //LISTEN FOR RETURN KEY
            if (e.keyCode === 13 && $scope.msg) {
                //ALLOW CUSTOM OR ANONYMOUS USER NAMES
                var name = $scope.name || "anonymous";
                msg=$scope.msg;

                //ADD TO FIREBASE
                chat.child(name).set({
                    from: name,
                    body: $scope.msg
                });
                if (msg == answer1) {
                    alert(name + ' Win the game!!!!');
                    game.remove();
                }

                //RESET MESSAGE
                $scope.msg = "";
            }

        };



        // Game Answer input


            var game = new Firebase("https://task4thang.firebaseio.com/Game");

          //ADD MESSAGE METHOD
            $scope.addAnswer = function (a) {
                //LISTEN FOR RETURN KEY
                if (a.keyCode === 13 && $scope.ans) {
                    //ALLOW CUSTOM OR ANONYMOUS USER NAMES
                    var answer = $scope.ans;

                    //ADD TO FIREBASE

                    game.child('Answer').push({value: answer});

                    answer1= answer;

                    //RESET MESSAGE
                    $scope.ans = "";



                }
            };


    }
]);

