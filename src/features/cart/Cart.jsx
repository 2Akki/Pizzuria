
import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import {addItem,deleteItem,increaseItemQuantity,decreaseItemQuantity, getCart, ClearCart} from "./CartSlice"
// eslint-disable-next-line no-unused-vars
const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  // eslint-disable-next-line no-unused-vars
  // const data = useSelector((state) => state.cart);
  const cart = useSelector(getCart);
  const userName = useSelector((s)=>s.user.username);
  const dispatch = useDispatch();
 
 


  // useEffect(() => {
  //   console.log(fakecart[1])
  //   dispatch(addItem(fakecart[0]))
  //   console.log(cart)
  //   dispatch(addItem(fakecart[1]))
  //   console.log(cart)
  // }, []);
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {/* {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))} */}
         {fakeCart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))} 
      </ul>
      fakeCart
      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
         
        <Button type="secondary" onClick={()=>{ 
          // dispatch(ClearCart())
          
          }}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
