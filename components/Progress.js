import React from 'react'
import Image from 'next/image' 
import license from '@/public/process/license.jpg'
import valuation from '@/public/process/valuation.jpeg'
import pay from '@/public/process/pay.jpeg'


const progress = () => {
    return (
        <section id="progress" className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-10">How It Works</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 mx-auto">
                <div>
                    <Image src={license} alt="Upload" className="mx-auto mb-4 max-w-60" />
                    <h3 className="font-semibold text-lg">Upload License</h3>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-90 md:rotate-0 lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                <div>
                    <Image src={valuation} alt="Valuation" className="mx-auto mb-4 max-w-60" />
                    <h3 className="font-semibold text-lg">Get Valuation</h3>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-90 md:rotate-0 lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                <div>
                    <Image src={pay} alt="Get Paid" className="mx-auto mb-4 max-w-50" />
                    <h3 className="font-semibold text-lg">Get Paid</h3>
                </div>
            </div>
        </section>

    )
}

export default progress
