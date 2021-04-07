$(document).ready(function(){


    populateTable()
    deleteMovie()
    putMovie()


    function populateTable(){
        $(".movieData").html("")
        $.get("https://localhost:5001/api/movie", function(data){
            console.log(data);

            $.each(data, function(index, el){
                $(".movieData").append(`<tr>
                        <td>${el.title}</td>
                        <td>${el.director}</td>
                        <td>${el.genre}</td>
                        <td><button onclick="editMovie(${el.movieId})" class="btn btn-warning">Edit This Movie</button></td>
                        <td><button onclick="deleteMovie(${el.movieId})" class="btn btn-danger">Delete This Movie</button></td>
                </tr>`)
            })
        })
    }

    $("#newMovBtn").on("click", function(e){
        let data = {
            Title: $($("#newForm")[0].Title).val(),
            Genre: $($("#newForm")[0].Genre).val(),
            Director: $($("#newForm")[0].Director).val(),
        }
        postToTable(data);
        $("newForm").trigger("reset");
        e.preventDefault();
    });

    function postToTable(data){
        $(".movieData").html('');
        $.ajax({
            url: "https://localhost:5001/api/movie",
            method: "POST",
            dataType: "JSON",
            data: data,
            success: function(data){
                console.log(data);
                populateTable()
            } 
        });
    }

    //  --------  NEED TO CREATE FOLLOWING EDIT FUNCTION ---------------

    function putMovie(id, data){
        $.ajax({
            url: "https://localhost:5001/api/movie" + id,
            method: "PUT",
            dataType: "JSON",
            data: data,
            success: function(data) {
                console.log(data);
                
            }
        })
    }

    function deleteMovie(id){
            $.ajax({
                url: "https://localhost:5001/api/movie" + id,
                type: "DELETE",
                success: function(data){
                    $(".movieData").remove(id);
                    console.log(data);
                    populateTable();
                }
        });
        }
});






