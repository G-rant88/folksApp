$(document).ready(function() {
  $('select').material_select();

  $.validator.setDefaults({
    ignore: []
  });

  $("#newPost").validate({
    rules: {
      item: {
        required: true,
        minlength: 1
      },
      desc: {
        required: true,
        minlength: 1
      },
      pricepoint: {
        required: true,
      },
      upload: {
        required: true,
    }
  },
    //For custom messages
    messages: {
      item: {
        required: "Enter an Item",
        minlength: "Enter at least 5 characters"
      },
      desc: {
        required: "Enter a Description",
        minlength: "Enter at least 5 characters"
      },
      pricepoint: {
        required: "Enter a Price"
      },
      upload: {
        required: "Please upload a file"
      },
    },
    errorElement: 'div',
    errorPlacement: function(error, element) {
      var placement = $(element).data('error');
      if (placement) {
        $(placement).append(error)
      } else {
        error.insertAfter(element);
      }
    }
  });

});

