var calcController = function calcController() {
    var self = this;
    self.resultValue = 0;
    self.buttonClicked = function(button) {
        self.selectedOperation = button;
    }
    self.computeResult = function() {
        var number1 = parseFloat(self.input1);
        var number2 = parseFloat(self.input2);
        if (self.selectedOperation === '+') {
            this.resultValue = number1 + number2;
        } else if (self.selectedOperation === '-') {
            this.resultValue = number1number2;
        } else if (self.selectedOperation === '*') {
            this.resultValue = number1 * number2;
        } else if (self.selectedOperation === '/') {
            this.resultValue = number1 / number2;
        }
    }
}
angular
    .module('myApp')
    .controller('calcController', calcController);
