$('#js-shopping-list-form button').on('click', event => {
    event.preventDefault();
    const list = $('.shopping-list');
    const newItem = $('#shopping-list-entry').val();
    (newItem) ? 
        list.append(`
            <li>
                <span class="shopping-item">${newItem}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>
        `) : alert("Please enter an item before before attempting to add.");
    $('#shopping-list-entry').val('');
});

$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
});

$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
    // The code below would change the text of the 'check' button to 'uncheck', when the item is checked off, and to 'check' if the item were unchecked:
    // $(this).closest('li').children('.shopping-item').hasClass('shopping-item__checked') ? $(this).children('.button-label').text('uncheck') : $(this).children('.button-label').text('check');
});

