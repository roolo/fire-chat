var chatApp = angular.module('ChatApp', ['firebase']);
 
chatApp.controller('MessagesCtrl', ['$scope', 'angularFire', function($scope, angularFire) {
  $scope.greeting = 'Hola!';
  $scope.newMessage = {};
  var messagesReference = angularFire(
    'https://mailo-first-express-node.firebaseIO.com/messages', 
    $scope, 
    'messages', 
    []
  );
  
  $scope.sendMessage = function(newMessage) {
    $scope.messages.push({
      nick:     newMessage.nick,
      message:  newMessage.message
    });
    $scope.newMessage.message='';
  }
}]);