const orders = [
  {
    orderId: "123",
    customerId: "123",
    deliveryDate: "01-01-2020",
    delivered: true,
    items: [
      { productId: "123", price: 55 },
      { productId: "234", price: 30 },
    ],
  },
  {
    orderId: "234",
    customerId: "234",
    deliveryDate: "01-02-2020",
    delivered: false,
    items: [{ productId: "234", price: 30 }],
  },
  {
    orderId: "345",
    customerId: "234",
    deliveryDate: "05-01-2020",
    delivered: true,
    items: [
      { productId: "567", price: 30 },
      { productId: "678", price: 80 },
    ],
  },
  {
    orderId: "456",
    customerId: "345",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "789", price: 12 },
      { productId: "890", price: 90 },
    ],
  },
  {
    orderId: "578",
    customerId: "456",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "901", price: 43 },
      { productId: "123", price: 55 },
    ],
  },
];


//! 1. Teslim edilemeyen siparisi bulun?

const notDelivered= orders.filter((item)=> item.delivered === false)
console.log(notDelivered);  // {orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: Array(1)}
//length: 1




//! 2. Her bir siparise totalPrice propertisini ekleyip toplam siparis tutarini hesaplayin.

const sumPrice= orders.map((order)=>{
let prices=0;
  order.items.map((product)=>{

    // console.log(product);
    prices +=product.price 



  })
  
  //console.log(prices);
  return {
    ...order,
    totalPrice: prices
  }
})

console.log(sumPrice);



//! 3. Tüm siparişler teslim edildi mi?

const everyDelivered= orders.every((item)=>
{
    return item.delivered==true
});
console.log(everyDelivered); //false



//! 4. productId: "123" olan ürün teslim edildi mı?

