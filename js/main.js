$(document).ready(function () {
 
  $('#filter_button_close').click(function () {
    $(this).parents('.dental_plans_filter').find('.toggle_filter_content').css("display", "none");
    $(this).parents('.dental_plans_filter').find('#filter_button_open').css("display", "block");
    $(this).parents('.toggle_filter').css("display", "none");
    
  });
  $('#filter_button_open').click(function () {
    $(this).parents('.dental_plans_filter').find('.toggle_filter_content').css("display", "block");
    $(this).css("display", "none");
    $(this).parents('.dental_plans_filter').find(".toggle_filter").css("display", "flex");
    
  });
});