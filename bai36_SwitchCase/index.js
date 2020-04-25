// Switch ... case
//
// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }

// discount
// bronze: 2%,
// silver: 5%,
// gold: 8%,
// diamond: 10%

var memberCard = {
  tier: 'diamond'
}

function getTotal(price, card){
  var discountRate;

  switch (card.tier) {
    case 'brone':
      discountRate = 0.02;
      break;
    case 'silver':
      discountRate = 0.05;
      break;
    case 'gold':
      discountRate = 0.08;
      break;

    case 'diamond':
      discountRate = 0.1;
      break;
  
    default:
      discountRate = 0;
      break;
  }

  return price*(1-discountRate);
}

console.log(getTotal(50000, memberCard));






// red, green, orange
var trafficLight = 'orange';

function goOrNotInVietNam(LightValue) {
  switch (LightValue) {
    case 'green':
    case 'orange':
      console.log('go');
      break;
    
    case 'red':
      console.log('stop');
      break;
  }
}

goOrNotInVietNam(trafficLight);




/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */

function transform(arr) {
  // your code here
    arr.map(function(item, index){
      switch(item){
            case 'A': case 'a':
                arr[index] = 1;
                break;
            case 'B': case 'b':
                arr[index] = 2;
                break;
            default:
                arr[index] = 0;
                break;
      }
  })
  
   return arr;
}