"use strict";
var myApp = angular.module("myApp", ["firebase"]);

myApp.controller("MyController", ["$scope", "$firebaseArray",

    //Chat box
    function($scope, $firebaseArray) {
        // CREATE A REFERENCE TO FIREBASE


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
                chat.push({
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




//Event emititng  ---- currently working
//        var events = require('events');
//        var EventEmitter = events.EventEmitter;
//
//        var chat = new EventEmitter();
//        var users = [], chatlog = [];
//
//        chat.on('message', function(message) {
//            chatlog.push(message);
//        });
//
//        chat.on('join', function(nickname) {
//            users.push(nickname);
//        });
//
//// Emit events here
//        chat.emit('join','Cool');
//        chat.emit('message','Hot');

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

