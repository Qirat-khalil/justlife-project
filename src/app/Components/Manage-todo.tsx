import React from 'react'

const ManageTodo = () => {
    return (
        <>
            <div className='container mx-auto w-[185vh] px-18 py-4 mt-15'>
                <div className=' justify-between  flex items-center'>
                   <div >
                     <p >Download our Super app!</p>
                      <h1 className='mt-2 text-3xl font-bold'>Manage all to-dos with a single tap!</h1>
                      <p className='mt-3 text-xl'>Book and manage your appointments, view your professional’s profile and ratings, get the latest offers, and much more.</p>
                   </div>
                    <div className=' '>
                          <img src="/Images/footer-img.webp" alt="" className='w-[100vh] items-end'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageTodo
