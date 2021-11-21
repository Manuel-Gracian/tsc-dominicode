"use strict";
var Utility;
(function (Utility) {
    var Taxes;
    (function (Taxes) {
        function Calculate_Tax(price) {
            return price * 0.21 + price;
        }
        Taxes.Calculate_Tax = Calculate_Tax;
        function Calculate_Penalty_Tax(price) {
            return price * 0.3 + price;
        }
        Taxes.Calculate_Penalty_Tax = Calculate_Penalty_Tax;
    })(Taxes = Utility.Taxes || (Utility.Taxes = {}));
})(Utility || (Utility = {}));
/// <reference path="utility.ts" />
var util = Utility.Taxes;
console.log(util.Calculate_Tax(100));
console.log(util.Calculate_Penalty_Tax(200));
