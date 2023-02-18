$(document).ready(function() {  
     $('.nav-link-collapse').on('click', function() {  
       $('.nav-link-collapse').not(this).removeClass('nav-link-show');  
       $(this).toggleClass('nav-link-show');
     });


    //  function runOp(element,urlText){
    //   $(element).on('click',function(){
    //     // console.log('clicked!');
    //     document.location.href = urlText
    //    })  
       
    //  }

    //  runOp('#repEmp',"gP_repEmp/")
     
    //  $('#repEmp').on('click',function(){
    //   console.log('clicked!');
    //   var url = "gP_repertoire_employes/"

    //   document.location.href = url
    //  })  
    // function doOp(action){
    //   fetch('action').then(response =>)

    // }
  });
  
  
  
  