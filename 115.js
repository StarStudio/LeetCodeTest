function MinStack() {
  var stackData = [],
      stackMin = []

  this.push = function(newNum) {
    if(stackMin.length === 0 || newNum < this.getMin()) {
      stackMin.push(newNum)
    } else {
      var newMin = this.getMin()
      stackMin.push(newMin)
    }
    stackData.push(newNum)
  }

  this.pop = function() {
    if(stackData.length === 0) {
      throw new Error('Your stack is empty.')
    }
    stackMin.pop()
    return stackData.pop()
  }

  this.getMin = function() {
    var len = stackMin.length
    if(len === 0) {
      throw new Error('Your stack is empty.')
    }
    return stackMin[len - 1]
  }

  this.top = function() {
      return stackData[stackData.length - 1]
  }
}
