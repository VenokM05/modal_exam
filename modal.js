/* js code */
$(document).ready(function() {
    // Cancell Modal
    $("#cancelBtn").click(function() {
        $("#mySubcription").modal({ backdrop: "static" });
    });
});

$(document).ready(function() {
    // Show Success message
    $("#yesBtn").click(function() {
        $("#successMessage").show();
        $("#Btn2").show();
        $("#cancelMessage").hide();
        $("#noBtn").hide();
        $("#Btn1").hide();
        // Automatic Close modal
        setTimeout(function() {
            $('#mySubcription').modal('hide');
        }, 2000);
    });
});