<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

       
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Advertisement Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
	<script src="Components/jquery-3.2.1.min.js"></script>
	<script src="Components/advertisement.js"></script>
</head>
<body>
	<div class="container">
			<div class="row">
				<div class="col-8"  >
					<h1 class="m-3">Advertisement Details</h1>
					<form id="Form_Advertisement">
						
						<!-- ENTER ADVERTICEMENT TYPE -->
						<div class="input-group input-group-sm mb-3" >
							<div class="input-group-prepend">
								<span class="input-group-text" id="Add_Type">Advertisement Type : </span>
							</div>
							<input type="text" id="AddType" name="txtName">
							
						</div>
						<!-- Advertisement Title -->
						<div class="input-group input-group-sm mb-3">
							<div class="input-group-prepend">
								<span class="input-group-text" id="Add_Title">Advertisement Title : </span>
							</div>
							<input type="text" id="AddTitle" name="txtName">
						</div>
							<!-- Advertisement Description -->
						<div class="input-group input-group-sm mb-3">
							<div class="input-group-prepend">
								<span class="input-group-text" id="Add_Desc">Advertisement Description : </span>
							</div>
							<input type="text" id="AddDesc" name="txtName">
						</div>
						<!-- Advertisement Image -->
						<div class="input-group input-group-sm mb-3">
							<div class="input-group-prepend">
								<span class="input-group-text" id="Add_Desc">Choose Image  </span>
							</div>
								<input type = "file">
							</div>
							
							<!-- Success or Unsuccess message-->
							
							<div id="alertSuccess" class="alert alert-success"></div>
 							<div id="alertError" class="alert alert-danger"></div>
 							<div>
 							<input type="button" id="btnSave" value="Save" class="btn btn-primary">
 							</div>
 							<br>
 							<div id = "addGrid">
 								<%
 								Adverticement AddverticementObject = new Adverticement();
								 out.print(AddverticementObject.readAdverticement());
								 %>
 							</div>
					</form>
					</div>
				
		</div>
	</div>
	
	<br>
	
		<div class="row">
			<div class="col-12" id="colAdvertisement"></div>
		</div>

		
</body>
</html>
