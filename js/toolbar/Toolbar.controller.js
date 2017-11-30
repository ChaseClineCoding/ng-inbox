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

    this.selectAll = (mail) => {
      let selected = mail.filter(message => message.selected === true)
        if (mail.length === selected.length) {
          mail.map(message => message.selected = false)
        } else {
          mail.map(message => message.selected = true)
        }
    }
  }
})()
