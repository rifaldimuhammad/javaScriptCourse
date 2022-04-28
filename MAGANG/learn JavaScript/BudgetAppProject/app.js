// BUDGET CONTROLLER
// var budgetController = (function () {
//    var x = 23;
//    var add = function (a) {
//      return x + a;
//    };
//    return {
//      publicTest: function (b) {
//        console.log(add(b));
//      },
//    };

// })();

// UI CONTROLLER
// var UIController = (function() {

// })();

// GLOBAL APP CONTROLLER
// var controller = (function(budgetCtrl,UICtrl ){

//  var z = budgetCtrl.publicTest(10);
//  return {
//      anotherPublic : function(){
//          console.log(z)
//      }
//  }

// document.querySelector('.add__btn').addEventListener('click' , function() {

// })

// })(budgetController, UIController);

//////////////////////////////////////////////////////////////////////////
//add event listener
//BUDGETCONTROLLER
var budgetController = (function () {
  var Expane = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allIncomes :{
        exp : [],
        inc : []
    },
    totalIncomes :{
        exp : 0,
        inc : 0
    }
  }
})();

//UICONTROLLER
var UIController = (function () {
  var DOMString = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMString.inputType).value,
        description: document.querySelector(DOMString.inputDescription).value,
        value: document.querySelector(DOMString.inputValue).value,
      };
    },

    getDOMStrings: function () {
      return DOMString;
    },
  };
})();

//GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
  var setupEventListener = function () {
    var DOM = UICtrl.getDOMStrings();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function () {
    //1. Get the filed input data
    var input = UICtrl.getInput();

    //2. add the item to the buddget controller

    //3. add the item to the UI

    //4. calculated the budget

    //5. Display the budget to the UI
  };

  return {
    init: function () {
      console.log('application has started');
      setupEventListener();
    },
  };
})(budgetController, UIController);

controller.init();
