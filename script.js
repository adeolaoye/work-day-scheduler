$(document).ready(function () { // once page loads perform 
    //display current day & time.
    var currentDay = $('#currentDay');
    currentDay.text(dayjs().format("D MMMM YYYY, h:mm:ss A"));

    //assign saveBtn click listener for user input and time stamp??
    var saveBtn = $(".saveBtn")
    saveBtn.on("click", function () {
      //get nearby values.
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      //set items in local storage.
      localStorage.setItem(time, text);
    });

    //load any saved data from LocalStorage - do this for each hour created. Should follow html 24 hour to 12 hour conversion.
    $("#timeBlockHour8 .description").val(localStorage.getItem("timeBlockHour8"));
    $("#timeBlockHour9 .description").val(localStorage.getItem("timeBlockHour9"));
    $("#timeBlockHour10 .description").val(localStorage.getItem("timeBlockHour10"));
    $("#timeBlockHour11 .description").val(localStorage.getItem("timeBlockHour11"));
    $("#timeBlockHour12 .description").val(localStorage.getItem("timeBlockHour12"));
    $("#timeBlockHour13 .description").val(localStorage.getItem("timeBlockHour13"));
    $("#timeBlockHour14 .description").val(localStorage.getItem("timeBlockHour14"));
    $("#timeBlockHour15 .description").val(localStorage.getItem("timeBlockHour15"));
    $("#timeBlockHour16 .description").val(localStorage.getItem("timeBlockHour16"));
    $("#timeBlockHour17 .description").val(localStorage.getItem("timeBlockHour17"));

    function hourTracker() {
      //get current number of hours.
      var currentHour = dayjs().hour();

      // loop over time blocks
      $(".time-block").each(function () {
        var timeBlockHour = parseInt($(this).attr("id").split("timeBlockHour")[1]);
        console.log(timeBlockHour, currentHour);

        //check if we've moved past this time, click into css/html given classes of past, present, or future
        if (timeBlockHour < currentHour) {
          $(this).addClass("past");
          $(this).removeClass("future");
          $(this).removeClass("present");
        } else if (timeBlockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
          $(this).removeClass("future");
        } else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
        }
      });
    }
    hourTracker(); //re-run function
  });