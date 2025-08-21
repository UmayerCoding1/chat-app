import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';

const OtherUser = ({user}) => {
    const dispatch = useDispatch();
    const handleSelectedUser = (user) => {
        dispatch(setSelectedUser(user));
    }
    return (
       <>
     
      <div onClick={() =>handleSelectedUser(user)} className='flex items-center gap-2 hover:bg-zinc-200 text-white hover:text-black cursor-pointer p-2 rounded-lg'>
          <div>
           <div className='avatar avatar-online'>
              <div className="w-10 rounded-full">
                 <img src={user.avatar} loading='lazy' alt='avatar' />
              </div>
           </div>
        </div>

        <div>
            <div>
                <p>{user.fullname}</p>
            </div>
        </div>
      </div>
<hr className="border-black/20 " />
    </>
    );
};

export default OtherUser;