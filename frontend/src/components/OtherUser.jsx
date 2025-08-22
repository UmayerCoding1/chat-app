import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';

const OtherUser = ({user}) => {
    const {selectedUser} = useSelector(state => state.authR);
    const dispatch = useDispatch();
    const handleSelectedUser = (user) => {
        dispatch(setSelectedUser(user));
    }

    
    return (
       <>
     
      <div onClick={() =>handleSelectedUser(user)} className={`${selectedUser?._id === user._id ? 'bg-zinc-200/50 text-black' : 'text-white'} flex items-center gap-2 hover:bg-zinc-200 hover:text-black cursor-pointer p-2 rounded-lg`}>
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