// Write A Function That Uses The Reduce Function To Calculate The Total Value Of An Array Of Objects With A 'Quantity' And 'Price' Property.

const items = [
  {
    quantity: 10,
    price: 15,
  },
  {
    quantity: 5,
    price: 25,
  },
  {
    quantity: 20,
    price: 10,
  },
  {
    quantity: 12,
    price: 9,
  },
];

const totalValue = () => {
  const result = items.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0);
  console.log(result);
};

totalValue()