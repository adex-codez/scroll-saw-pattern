import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/gallery')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='container mx-auto py-24'>
    <h1 className='font-heading text-6xl text-center mb-10'>Gallery</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10'>
      <div className="w-full h-[350px] rounded-lg overflow-hidden cursor-pointer shadow-md shadow-black/20">
        <img className='w-full h-full' src='/images/pattern-1.jpg' alt='pattern 1' />
      </div> 
      <div className="w-full h-[350px] rounded-lg overflow-hidden cursor-pointer shadow-md shadow-black/20">
        <img className='w-full h-full' src='/images/pattern-2.jpg' alt='pattern 2' />
      </div>
      <div className="w-full h-[350px] rounded-lg overflow-hidden cursor-pointer shadow-md shadow-black/20">
        <img className='w-full h-full' src='/images/pattern-3.jpg' alt='pattern 3' />
      </div>     
      <div className="w-full h-[350px] rounded-lg overflow-hidden cursor-pointer shadow-md shadow-black/20">
        <img className='w-full h-full' src='/images/pattern-4.jpg' alt='pattern 4' />
      </div>
    </div>
  </div>
}
