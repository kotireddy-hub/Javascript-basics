const TAX_AMOUNT = 30;

const shopping = function(amount){
    const DISCOUNT_AMOUNT = 40;
    const calculate_tax = () => {
        return amount + TAX_AMOUNT;
    }

    function getDiscountAmount(){
        return DISCOUNT_AMOUNT;
    }

    console.log(amount);
    const total = calculate_tax() - getDiscountAmount();
    return total;
};

const billAmount = shopping(100);
console.log(`final bill amount = ${billAmount}`)