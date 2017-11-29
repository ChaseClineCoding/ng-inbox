(function() {
  angular.module('inboxApp').component('toolbar', {
    templateUrl: '/public/js/toolbar/Toolbar.template.html',
    bindings: {
      messages: '='
    }
  })
})()
