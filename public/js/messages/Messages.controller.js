(function() {
  angular.module('inboxApp').controller('messages', messages)

  function messages($http) {
    let vm = this

    $http.get('https://localhost:8082/api/messages')
    .then((response) => {
      vm.mail = response.data['_embedded'].messages
    })
  }
})()
