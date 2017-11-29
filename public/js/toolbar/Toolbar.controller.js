(function() {
  angular.module('inboxApp').controller('toolbar', toolbar)

  function toolbar() {
    this.selectedTotal = (mail) => {
      for (i=0, counter=0; i < mail.length; i++) {
        if (mail[i].selected === true) {
          counter++
        }
      }
      return counter
    }
  }
})()
