
(function ($) {
    // add to cart button event - product tile
    $('.js-add-to-cart').on('click', (e) => {
        const data = {
            product_id: $(e.target).parent().closest('.product').data('id')
        };

        $.post('/cart/add', data).done(function(response){
            if (response.success) {
                swal(response.productName, "is added to cart !", "success");
                $('.js-show-cart')
                    .attr('data-notify', response.cartItemsCount)
                    .removeClass('icon-header-noti')
                    .addClass('icon-header-noti');
            }
        });
    });
})(jQuery);
