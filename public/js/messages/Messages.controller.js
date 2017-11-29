(function() {
  angular.module('inboxApp').controller('messages', messages)

  function messages($http) {
    let vm = this

    $http.get('https://ng-inbox-server.herokuapp.com/api/messages')
    .then((response) => {
      vm.mail = response.data['_embedded'].messages
    })
  }
})()
