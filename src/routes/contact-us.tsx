import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact-us')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='container mx-auto py-24'>
    <div className='flex gap-20'>
      <div className="lg:w-[50%] self-center flex flex-col gap-9">
        <h1 className='font-heading text-6xl '>Contact Us</h1>
        <p>We would love to hear from whether you have questions, need support or learn more about us. We are here to help</p>
        <div className='flex'>
          <span>
            <p className='font-bold'>Our Address</p>
            <p>Number 20B Peculiar Street, Off Oyebi Street Oriola Bus stop Ibafo, Ogun State Nigeria.</p>
          </span>
          <span>
            <p className='font-bold'>Our Contact Info</p>
            <p>Number 20B Peculiar Street, Off Oyebi Street Oriola Bus stop Ibafo, Ogun State Nigeria.</p>
          </span>
        </div>
      </div>
      <form className='bg-secondary-300 p-4 lg:w-[50%] rounded-xl'>
        <h2 className='text-center mb-8 mt-4 font-heading text-4xl'>Get In touch</h2>
        <div className='flex flex-col gap-4 mb-8'>
          <label htmlFor=''>First Name</label>
          <input type='text' className='px-2 py-2 bg-white rounded-md' />
        </div> 
        
        <div className='flex flex-col gap-4 mb-8'>
          <label htmlFor=''>Last Name</label>
          <input type='text' className='px-2 py-2 bg-white rounded-md' />
        </div>
        
        <div className='flex flex-col gap-4 mb-8'>
          <label htmlFor=''>Email Address</label>
          <input className='px-2 py-2 bg-white rounded-md' type='email' />
        </div>
        
        <div className='flex flex-col gap-4 mb-8'>
          <label htmlFor=''>Message</label>
          <textarea className='px-2 py-2 bg-white rounded-md' rows={10} />
        </div>
      </form>
    </div> 
  </div>
}
