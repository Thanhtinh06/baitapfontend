function upper_case(number){
  // regexp = /^(\d{0,}(\.\d{0,})?)$/; //true
  // regexp = /(\d+(\.\d+)?)/  // true
  // regexp = /^(\d{1,2}(\.\d{1,2})?)$/;
    regexp = /^[0-9]+$/;
  if (regexp.test(number)){
    console.log("this is number")
  }
  else{
    console.log("this is not number")
  }
}

upper_case(9);
upper_case(9.2);
