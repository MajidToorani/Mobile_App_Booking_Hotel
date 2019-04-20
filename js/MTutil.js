/**
 * File Name: MTutil.js
 *
 * Revision History:
 *       Majid Tooranisama, 2019-04-14 : Created
 */

function GetOverallRating(quality, service, value) {
    var averageRating = (quality + service + value) * 100/15;
    return averageRating.toFixed(2);
}

function DoValidate_MTAddForm(){
    var form = $("#MTAddForm");
    form.validate({
        rules:{
            MTName:{
                required: true,
                rangelength:[2,20]
            },
            MTEmail:{
                required: true,
                AddEmailCheck:true
            },
            MTReviewDate:{
                required:true
            },
            MTFoodRating:{
                AddNumberCheck:true
            },
            MTServiceRating:{
                AddNumberCheck:true
            },
            MTValueRating:{
                AddNumberCheck:true
            }
        },
        messages:{
            MTName:{
                required: "Name is required",
                rangelength:"Length must be 2-20 characters long"
            },
            MTEmail:{
                required: "Email is required",
                AddEmailCheck:"Please enter a valid email address"
            },
            MTReviewDate:{
                required:"Booking date is required"
            },
            MTFoodRating:{
                AddNumberCheck:"Value must be 0-5"
            },
            MTServiceRating:{
                AddNumberCheck:"Value must be 0-5"
            },
            MTValueRating:{
                AddNumberCheck:"Value must be 0-5"
            }
        }
    });
    return form.valid();
}

function DoValidate_MTModifyForm(){
    var form = $("#MTModifyForm");
    form.validate({
        rules:{
            MTModifyName:{
                required: true,
                rangelength:[2,20]
            },
            MTModifyEmail:{
                required: true,
                ModifyEmailCheck:true
            },
            MTModifyReviewDate:{
                required:true
            },
            MTModifyFoodRating:{
                ModifyNumberCheck:true
            },
            MTModifyServiceRating:{
                ModifyNumberCheck:true
            },
            MTModifyValueRating:{
                ModifyNumberCheck:true
            }
        },
        messages:{
            MTModifyName:{
                required: "Name is required",
                rangelength:"Length must be 2-20 characters long"
            },
            MTModifyEmail:{
                required: "Email is required",
                ModifyEmailCheck:"Please enter a valid email address"
            },
            MTModifyReviewDate:{
                required:"Booking date is required"
            },
            MTModifyFoodRating:{
                ModifyNumberCheck:"Value must be 0-5"
            },
            MTModifyServiceRating:{
                ModifyNumberCheck:"Value must be 0-5"
            },
            MTModifyValueRating:{
                ModifyNumberCheck:"Value must be 0-5"
            }
        }
    });
    return form.valid();
}

jQuery.validator.addMethod("AddEmailCheck",
    function(value, element)
    {
        var regex = /^[^@]+@[^@]+\.[^@]+$/;
        return this.optional(element) || regex.test(value);
    },
    "Add Email Checker");

jQuery.validator.addMethod("AddNumberCheck",
    function(value, element)
    {
        return !(this.optional(element) || value < 0 || value > 5);
    },
    "Add Number Checker");

jQuery.validator.addMethod("ModifyEmailCheck",
    function(value, element)
    {
        var regex = /^[^@]+@[^@]+\.[^@]+$/;
        return this.optional(element) || regex.test(value);
    },
    " Modify Email Checker");

jQuery.validator.addMethod("ModifyNumberCheck",
    function(value, element)
    {
        return !(this.optional(element) || value < 0 || value > 5);
    },
    "Modify Number Checker");


