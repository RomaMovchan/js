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
				view.elements.listContainer.delegate('.list-item', 'click', updateItem);
					

				function addItem(){
					var newItem = view.elements.input.val();
					model.addItem(newItem);
					view.renderList(model.data);
					view.elements.input.val('');
				}

				function removeItem(){
				
					var item =  $(this).attr('data-value');
					model.removeItem(item);
					view.renderList(model.data);
				}

				function updateItem() {
					for (var i = 0; i < model.data.length; i++) {
						console.log(model.data);
						var arr = $('.list-item');
						if (arr[i].innerHTML === model.data[i]) {
							return;
						} else {
							model.data[i] = arr[i].innerHTML;
						}
					}
				}
			}
		}

});









