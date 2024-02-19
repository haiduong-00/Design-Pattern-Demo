function getPrice(originalPrice, typePromotion = 'default') {
    if (typePromotion === "preOrder") {
        return originalPrice * 0.8;
    }

    if (typePromotion === "promotion") {
        return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
    }

    if(typePromotion === 'default') {
        return originalPrice
    }
}

console.log('--->>> Price: ', getPrice(200, 'preOrder'));