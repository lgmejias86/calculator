define(["dojo/dom", "dojo/on", "dojo/query", "dojo/domReady!"],
    function(dom, on, query){
       	return{
	        createEvents: function(){
                var buttons = query("button");
                var screenCallc = dom.byId("screnCalc");

                buttons.on("click", function(){
                    screenCalc.innerHTML = this.innerHTML;
                });
		    }
        }
});