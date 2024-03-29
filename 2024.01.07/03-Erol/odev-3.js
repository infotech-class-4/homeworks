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
    delivered: false,
    items: [
      { productId: "901", price: 43 },
      { productId: "1223", price: 55 },
    ],
  },
];

//! 1. Teslim edilemeyen siparisi bulun?

const notDeliveredPost = orders.filter((item) => {
  return item.delivered == false;
});

console.log(notDeliveredPost);

//! 2. Her bir siparise totalPrice propertisini ekleyip toplam siparis tutarini hesaplayin.
const topla = (siparisler) => {
  return siparisler.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
};
const yeniListeOlustur = orders.map((order) => {
  return { ...order, totalPrice: topla(order.items) };
});

console.log(yeniListeOlustur);
//! 3. Tüm siparişler teslim edildi mi?
const tuemSiparislerTeslim = orders.every((order) => {
  return order.delivered == true;
});
//console.log(tuemSiparislerTeslim);
//! 4. productId: "123" olan ürün teslim edildi mı?
const isProductDelivered = orders.some((order) =>
  order.items.some((item) => item.productId === "123" && order.delivered)
);

console.log(isProductDelivered);
