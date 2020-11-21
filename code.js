//particles 

window.onload = function() {
    Particles.init({
      selector: '.background',
      connectParticles: 'true',
      color: ['#58419e', '#404B69', '#DBEDF3'],
      speed: '1',
      minDistance: '50',
      maxParticles: '60',
  
      responsive: [
      {
        breakpoint: 1920,
        options: {
          maxParticles: 120,
        }
      }, {
        breakpoint: 2560,
        options: {
          maxParticles: 180,
        }
      }
    ]
    });
  };
  
  //mobile
  
  var meta = document.createElement('meta');
  meta.name = 'viewport';
  meta.content = 'width=device-width,height='+window.innerHeight+', initial-scale=1.0';
  document.getElementsByTagName('head')[0].appendChild(meta);
  
  //send email
  
  $( document ).ready(function() {
    $("#button").click(function(e) {
        e.preventDefault();
    var email = $("#email").val(); 

    //check value
    if (email === "" || email === "wpisz swój e-mail") {
        Swal.fire({
            title: 'Wpisz poprawny adres e-mail',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: "#ce335d",
            iconColor: "#ce335d"
          })
        return false;
    };

    //validation
        let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
            Swal.fire({
                title: 'Wpisz poprawny adres e-mail',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: "#ce335d",
                iconColor: "#ce335d"
              })
           return false;
        };
     
    var dataString = 'name=' + email;
    $.ajax({
      type: 'POST',
      data: dataString,
      url: '/email.php',
      success:function() {
        $(".popup").css("display", "flex");
   $(".bgc-gray").css("display", "block");
      }
    });

  });
  
  $(".close").click(function(){
    $(".popup").hide();
    $(".bgc-gray").css("display", "none");
  })
  
  });



