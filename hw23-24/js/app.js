requirejs.config({
	
	

    paths:{
		'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery'
	},
    
	shim:{
		'jquery':{
			exports:'jQuery'
		}
	},
	
});

require(
	[
	
	'jquery',
	'model',
	'view',
	'controller'
	],
	
	
	function ($,model,view,controller) {
		$(function(){
			var firstToDoList = ['test1','test2','test3'];
			//console.log(model.Model);
			//console.log(view.View);
			//console.log(controller.Controller);


			var mvcmodel = model.Model(firstToDoList);
			var mvcview = view.View(model);
			var mvccontroller = controller.Controller(model,view);
			
		});
	}
	

);


