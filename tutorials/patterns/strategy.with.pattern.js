function preOrderPrice(originalPrice) {
    return originalPrice * 0.8;
}

/**
 * Tiếp tục thêm tính năng khuyến mãi thông thường, vd Nếu giá gốc < 200 thì giảm 10%, con > thì giảm tối đa 30
 * @param {*} originalPrice
 * @returns
 */
function promotionPrice(originalPrice) {
    return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
}

/**
 * Giá mặc định
 * @param {*} originalPrice
 * @returns
 */
function defaultPrice(originalPrice) {
    return originalPrice;
}

/**
 * Giá mặc định
 * @param {*} originalPrice
 * @returns
 */
function dayPrice(originalPrice) {
    return originalPrice * 0.6;
}

function dayPrice11(originalPrice) {
    return originalPrice * 0.4;
}

// // Và chúng ta sẽ sửa đổi lại như sau:
// function getPrice(originalPrice, typePromotion) {
//     if (typePromotion === "preOrder") {
//         return preOrderPrice(originalPrice)
//     }

//     if (typePromotion === "promotion") {
//         return promotionPrice(originalPrice)
//     }
// }

const getPriceStrategy = {
    preOrder: preOrderPrice,
    promotion: promotionPrice,
    dayPrice,
    dayPrice11,
    default: defaultPrice,
}

// Kết hợp trạng thái với chiến lược chiết khấu, hàm giá có thể được tối ưu hóa như sau:
function getPrice(originalPrice, typePromotion) {
    return getPriceStrategy[typePromotion](originalPrice);
}

console.log('--->>>', getPrice(200, 'dayPrice11'));