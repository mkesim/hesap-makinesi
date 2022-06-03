var isResult=false;
function getOutput(){
  return $(".output").text();
}


$(document).ready(function(){
  $(".number").click(function(){
    if(isResult){
      $(".output").html($(this).children('.item').text());
      isResult=false;
    }
    else{
      $(".output").append($(this).children('.item').text());
    }
  });
  $(".operation").click(function(){
    if(isResult){
      $(".output").html($(this).children('.item').text());
      isResult=false;
    }
    else{
      $(".output").append($(this).children('.item').text());
    }
  });
  $(".equals").click(function(){
    var calculation = getOutput();
    var res = eval(calculation);
    if(typeof(res)=='number'){
      $(".output").html(res);
      isResult = true;
    }
    console.log(res);
  });
  $(".clear").click(function(){
    if($(this).children('.item').text()=="AC"){
      //clear memory
      $(".output").html('');
    }
    if($(this).children('.item').text()=="CE"){
      //clear entry
      $(".output").html('');
    }
  });
});
