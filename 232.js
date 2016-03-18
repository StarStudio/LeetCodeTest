function Queue() {
  var stackPush = [],
      stackPop = []

  this.push = function(newNum) {
    stackPush.push(newNum)
  }

  this.pop = function() {
    if(stackPop.length === 0 && stackPush.length === 0) {
      throw new Error('Queue is empty!')
    } else if(stackPop.length === 0) {
      while(stackPush.length !== 0) {
        stackPop.push(stackPush.pop())
      }
    }
    return stackPop.pop()
  }

  this.peek = function() {
    if(stackPop.length === 0 && stackPush.length === 0) {
      throw new Error('Queue is empty!')
    } else if(stackPop.length === 0) {
      while(stackPush.length !== 0) {
        stackPop.push(stackPush.pop())
      }
    }
    return stackPop[stackPop.length - 1]
  }

  this.empty = function() {
    return stackPop.length === 0 && stackPush.length === 0
  }
}
