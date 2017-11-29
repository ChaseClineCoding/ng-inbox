(function() {
  angular.module('inboxApp').component('toolbar', {
    templateUrl: '/js/toolbar/Toolbar.template.html',
    bindings: {
      messages: '='
    }
  })
})()
