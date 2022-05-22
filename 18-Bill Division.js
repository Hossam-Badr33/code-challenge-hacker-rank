let Bill = [3,10,2,9];
function bonAppetit(Bill, k, b) {
    let SumBill =0;
    let ActualBill =0;
    for (let i=0; i<Bill.length; i++) {
        SumBill += Bill[i];
    }
    SumBill = SumBill-Bill[k];
    ActualBill = SumBill/2;
    if (ActualBill === b) {
        console.log("Bon Appetit");
    }
    else {
        
        console.log(b-ActualBill);
    }
}
bonAppetit(Bill, 1, 7);