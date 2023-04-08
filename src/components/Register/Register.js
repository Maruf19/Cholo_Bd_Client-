import React from 'react'

const Register = () => {
  return (
    <div>
       
      
  

<div className="h-screen font-sans register bg-cover">
<div className="container mx-auto h-full flex flex-1 justify-center items-center">
    <div className="w-full max-w-lg">
      <div className="leading-loose">
      <form class="max-w-sm m-4  p-10 border border-primary bg-white bg-opacity-30 rounded shadow-xl">
      <p className="text-white mb-4 text-center text-lg font-bold">Register</p>
            	<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-black" for="firstName">
										First Name
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="firstName"
										type="text"
										placeholder="First Name"
									/>
								</div>

								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-black" for="lastName">
										Last Name
									</label>
									<input
										class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="lastName"
										type="text"
										placeholder="Last Name"
									/>
								</div>
							</div>

							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-black" for="email">
									Email
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Email"
								/>
							</div>

							<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-black" for="password">
										Password
									</label>
									<input
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password"
										type="password"
										placeholder="******************"
									/>
									<p class="text-xs italic f text-white">Please choose a password.</p>
								</div>


								<div class="md:ml-2">
									<label class="block mb-2 text-sm font-bold text-black" for="c_password">
										Confirm Password
									</label>
									<input
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="c_password"
										type="password"
										placeholder="******************"
									/>
								</div>
							</div>

							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Register Account
								</button>
							</div>

							<hr class="mb-6 border-t" />
							<div class="text-center">
								<a
									class="inline-block text-sm text-white font-bold align-baseline hover:text-primary"
									href="#"
								>
									Forgot Password?
								</a>
							</div>
							<div class="text-center">
								<a
									class="inline-block text-sm text-white font-bold align-baseline hover:text-primary"
									href="./index.html"
								>
									Already have an account? Login!
								</a>
							</div>
						</form>

      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Register