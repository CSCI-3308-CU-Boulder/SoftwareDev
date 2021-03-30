


function makeApiCall() {
    
    var n_images = document.getElementById("num_image").value;
    var s_search = document.getElementById("s_search").value;

    var url =`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6eb72426055e5101982de0409661e828&tags=${s_search}&privacy_filter=1&safe_search=1&extras=url_sq&page=index.html&format=json&nojsoncallback=1`;
    $.ajax({url:url, dataType:"json"}).then(function(data) {
      console.log(data);
      var img = "";

      for(var i = 0; i < n_images; i++){
        img = "<div class='card' style='width:200px'>"+ "<div class='card-body'>" +
                      "<img class='card-img' src='"+data.photos.photo[i].url_sq+"' alt='image'>"+
                        "<h5 class ='card-title'> "+ data.photos.photo[i].title+"</h5>"+"</div>"+"</div>";
        document.getElementById("images").innerHTML += img;
      }
    })
  };


window.onscroll = function(ev) {

    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
      makeApiCall();
    }

  }