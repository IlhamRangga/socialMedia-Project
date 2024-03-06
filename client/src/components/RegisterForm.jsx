import React from 'react'

const RegisterForm = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-indigo-500'> Social Media</span>
				</h1>

				<form>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Username'
							className='w-full input input-bordered  h-10'
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Email</span>
						</label>
						<input
							type='email'
							placeholder='Email'
							className='w-full input input-bordered h-10'
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
						/>
					</div>


					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700'>
                        Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
  )
}

export default RegisterForm