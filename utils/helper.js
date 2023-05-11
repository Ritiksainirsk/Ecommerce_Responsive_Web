

const getDiscountedPricePercentage = (original_price,DiscopuntPrice)=>{
    const discount = original_price - DiscopuntPrice;

    const discountPercentes = (discount/original_price) * 100;

    return discountPercentes.toFixed(2);
    
}

export default getDiscountedPricePercentage;