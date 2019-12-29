var currentDateTime = moment().format("dddd, MMM DD YYYY");
var calender = $("#calender");
var saveBtn = $(".input-group-append");
var calenderEl = $(".calendar");
var lableArray = $("lable");
var inputArray = $("input");
var i = 0;

$("#day").text(currentDateTime);

lableArray.each(function () {
    var lable = $(this).text();
    var inputText = localStorage.getItem(lable);
    if (inputText == null){
        inputText ="";
    }
    inputArray[i].value = inputText;
    i++;
})

saveBtn.on("click", function (e){
   var inputText = $(this).prev().val();
   var timeLbl = $(this).prev().prev().text();
   localStorage.setItem(timeLbl, inputText);
});


