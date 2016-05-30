define(
	'controller',
	['jquery', 'model', 'view'],
	

	function(){
		return{
			Controller:function(model,view){
				var self = this;
				//console.log(model);
				console.log(view.elements.listContainer);

				document.querySelector('.item-add').onclick = function(){
					addItem();
				}
				
				view.elements.listContainer.delegate('.item-delete', 'click', removeItem);
				view.elements.listContainer.delegate('.list-item', 'click', renameItem);
					

				function addItem(){
					var newItem = view.elements.input.val();
					model.addItem(newItem);
					view.renderList(model.data);
					view.elements.input.val('');
				}



				function removeItemObj(obj){
					console.log(obj);
					var item =  obj.attr('data-value');
					model.removeItem(item);
					view.renderList(model.data);
				}


				function removeItem(){
					
					var item =  $(this).attr('data-value');
					model.removeItem(item);
					view.renderList(model.data);
				}

				function renameItem(){
					var elem =  $(this).html();
					var elemIndex = $(this)

					console.log(elemIndex);
					model.renameItem(elem);
					view.renderList(model.data);
				}
			}
		}

});









