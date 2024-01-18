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
  
  // 1. Teslim edilemeyen siparisi bulun?
  const siparis= orders.find((item)=>{
        return item.delivered==false;

  })
  console.log(siparis);
  // 2. Her bir siparise totalPrice propertisini ekleyip toplam siparis tutarini hesaplayin
 const topla=(siparisler)=>{ 
    return siparisler.reduce((acc,item)=>{
    
    acc=acc+item.price;
    return acc;
   },0)
}
const newList =orders.map((order)=>{
    return {...order,
        totalPrice:topla(order.items)
    };

})
console.log(newList);
  
  
  
  // 3. Tüm siparişler teslim edildi mi?
  const order =orders.every((item)=>{
    return item.delivered==true;
  });
console.log(order);

  // 4. productId: "123" olan ürün teslim edildi mı?
  const orderSome =orders.some((item)=>{
    return item.delivered==item.productId;
  });
console.log(orderSome);