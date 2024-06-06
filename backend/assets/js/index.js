$("#add_user").submit(function(event){
    alert("Dodano!")
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array=$(this).serializeArray();
    var data={}

    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']
    })
    console.log(data);

    var request={
        "url": "http://localhost:3000/api/users/" + data.id,
        "method":"PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
        location.href = "/";
        alert("Zaktualizowano")
    })
})

if (window.location.pathname === "/") {
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id");

        var request = {
            "url": `http://localhost:3000/api/users/${id}`, // Use backticks for URL
            "method": "DELETE"
        };

        if (confirm("Na pewno chcesz usunac?")) {
            $.ajax(request).done(function(response) {
                alert("Usunieto");
                location.reload();
            });
        }
    });
}
