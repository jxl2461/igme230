$(".top").click(function () {
    $(this).next(".list").slideToggle();
});

let verse = ("article.txt") // sets default verse element
$("#radio").val(verse); // changes menu option to default
$("article").load(verse); // retrieves only default element

$("#radio").change(function () {
    verse = $(this).val();
    $("article").load(verse);
});
