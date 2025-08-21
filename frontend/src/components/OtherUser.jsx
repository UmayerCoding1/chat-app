import React from 'react';

const OtherUser = () => {
    return (
       <div>
     
      <div className='flex items-center gap-2 hover:bg-zinc-200 cursor-pointer p-2 rounded-lg'>
          <div>
           <div className='avatar avatar-online'>
              <div className="w-10 rounded-full">
                 <img src="https://avatar.iran.liara.run/public" loading='lazy' alt='avatar' />
              </div>
           </div>
        </div>

        <div>
            <div>
                <p>Umayer Hossain</p>
            </div>
        </div>
      </div>
<hr className="border-black/20 " />
    </div>
    );
};

export default OtherUser;