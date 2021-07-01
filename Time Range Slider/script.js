$(document).ready(function(){

    addSliders()
      });


function addSliders(){
    $(".slider-range").each(function(){
        let timeRangeId = $(this).attr('id');
        $(this).slider({
            range: true,
            min: 0,
            max: 1440,
            step: 15,
            values: [600, 720],
            slide: function (e, ui) {
                console.log("#"+timeRangeId+"");
                var hours1 = Math.floor(ui.values[0] / 60);
                var minutes1 = ui.values[0] - (hours1 * 60);
                if (hours1.length == 1) hours1 = '0' + hours1;
                if (minutes1.length == 1) minutes1 = '0' + minutes1;
                if (minutes1 == 0) minutes1 = '00';
                if (hours1 >= 12) {
                    if (hours1 == 12) {
                        hours1 = hours1;
                        minutes1 = minutes1 + " PM";
                    } else {
                        hours1 = hours1 - 12;
                        minutes1 = minutes1 + " PM";
                    }
                } else {
                    hours1 = hours1;
                    minutes1 = minutes1 + " AM";
                }
                if (hours1 == 0) {
                    hours1 = 12;
                    minutes1 = minutes1;
                }
                //$('.slider-time').html(hours1 + ':' + minutes1);
                $(this).parent().children().find("span")[0].innerHTML = hours1 + ':' + minutes1;
                var hours2 = Math.floor(ui.values[1] / 60);
                var minutes2 = ui.values[1] - (hours2 * 60);

                if (hours2.length == 1) hours2 = '0' + hours2;
                if (minutes2.length == 1) minutes2 = '0' + minutes2;
                if (minutes2 == 0) minutes2 = '00';
                if (hours2 >= 12) {
                    if (hours2 == 12) {
                        hours2 = hours2;
                        minutes2 = minutes2 + " PM";
                    } else if (hours2 == 24) {
                        hours2 = 11;
                        minutes2 = "59 PM";
                    } else {
                        hours2 = hours2 - 12;
                        minutes2 = minutes2 + " PM";
                    }
                } else {
                    hours2 = hours2;
                    minutes2 = minutes2 + " AM";
                }
                //$('.slider-time2').html(hours2 + ':' + minutes2);
           $(this).parent().children().find("span")[1].innerHTML = hours2 + ':' + minutes2;
            }
        });
     });
}
    $(".addMoreIcon").each(function(){
            $(this).click(function(){
                $(this).parent().parent().parent().append(addRow())
                addSliders()
                removeMoreSlots()
      });
    })
function removeMoreSlots(){
    $(".removeMoreIcon").each(function(){
            $(this).click(function(){
                $(this).parent().parent().remove()
                console.log($(this).parent().parent().remove())
                addSliders()
      });
    })
}
removeMoreSlots()
    function addRow() {
    return`
            <div class="d-flex align-items-end justify-content-around w-100 ">
            <div class="p-2">
            <div class="time-range">
                <p><span class="1">9:00 AM</span> - <span class="1">5:00 PM</span></p>
                <div  class="slider-range " id="slider-range4"></div>
            </div>
                </div>
            <div class="">
                <span class="removeMoreIcon"><i class="fas fa-minus"></i></span>
            </div>
        </div>
  `
}
function removeRow(input) {
  document.getElementById('content').removeChild(input.parentNode);
}