function getDiscountInfo(employeeType){
    if (employeeType === "part-time employee") {
        console.log("10% discount");
    }
    else if(employeeType === "full-time employee") {
        console.log("20% discount")
    }
    else if(employeeType === "manager") {
        console.log("30% discount")
    }
    else {
        console.log("No discount")
    }
}

getDiscountInfo("manager");
