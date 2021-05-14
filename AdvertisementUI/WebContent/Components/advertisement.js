$(document).ready(function()
{
if ($("#alertSuccess").text().trim() == "")
 {
 $("#alertSuccess").hide();
 }
 $("#alertError").hide();
});
// SAVE BUTTON ============================================

$(document).on("click", "#btnSave", function (event) {
    // Clear Status
    $("#alertSuccess").text("");
    $("#alertSuccess").hide();
    $("#alertError").text("");
    $("#alertError").hide();
    
    // Form validation----------------
    var status = validateAdvertisementForm();
    
    // If not valid-------------------
    
    if (status != true) {
        $("#alertError").text(status);
        $("#alertError").show();
        return;
    }
    // If valid----------------------
    //RECHECK
    
       
      	 var type = ($("#hidItemIDSave").val() == "") ? "POST" : "PUT";
      	$.ajax(
		 {
		 url : "advertisementAPI",
		 type : type,
		 data : $("#Form_Advertisement").serialize(),
		 dataType : "text",
		 complete : function(response, status)
		 {
		 onItemSaveComplete(response.responseText, status);
		 }
 });
   		
});


// UPDATE==========================================
	$(document).on("click", ".btnUpdate", function(event)
	{
		 $("#hidAddIDSave").val($(this).data("Add_ID"));
		 $("#hidAddIDSave").val($(this).closest("tr").find('#hidAddIDUpdate').val());
		 $("#AddType").val($(this).closest("tr").find('td:eq(0)').text());
		 $("#Add_Title").val($(this).closest("tr").find('td:eq(1)').text());
		 $("#Add_Desc").val($(this).closest("tr").find('td:eq(2)').text());
		 
	}); 

// CLIENT-MODEL=================================================================

function validateAdvertisementForm() {
 //advertisement type
    if ($("#AddType").val().trim() == "") {
        return "Insert Advertisement Type.";
    }
	if ($("#AddTitle").val().trim() == "") {
        return "Insert Advertisement Title.";
    }
	if ($("#AddDesc").val().trim() == "") {
        return "Insert Description.";
    }
    return true;
}

function onItemSaveComplete(response, status)
{
	if (status == "success")
 	{
		 var resultSet = JSON.parse(response);
		 if (resultSet.status.trim() == "success")
		 {
			 $("#alertSuccess").text("Successfully saved.");
			 $("#alertSuccess").show();
			 $("#addGrid").html(resultSet.data);
		 } else if (resultSet.status.trim() == "error")
		 {
			 $("#alertError").text(resultSet.data);
			 $("#alertError").show();
		 }
		 } else if (status == "error")
		 {
			 $("#alertError").text("Error while saving.");
			 $("#alertError").show();
		 } else
		 {
			 $("#alertError").text("Unknown error while saving..");
			 $("#alertError").show();
}
		("#hidItemIDSave").val("");
		 $("#formItem")[0].reset(); 
		 

}

$(document).on("click", ".btnRemove", function(event)
{
	 $.ajax(
	 {
		 url : "Advertisement",
		 type : "DELETE",
		 data : "Add_ID=" + $(this).data("Add_ID"),
		 dataType : "text",
		 complete : function(response, status)
	 {
	 onItemDeleteComplete(response.responseText, status);
	 }
	 });
});

function onItemDeleteComplete(response, status)
{
	if (status == "success")
	 {
		 var resultSet = JSON.parse(response);
		 if (resultSet.status.trim() == "success")
		 {
			 $("#alertSuccess").text("Successfully deleted.");
			 $("#alertSuccess").show();
		 	$("#divItemsGrid").html(resultSet.data);
		 } else if (resultSet.status.trim() == "error")
		 {
			 $("#alertError").text(resultSet.data);
			 $("#alertError").show();
		 }
		 } else if (status == "error")
		 {
			 $("#alertError").text("Error while deleting.");
			 $("#alertError").show();
		 } else
		 {
			 $("#alertError").text("Unknown error while deleting..");
			 $("#alertError").show();
	 }
}






