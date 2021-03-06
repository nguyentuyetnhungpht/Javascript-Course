var budgetController = (function(){

    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItem: {
            exp:[],
            inc:[],
        },
        totalItem: {
            exp: 0,
            inc: 0,
        }
    }

})();

var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function(){
            return{
                type: document.querySelector(DOMstrings.inputType).value, //inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
        },
        
        //expose Domstring to public
        getDOMString: function(){
            return DOMstrings;
        }
    };
})();

var controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners = function (){

        var DOM = UICtrl.getDOMString();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){
            if (event.keyCode === 13 || event.which === 13) {
               ctrlAddItem();
            }
        });
    }
    
    
    var ctrlAddItem = function(){
        // 1. Get the field input data from the
        var input = UICtrl.getInput();

        // 2. Add the item to the budget

        // 3. Add the item to the UI

        // 4. calculate the budget

        // 5. Display the budget on the UI

    };

    return {
        init: function(){
            console.log('Application has started');
            setupEventListeners();
        }
    }

  
})(budgetController, UIController);

controller.init();