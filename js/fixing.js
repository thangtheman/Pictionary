/**
 * Created by ThangTheMan on 5/12/15.
 */

//CREATE A FIREBASE REFERENCE
var chat = new Firebase("https://task4thang.firebaseio.com/Chat");
var messageList = $('#example-messages');
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
        messageList[0].scrollTop = messageList[0].scrollHeight;
        //RESET MESSAGE
        $scope.msg = "";
    }

};
