$(document).ready(function () {
  //jquery selectors
  var timeBlock = $('.time-block');
  //   console.log(timeBlock);

  //Display current day and date
  $('#currentDay').text(moment().format('dddd, MMMM Do'));

  //storing current whole hour
  var currentHour = moment().hours();
  console.log(currentHour);

  //cycle through each time block to make either past, present, future
  timeBlock.each(function () {
    var timeBlockHour = $(this).data('time');
    console.log(timeBlockHour);

    if (timeBlockHour < currentHour) {
      $(this).addClass('past');
    } else if (timeBlockHour > currentHour) {
      $(this).addClass('future');
    } else if (timeBlockHour === currentHour) {
      $(this).addClass('present');
    }
  });
});
