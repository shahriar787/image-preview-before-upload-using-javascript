function preview_upload_image(){
    $('#preview-post-img').html("");
    var total_file=document.getElementById("featured_image").files.length;
    for(var i=0;i<total_file;i++){
     $('#preview-post-img').append("<img src='"+URL.createObjectURL(event.target.files[i])+"'>");
    }
 }