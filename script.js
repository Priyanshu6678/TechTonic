
  $(document).ready(function() {
    $('.show-password').click(function() {
      let passwordInput = $('#exampleInputPassword1');
      if (passwordInput.attr('type') === 'password') {
        passwordInput.attr('type', 'text');
        $(this).text('Hide');
      } else {
        passwordInput.attr('type', 'password');
        $(this).text('Show');
      }
    });
  });

