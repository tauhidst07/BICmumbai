import React from 'react'

const StatCard = ({ icon, title, value, description }) => (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#F5E6D3] text-center hover:shadow-xl transition duration-300">
        {icon}
        <div className="text-3xl font-bold text-[#C79732] mb-1">{value}</div>
        <h3 className="text-xl font-semibold text-[#7A5933] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
    </div>
);

export default StatCard