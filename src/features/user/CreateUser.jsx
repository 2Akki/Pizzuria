import { useState } from 'react';
import Button from '../../ui/Button';

import { updateName } from './userSlice';
import { useDispatch } from 'react-redux';

function CreateUser() {
  const [username, setUsername] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [IsSubmit,setIsSubmit] =useState(false)
  const dispatch = useDispatch();
  function handleSubmit(e) {
    
    e.preventDefault();
     if(username!=''){
     console.log()
     dispatch(updateName(username))
       setIsSubmit(true)
     }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">👋 Welcome! Pls Tell us your name. So we can get into ordering pizzas Right away</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='w-72 input mb-5'
      />

      {IsSubmit && (
        <div>
          <Button type="primary" to="/menu">look at our menu!!</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
