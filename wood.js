// fixed: per item wood requirments//
//vary: quantity//

function woodCalculator (chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const tableChairWood = 5;
    const bedChairWood = 2;

    const chairWood = perChairWood * chairQuantity;
    const tableWood = tableChairWood * tableQuantity;
    const bedWood = bedChairWood * bedQuantity;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;

}
const totalWood = woodCalculator(6, 1, 1 );
console.log(totalWood);