import React from 'react';

const Signup = () => {
    return (
        <div className='w-[350px] mx-auto '>
            <div className='glass-card w-full p-6 mx-5'>
                <h1 className='text-3xl font-bold text-center text-black'>Signup</h1>

                <form className='flex flex-col gap-4'>
                    <div className=''> 
                        <label className="lable p-2">
                            <span className='text-base label-text'>Full Name</span>
                        </label> <br />
                        <input 
                        className="input input-bordered w-full  h-10" 
                        type="text" 
                        name="fullname" 
                        placeholder='full name'
                        />
                    </div>

                    <div className=''> 
                        <label className="lable p-2">
                            <span className='text-base label-text'>User Name</span>
                        </label> <br />
                        <input 
                        className="input input-bordered w-full  h-10" 
                        type="text" 
                        name="username" 
                        placeholder='user name'
                        />
                    </div>


                    <div className=''> 
                        <label className="lable p-2">
                            <span className='text-base label-text'>Email</span>
                        </label> <br />
                        <input 
                        className="input input-bordered w-full  h-10" 
                        type="email" 
                        name="email" 
                        placeholder='Email'
                        />
                    </div>

                    <div className=''> 
                        <label className="lable p-2">
                            <span className='text-base label-text'>Password</span>
                        </label> <br />
                        <input 
                        className="input input-bordered w-full  h-10" 
                        type="password" 
                        name="password" 
                        placeholder='Password'
                        />
                    </div>
                    <div className=''> 
                        <label className="lable p-2">
                            <span className='text-base label-text'>Confirm password</span>
                        </label> <br />
                        <input 
                        className="input input-bordered w-full  h-10" 
                        type="password" 
                        name="confirmPassword" 
                        placeholder='Confirm password'
                        />
                    </div>
                    <div className='flex items-center my-4'>
            <div className='flex items-center'>
              <p>Male</p>
              <input
                type="checkbox"
                // checked={user.gender === "male"}
                // onChange={() => handleCheckbox("male")}
                defaultChecked
                className="checkbox mx-2" />
            </div>
            <div className='flex items-center'>
              <p>Female</p>
              <input
                type="checkbox"
                // checked={user.gender === "female"}
                // onChange={() => handleCheckbox("female")}
                defaultChecked
                className="checkbox mx-2" />
            </div>
          </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;