(function() {
  angular.module('inboxApp').controller('messages', messages)

  function messages($http) {
    let vm = this

    vm.loadData = () => {
      $http.get('https://ng-inbox-server.herokuapp.com/api/messages')
      .then((response) => {
        vm.mail = response.data['_embedded'].messages
      })
    }

    vm.loadData()

    vm.updateStarred = (id, bool) => {
      let data = {
        "messageIds": [id],
        "command": "star",
        "star": bool
      }
      $http.patch('https://ng-inbox-server.herokuapp.com/api/messages', data)
      .then(() => {
        vm.loadData()
      })
    }
  }
})()
