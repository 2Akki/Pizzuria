import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const user = useSelector((state)=>state.user)
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8  text-xl font-semibold md:text-3xl">
        The best pizza,there is.
        <br />
        <span className="text-yellow-500">
         Fresh and Best pizzas in the World.
        </span>
      </h1>
{user.username!=""?<Button to="menu" type="primary" >Continue as {user.username}</Button>:<CreateUser />}
      
    </div>
  );
}

export default Home;
