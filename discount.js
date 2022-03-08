const coupons = [
    {
        name: "surprise",
        discount: 15,
    },
    {
        name: "you are unique",
        discount: 30,
    },
    {
        name: "it's a secret",
        discount: 25,
    },
];

function calculateDiscountedPrice(price, discount){
    const PercentOfDiscountedPrice = 100 - discount;
    const priceWithDiscount = (price * PercentOfDiscountedPrice)/ 100;
  
    return priceWithDiscount;
  
  }

  function onClickButtonPriceDiscount() {
           const inputPrice = document.getElementById("InputPrice");
           const priceValue = inputPrice.value;
          
           const inputCoupon = document.getElementById("inputCoupon");
           const couponValue = inputCoupon.value;  
           
           const isCouponValueValid = function (coupon) {
            return coupon.name === couponValue;
        };
        
        const userCoupon = coupons.find(isCouponValueValid);
        
        if (!userCoupon) {
            alert("The coupon " + couponValue + " It's not valid ");
        } else {
            const discount = userCoupon.discount;
            const priceWithDiscount = calculateDiscountedPrice(priceValue, discount);
        
            const resultP = document.getElementById("ResultP");
            resultP.innerText = "The discounted price is: $" + priceWithDiscount;
        }

    }   
