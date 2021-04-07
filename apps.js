
$(function(){
    // $.ajax({
    //     url: "https://localhost:5001/api/movie",
    //     type: "GET",
    //     dataType:"JSON",
    //     success: function(data){
    //         console.log(data);
    //     },
    //     error: function(err){
    //         console.log(err)
    //     }
    // })
    populateTable()

    
})

function populateTable(){
    $(".movieData").html("")
    $.get("https://localhost:5001/api/movie", function(data){
        console.log(data);

        $.each(data, function(index, el){
            $(".movieData").append(`<tr>
                    <td>${el.title}</td>
                    <td>${el.director}</td>
                    <td>${el.genre}</td>
                    <td><button type="button" class="btn btn-warning">Edit An Existing Movie</button></td>
                    <td><button type="button" class="btn btn-danger">Delete A Movie</button></td>
            </tr>`)
        })
        //  for(let i = 0; i < data.length;i++){
        //      $("#movies").append(`<div><div>Title: ${data[i].title}</div>
        //      <div>Director: ${data[i].director}</div>
        //     <div>Genre: ${data[i].genre}</div>
        //      </div><br>`)
        //  }

        //$("#movies").html(JSON.stringify(data))
    }).fail(function(err){
        console.log(err)
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


// function Add(){
//     $(".movieData").html("")
//     $.get("https://localhost:5001/api/movie", function(data){
//         console.log(data);

//     $(".movieData").append(
//         "<tr>"+
//         "<td><input type='text'/></td>"+
//         "<td><input type='text'/></td>"+
//         "<td><input type='text'/></td></tr>"
        
//         );
//         $("addBtn").bind("click", Save);
        
//     }
//     )}

// function postToList(){
//     $(".movieData").html("")
//     $.put("https://localhost:5001/api/movie", function(data){
//         console.log

//         $.each(data, function(){

//         })
//     })
// }

// $(function makePutrequest(){
//      $.ajax({
//          url: "https://localhost:5001/api/movie",
//          type: "PUT",
//          dataType:"JSON",
//          success: function(result){
//              console.log(result);
//          },
//         error: function(err){
//             console.log(err)
//         }
//     })
// }

// function editMovie(id){
//  console.log(id);
// }

