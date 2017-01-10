var keycloak = Keycloak({
    url: 'https://accounts.ulock.co/auth',
    realm: 'ulock',
    clientId: 'website'
});

keycloak.init().success(function(authenticated) {
        }).error(function() {
        });

$('#registrer_form').submit(function() {
    var data = $("#registrer_form #email_intro").val();
    var options = {
      redirectUri: 'https://app.ulock.co/',
      loginHint : data
    };
    keycloak.login(options);
    return false;  // <- cancel event
});
