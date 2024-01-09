import { useLoaderData } from 'react-router-dom';
// import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  
  const menu = useLoaderData();
  const PizzaChecker = [{ id:1, name:"margarita", unitPrice:2, ingredients:["ketchup","chese","etc"], soldOut:false, imageUrl:"" },{ id:2, name:"Pizza 2", unitPrice:12, ingredients:["ketchup","chese","etc"], soldOut:true, imageUrl:"" }]

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {/* {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))} */}
      {PizzaChecker.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  // const menu = await getMenu();
   return null;
}

export default Menu;
