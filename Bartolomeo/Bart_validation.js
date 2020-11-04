$().ready(function() {


  $("form[name='registration']").validate({
     // Specify validation rules
     rules: {
       FirstName: {
           required:true, 
           maxlength: 50
           },
       LastName: {
           required:true, 
           maxlength: 50
       },
       CompanyName: {
           required:true, 
           maxlength: 50
       },
       EmailAddress: {
         required: true,
         email: true,
         maxlength: 50
       }
       ,
       cbxConsent: {
         required: true
       }
     },
     // Specify validation error messages
     messages: {
           FirstName: {
                   required: "Please provide your first name",
                   maxlength: "Name can not be greater than 50 characters"
                 },
           LastName: {
                   required: "Please provide your last name",
                   maxlength: "Name can not be greater than 50 characters"
                 },
           CompanyName: {
                   required: "Please provide your company  name",
                   maxlength: "Name can not be greater than 50 characters"
           },
           cbxConsent: {
                   required: "You need to consent to the Usage Policy",
 
           },
   
           EmailAddress: "Please enter a valid email address"
     },
     // Make sure the form is submitted to the destination defined
     // in the "action" attribute of the form when valid
     submitHandler: function(form) {
 
       form.submit();
     }
   });
 });