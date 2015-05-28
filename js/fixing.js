var game = new Firebase("https://task4thang.firebaseio.com/Game");
game.once("child_added", function(snapshot) {
    newPost = snapshot.val();
    console.log("Answer: " + newPost.value);
});

//ADD MESSAGE METHOD
$scope.addAnswer = function (a) {
    //LISTEN FOR RETURN KEY
    if (a.keyCode === 13 && $scope.ans) {
        //ALLOW CUSTOM OR ANONYMOUS USER NAMES
        var answer = $scope.ans;

        //ADD TO FIREBASE

        game.push({value: answer});




        //RESET MESSAGE
        $scope.ans = "";



    }
};