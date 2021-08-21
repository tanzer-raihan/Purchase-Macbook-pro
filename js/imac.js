// function for handling memory cost
function memoryCost(memoryCapasity) {
    const extraMemoryCostUpdate = document.getElementById('extra-memory-cost');
    if (memoryCapasity == '8gb') {
        extraMemoryCostUpdate.innerText = 0;
    }
    if (memoryCapasity == '16gb') {
        extraMemoryCostUpdate.innerText = 180;
    }
    calculateTotal();


}

//function for handeling storagecost
function storageCost(storageCapacity) {
    const extraStorageCostUpdate = document.getElementById('extra-storage-cost');
    if (storageCapacity == "256gb") {
        extraStorageCostUpdate.innerText = 0;
    }
    if (storageCapacity == '512gb') {
        extraStorageCostUpdate.innerText = 100;
    }
    if (storageCapacity == '1tb') {
        extraStorageCostUpdate.innerText = 180;
    }
    calculateTotal();

}

//function for handeling delivery option
function deliveryOption(option) {
    const deliveryCharge = document.getElementById('delivery-charge');
    if (option == "free") {
        deliveryCharge.innerText = 0;
    }
    if (option == 'paid') {
        deliveryCharge.innerText = 20;
    }
    calculateTotal();

}

// function for calculating total price
function calculateTotal() {
    const bestPriceText = document.getElementById('best-price').innerText;
    const bestPrice = parseInt(bestPriceText);

    const extraMemoryCostText = document.getElementById('extra-memory-cost').innerText;
    const extraMemoryCost = parseInt(extraMemoryCostText);

    const extraStorageCostText = document.getElementById('extra-storage-cost').innerText;
    const extraStorageCost = parseInt(extraStorageCostText);

    const deliveryChargeText = document.getElementById('delivery-charge').innerText;
    const deliveryChargeValue = parseInt(deliveryChargeText);

    const totalPriceText = document.getElementById('total-price');
    const totalPrice = bestPrice + extraMemoryCost + extraStorageCost + deliveryChargeValue;
    totalPriceText.innerText = totalPrice;
    const totalPayText = document.getElementById('total-pay');
    totalPayText.innerText = totalPrice;



}


// event of using promo code and get discount
function getDiscount() {
    const beforeCouponText = document.getElementById('total-pay').innerText;
    const priceBeforeCoupon = parseInt(beforeCouponText);
    const PromoCode = document.getElementById('promo-code').value;
    if (PromoCode == 'stevekaku') {
        const priceAfterCoupon = priceBeforeCoupon - (priceBeforeCoupon * .2);
        document.getElementById('total-pay').innerText = priceAfterCoupon;
        document.getElementById('promo-code').value = '';
    }
    else {
        document.getElementById('promo-code').value = '';
    }


}




// choosing memory event handeling
document.getElementById('memory-btn-8gb').addEventListener('click', function () {
    memoryCost('8gb');
})
document.getElementById('memory-btn-16gb').addEventListener('click', function () {
    memoryCost('16gb');

})

// choosing storage event handeling
document.getElementById('storage-btn-256gb').addEventListener('click', function () {
    storageCost('256gb');

})
document.getElementById('storage-btn-512gb').addEventListener('click', function () {
    storageCost('512gb');

})
document.getElementById('storage-btn-1tb').addEventListener('click', function () {
    storageCost('1tb');

})

//delivery option event handeling
document.getElementById('free-delivery-btn').addEventListener('click', function () {
    deliveryOption('free');
})
document.getElementById('paid-delivery-btn').addEventListener('click', function () {
    deliveryOption('paid');
})


// using promo code
document.getElementById('promo-code-apply').addEventListener('click', function () {
    getDiscount();
})
