import React from 'react'
import DashboardNavbar from '../Dashboard/DashboardNavbar/DashboardNavbar'
import Sidebar from '../Sidebar/Sidebar'

const OfferDash = () => {
  return (
    <div>
        <DashboardNavbar/>
         <Sidebar/>

         <div className="flex items-center justify-center p-12 ml-48">

  <div className="mx-auto w-full max-w-[550px] bg-white shadow-2xl">
    <form
      className="py-6 px-9"
      action="https://formbold.com/s/FORM_ID"
      method="POST"
    >

      <div className="mb-6 pt-4">
        <label className="mb-5 block text-xl font-semibold text-[#07074D]">
          Trip Details
        </label>

        <div className="mb-8">
          <input type="file" name="file" id="file" className="sr-only" />
          <label
            for="file"
            className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
          >
            <div>
              <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                Drop files here
              </span>
              <span className="mb-2 block text-base font-medium text-[#6B7280]">
                Or
              </span>
              <span
                className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
              >
                Browse
              </span>
            </div>
          </label>
        </div>

        <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="Package Name">
        Package Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Package Name"/>
    </div>

        <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="Price">
        Price
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="Number" placeholder="Package Price"/>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="Location">
       Discount
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="Number" placeholder="Discount"/>
    </div>

    <div className='flex gap-6'> 
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="Bed">
        Bed
      </label>
      <input className="shadow appearance-none border rounded h-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Bed"/>
    </div>
    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="Room">
        Room
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Room"/>
    </div>
    </div>

    <div className='flex gap-6'> <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="Days">
        Days
      </label>
      <input className="shadow appearance-none border rounded h-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Days"/>
    </div>
    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="Quantity">
        Quantity
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="Number" placeholder="Quantity"/>
    </div>
    </div>
      </div>

      <div>
        <button
          className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Send File
        </button>
      </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default OfferDash