/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import {formatCurrency} from '../../utils/helpers';
import { addItem, getCart, getCurrentQuantityById } from '../cart/CartSlice';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';
import DeleteItem from '../cart/DeleteItem';

function MenuItem({pizza}) {
  // eslint-disable-next-line no-unused-vars
  
  const newItem = {
    pizzaId:pizza.id,
    name:pizza.name,
    quantity:1,
    unitPrice:pizza.unitPrice,
    totalPrice:pizza.unitPrice*1
  }
  const cart = useSelector(getCart);
 

   const IfCart = cart.filter((i)=>i.pizzaId===pizza.id)

   const currentQuantity = useSelector(getCurrentQuantityById(pizza.id));
  const dispatch = useDispatch();
  return (
    <li className="flex gap-4 py-2">
      <img src={pizza.imageUrl} alt={pizza.name} className={`${pizza.soldOut ? "opacity-65 grayscale" : ""} h-24`}
      />
      <div className="pt-0.5 flex grow flex-col">
        <p className="font-medium">{pizza.name}</p>
        <p className="text-sm capitalize italic text-stone-600">
          {pizza.ingredients.join(', ')}
        </p>
        <div className="items-center mt-auto flex justify-between">
          {!pizza.soldOut?(<p className="text-sm">{formatCurrency(pizza.unitPrice)}</p>): 
          
          <p className=" font-medium text-stone-600 uppercase text-medium">Sold out</p>
          
          }
           {
            !pizza.soldOut?IfCart.length>0?<div className="flex items-center justify-between sm:gap-6">
           
    
            <UpdateItemQuantity
              pizzaId={newItem.pizzaId}
              currentQuantity={currentQuantity}
              disabled={true}//since no restaurent Api
            />
            <DeleteItem pizzaId={newItem.pizzaId} />
          </div>:<Button type="small" onClick={()=>{
              
              dispatch(addItem(newItem));
              alert("Added to cart!")
            }}>Add to cart</Button>:""
          } 
        </div>
      </div>
    </li>
  )
}

export default MenuItem;
