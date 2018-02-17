$(".logout").on("click", function(event) {

    Cookies.remove('name');
    $(".login").show();
    $(".logout").hide();
    location.assign("/");
});

$( document ).ready(function() {
 var cook = Cookies.get('name');

 $(".myposts").on("click", ()=>{
    location.assign("/myposts/"+cook);
 })

  $(".mycart").on("click", ()=>{
    location.assign("/mycart/"+cook);
 })

  $(".savedposts").on("click", ()=>{
    location.assign("/savedposts/"+cook);
 })
 
    var user = Cookies.get('name');

    $("#user").attr("value", user);

    if (cook === undefined) {

        $(".login").show();
        $(".logout").hide();
        $(".loginstuff").hide();
        $(".card-action").hide();
        $(".fixed-action-btn").hide();

        return false;
    }

    $(".welcome").html("Welcome to Folks, " + cook);
    $(".logout").show();
    $(".login").hide();
    $(".loginstuff").show();
    $(".card-action").show();
    $(".fixed-action-btn").show();
    $(".names").prepend(cook + "'s ")
});

   $(document).on("click", ".updatepost", ()=>{

    // alert($(this).data("id"));
    location.assign("/updatepost");
 })