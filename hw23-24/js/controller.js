define(
	'controller',
	['jquery', 'model', 'view'],
	

	function(){
		return{
			Controller:function(model,view){
				var self = this;
				view.elements.addBtn.on('click', addItem);
				view.elements.listContainer.on('click', '.item-delete', removeItem);

				view.elements.listContainer.on('click', '.list-item', renameItem);

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









