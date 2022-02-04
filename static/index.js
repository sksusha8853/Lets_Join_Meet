var var1=0;
function changeMode(){
  if(var1==0){
    var1=1;
    document.body.style.backgroundColor="black";
  }
  else{
    var1=0;
    document.body.style.backgroundColor="#5c008a";
  }

}

var var2=0;
function addHS(){
  if(var2==0){
    var2=1;
    document.getElementById('hs1').style.display="inline-block";
    document.getElementById('hs2').style.visibility="visible";
    document.getElementById('HS3').className="fa fa-minus-circle";
  }
  else{
    var2=0;
    document.getElementById('hs1').style.display="none";
    document.getElementById('hs2').style.visibility="hidden";
    document.getElementById('HS3').className="fa fa-plus-circle";

  }
}
