var loaderImage = "<div class='progress'>"+
  "<div class='progress-bar progress-bar-striped active' role=progressbar aria-valuenow='100' aria-valuemin='0' aria-valuemax='100' style='width: 100%'>"+
    "<span class='sr-only'></span>"+
  "</div>"+
"</div>";


$(document).ready(function(){
    
    //ScrollToTop fadein when >100px
    //ScrollToTop fadeout when <100px
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //function to scroll the page to the top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    //applying loading images from bootstrap to data GETs
    $('#articles').html(loaderImage);
    $('#extra').html(loaderImage);

    //XML ACTIONS
    //read XML: ARTICLES & BOOKS
	/*
    $.ajax({
        type: "GET",
        url: "data/articles.xml",
        dataType: "xml",
        success: function(xml){
            var content = "";
            $(xml).find('article').each(function(){
                
                var topic = $(this).find('topic').text();
                var text = $(this).find('text').text();
                var link = $(this).find('href').text();
                var wrapperStart = "<div class='col-xs-12 col-sm-6 col-lg-4'>";
                var wrapperEnd = "</div>";
                
                //topic
                content += wrapperStart;
                content += "<a href='"+link+"' target='_blank'><h3>";
                content += topic;
                content += '</h3></a>';
                //text
                content += "<p>";
                content += text;
                content += '</p>';
                content += wrapperEnd;
                //link
                
                $('#articles').html(content).appendTo('#articles');
            });
        },
        faíl: $('#articles').html("<div class='alert alert-danger'><strong>Error!</strong> An error occured and no data was found!</div>")
    });

    //read XML: EXTRA RESOURCES
    $.ajax({
        type: "GET",
        url: "data/extra_resources.xml",
        dataType: "xml",
        success: function(xml){
            var content = "";
            $(xml).find('content').each(function(){
                
                var name = $(this).find('name').text();
                var link = $(this).find('href').text();
                var linktext = $(this).find('linktext').text();
                
                content += "<tr>";
                content += "<td>" + name + "</td>";
                content += "<td><a href='"+ link +"' target='_blank'>"+ linktext +"</a></td>";
                content += "</tr>";
                
                $('#extra').html(content).appendTo('#extra');
            });
        },
        fail: $('#extra').html("<tr class='danger'><td>N/A</td><td>N/A</td></tr>")
    });
	*/

});



//function to scroll to the specified id
function scrollToId(inId){
    var id = "#";
    id += inId;
    $('html,body').animate({
            scrollTop: $(id).offset().top -60
    }, 1000);
}
