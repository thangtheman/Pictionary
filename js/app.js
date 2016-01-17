"use strict";
var myApp = angular.module("myApp", ["firebase"]);

myApp.controller("MyController", ["$scope", "$firebaseArray",

    //Chat box
    function($scope, $firebaseArray) {
        // CREATE A REFERENCE TO FIREBASE

        // CREATE A REFERENCE TO FIREBASE
        var messagesRef = new Firebase('https://task4thang.firebaseio.com/Chat');

        // REGISTER DOM ELEMENTS
        var messageField = $('#messageInput');
        var nameField = $('#nameInput');
        var messageList = $('#example-messages');

        // LISTEN FOR KEYPRESS EVENT
        messageField.keypress(function (e) {
            if (e.keyCode == 13) {
                //FIELD VALUES
                var username = nameField.val();
                var message = messageField.val();

                //SAVE DATA TO FIREBASE AND EMPTY FIELD
                messagesRef.push({name:username, text:message});
                messageField.val('');
            }
        });

        // Add a callback that is triggered for each chat message.
        messagesRef.limitToLast(10).on('child_added', function (snapshot) {
            //GET DATA
            var data = snapshot.val();
            var username = data.name || "anonymous";
            var message = data.text;

            //CREATE ELEMENTS MESSAGE & SANITIZE TEXT
            var messageElement = $("<li>");
            var nameElement = $("<strong class='example-chat-username'></strong>")
            nameElement.text(username);
            messageElement.text(message).prepend(nameElement);

            //ADD MESSAGE
            messageList.append(messageElement)

            //SCROLL TO BOTTOM OF MESSAGE LIST
            messageList[0].scrollTop = messageList[0].scrollHeight;
        });
            var game = new Firebase("https://task4thang.firebaseio.com/Game");

          ////ADD MESSAGE METHOD
          //  $scope.addAnswer = function (a) {
          //      //LISTEN FOR RETURN KEY
          //      if (a.keyCode === 13 && $scope.ans) {
          //          //ALLOW CUSTOM OR ANONYMOUS USER NAMES
          //           var answer = $scope.ans;
          //
          //          //ADD TO FIREBASE
          //
          //          game.child('Answer').push({value: answer});
          //
          //          answer1= answer;
          //
          //          //RESET MESSAGE
          //          $scope.ans = "";
          //
          //
          //
          //      }
          //  };


    }
]);

