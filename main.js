//Show and hide search filters
function openFilters() {
  const filters = document.getElementById("modal_filters");

  filters.style.display = "block";//Show the modal

}

function closeFilters() {
    const filters = document.getElementById("modal_filters");
  
    filters.style.display = "none";//Hide the modal
  }

//Taking the "guest" placeholder
const input_value = document.getElementById("guest_input");
var guest_placeholder = input_value.placeholder;
var sum_guest = 0;

var search_guest = document.getElementById("var_guest");

// Interactive guest list (Adults)
function plusAdults(){
     var total = document.getElementById("total_adults");
     var total_num = total.innerHTML;//Acces to html text between the buttons + and -
     var total_num = Number(total_num);//Convert it in a real number, not string type

    total_num = total_num + 1;
    sum_guest = sum_guest + 1;

    total.innerHTML = total_num;//Change the html element

    if (sum_guest <= 0){//Conditional, if the total guest is 0 the place holder will be "Guest"
      input_value.placeholder = "Guest"
      search_guest.placeholder = "Add guests"
    }else{
      input_value.placeholder = sum_guest;//Else the conditional will be the sum between adults and the children
      if(sum_guest > 1){
        search_guest.placeholder = sum_guest + " guests";
      }else{
        search_guest.placeholder = sum_guest + " guest";
      }
    };
   
}

function minusAdults(){
    var total = document.getElementById("total_adults");
    var total_num = total.innerHTML;
    var total_num = Number(total_num);
   
   total_num = total_num - 1;
   
   
   if (total_num < 0){//If the var is lees than 0 total_num will remain at 0
    total_num = 0

   } else{
    sum_guest = sum_guest - 1;
  };  

   total.innerHTML = total_num;

   if (sum_guest <= 0){//Conditional, if the total guest is 0 the place holder will be "Guest"
    input_value.placeholder = "Guest"
    search_guest.placeholder = "Add guests"
  }else{
    input_value.placeholder = sum_guest;//Else the conditional will be the sum between adults and the children
    if(sum_guest > 1){
      search_guest.placeholder = sum_guest + " guests";
    }else{
      search_guest.placeholder = sum_guest + " guest";
    }
  };

}

// Interactive guest list (Children)
function plusChildren(){
    var total = document.getElementById("total_children");
    var total_num = total.innerHTML;
    var total_num = Number(total_num);

   total_num = total_num + 1;
   sum_guest = sum_guest + 1;

   total.innerHTML = total_num;

   if (sum_guest <= 0){//Conditional, if the total guest is 0 the place holder will be "Guest"
    input_value.placeholder = "Guest"
    search_guest.placeholder = "Add guests"
  }else{
    input_value.placeholder = sum_guest;//Else the conditional will be the sum between adults and the children
    if(sum_guest > 1){
      search_guest.placeholder = sum_guest + " guests";
    }else{
      search_guest.placeholder = sum_guest + " guest";
    }
  };

}

function minusChildren(){
   var total = document.getElementById("total_children");
   var total_num = total.innerHTML;
   var total_num = Number(total_num);
  
  total_num = total_num - 1;
  
  if (total_num < 0){
   total_num = 0

  } else{
    sum_guest = sum_guest - 1;
  }; 


  total.innerHTML = total_num;

  if (sum_guest <= 0){//Conditional, if the total guest is 0 the place holder will be "Guest"
    input_value.placeholder = "Guest"
    search_guest.placeholder = "Add guests"
  }else{
    input_value.placeholder = sum_guest;//Else the conditional will be the sum between adults and the children
    if(sum_guest > 1){
      search_guest.placeholder = sum_guest + " guests";
    }else{
      search_guest.placeholder = sum_guest + " guest";
    }
  };
  
}

//Acces to location placeholder
var local_var = document.getElementById("local_var");
var search_local = document.getElementById("var_loc");

function function_location(x){
  var location = document.getElementsByClassName("loc")[x];//Array parameter depends the location onclick
  var place = location.innerHTML;
  local_var.placeholder = place;//Change the placeholder value
  search_local.placeholder = place;
}
