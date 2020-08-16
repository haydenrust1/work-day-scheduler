$(document).ready(function () {
  //jquery selectors
  var timeBlock = $('.time-block');
  var saveButton = $('.saveBtn');
  var userInput = $('.description');

  //   console.log(timeBlock);

  //event listener for save button
  saveButton.on('click', function () {
    var hour = $(this).parent().data('time');
    var userDescription = $(this).siblings('.description').val();
    console.log(hour);

    //saves users input
    localStorage.setItem(hour, userDescription);
  });

  //Display current day and date
  $('#currentDay').text(moment().format('dddd, MMMM Do'));

  //storing current whole hour
  var currentHour = moment().hours();
  //   console.log(currentHour);

  //cycle through each time block to make either past, present, future
  timeBlock.each(function () {
    var timeBlockHour = timeBlock.data('time');

    // console.log(timeBlockHour);

    if (timeBlockHour < currentHour) {
      $(this).addClass('past');
    } else if (timeBlockHour > currentHour) {
      $(this).addClass('future');
    } else if (timeBlockHour === currentHour) {
      $(this).addClass('present');
    }
  });

  var hourTimeBlock = timeBlock.data('time');
  console.log(hourTimeBlock);

  //load user input
  $('#9').val(localStorage.getItem('9'));
});
