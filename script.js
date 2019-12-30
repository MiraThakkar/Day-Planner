var currentDateTime = moment().format("dddd, MMM DD YYYY");
var calender = $("#calender");
var saveBtn = $(".input-group-append");
var calenderEl = $(".calendar");
var lableArray = $("lable");
var inputArray = $("input");
var timeEl = parseInt(moment().format('HH'), 10);
var storedDateTime = localStorage.getItem("Date");



var i = 0;

console.log(timeEl);


/*console.log(lableArray.text());*/

$("#day").text(currentDateTime);


lableArray.each(function () {
    var lable = $(this).text();
    var lableValue = lable.substring(0, 2);
    var lableId = parseInt($(this).attr('id'),10);

    //code block to color code event based on past current and future time
    if(lableId >timeEl){
        $(this).next().addClass("future");
    }else if (lableId < timeEl){
        $(this).next().addClass("past");
    }else {
        $(this).next().addClass("current");
 
    }// ends here


    //----------------code block to get event value from local storage---------------------------
    if(currentDateTime == storedDateTime){
        var inputText = localStorage.getItem(lable);
        if (inputText == null){
            inputText ="";
        }
        inputArray[i].value = inputText;
        i++;
        console.log("Same as current date");
    }else{
        console.log("Not same as current date");
        //clear local storage
        localStorage.clear();
        localStorage.setItem("Date", currentDateTime);
    }
    
   
})

saveBtn.on("click", function (e){
   var inputText = $(this).prev().val();
   var timeLbl = $(this).prev().prev().text();
   localStorage.setItem(timeLbl, inputText);
});


