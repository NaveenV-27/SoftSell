import React from 'react'

const Reviews = () => {
  return (
    <section id='Reviews' className=" py-16 text-center">
  <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
  <div className="flex flex-col md:flex-row justify-center gap-10 max-w-4xl mx-auto">
    <div className=" p-6 rounded shadow-sm shadow-cyan-100 font-light ">
      <p className="italic mb-4">“SoftSell made it incredibly easy to get rid of old licenses. Quick and transparent!”</p>
      <strong>Sarah Lee</strong><br />
      <span className="text-sm">IT Manager, ApexCorp</span>
    </div>
    <div className=" p-6 rounded shadow-sm shadow-cyan-100 font-light ">
      <p className="italic mb-4">“Smooth process from start to finish. Highly recommended!”</p>
      <strong>John Smith</strong><br />
      <span className="text-sm ">Operations Lead, NovaTech</span>
    </div>
  </div>
</section>
  )
}

export default Reviews
