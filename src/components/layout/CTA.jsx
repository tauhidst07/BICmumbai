import React from 'react'

const CTA = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-[#7A5933] to-[#8B6A42] text-white relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-10 bg-repeat"
                style={{
                    backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')"
                }}
                aria-hidden="true"
            ></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Join Us in Making a Difference
                </h2>
                <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                    Your support helps us continue our mission of serving the community through education,
                    spiritual guidance, and charitable work.
                </p>
                <div className="flex justify-center">
                    <button className="bg-[#FFE70C] text-[#7A5933] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#D4A843] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Donate Now
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CTA