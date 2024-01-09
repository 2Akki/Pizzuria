import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';
import { useDispatch } from 'react-redux';
import { LogOutState } from '../features/user/userSlice';
import Button from './Button';


function Header() {
  const dispatch= useDispatch();
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Pizzuria 🧑‍🍳
      </Link>
      <SearchOrder/>
      
      <Username/>
    </header>
  );
}

export default Header;
