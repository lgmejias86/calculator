define(["dojo/dom-construct", "dijit/form/Button", "dojo/domReady!"],
    function(domConstruct, Button){
       	return{
	        createButton: function(parent){

	        	var arrayButtons = [{id:"ac", text:"AC"}, {id:"ce", text:"CE"}, {id: "mod", text: "%"}, 
                {id: "div", text: "/"}, {id: "num7", text: "7"}, {id: "num8", text: "8"} , {id: "num9", text: "9"},
                {id: "mul", text: "*"}, {id: "num4", text: "4"}, {id: "num5", text: "5"}, {id: "num6", text: "6"},
                {id: "sub", text: "-"}, {id: "num1", text: "1"}, {id: "num2", text: "2"}, {id: "num3", text: "3"},
                {id: "add", text: "+"}, {id: "point", text: "."}, {id: "num0", text: "0"}, {id: "ans", text: "Ans"},
                {id: "answer", text: "="}];

                for (var i = 0; i < arrayButtons.length; i++) {
                    var input = domConstruct.create("button", {id: arrayButtons[i].id, innerHTML: ""}, parent);
                
                    var button = new Button({
                        label: arrayButtons[i].text,
                    }, input);
                    button.startup();
                    };
		    }
        }
});