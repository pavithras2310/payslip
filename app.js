function payslipCalc(){
    var basic = parseInt(document.getElementById("basic").value);
    var da = document.getElementById("da");
    var hra = document.getElementById("hra");
    var travel = document.getElementById("tra");
    var pf = document.getElementById("pf");
    var netsal = document.getElementById("netsal");
    var gross = document.getElementById("gross");
    da.value = basic*(5/100);
    var da1 = parseInt(da.value);
    hra.value = basic*(10/100);
    var hra1 = parseInt(hra.value);
    travel.value = basic*(5/100);
    var travel1 = parseInt(travel.value);
    pf.value = basic*(10/100);
    var pf1 = parseInt(pf.value);
    netsal.value = basic+da1+hra1+travel1;
    var netsal1= parseInt(netsal.value);
    gross.value = netsal1 - pf1;
}