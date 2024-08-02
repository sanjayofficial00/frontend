import React from 'react'

const CategorySelection = ({ onSelectCategory, activeCategory }) => {
    const categories = ['Health', 'Fintech', 'AI', 'Security', 'Enterprise', 'Startups', 'Growth'];
    return (
        <div className='text-center mb-10'>
            <button
                onClick={() => onSelectCategory(null)} 
                className={`px-3 text-2xl font-bold hover:bg-orange-500 hover:text-black py-1 ${activeCategory === null ? "activeBtn" : ""}`}
                >All
                </button>
            {categories.map((category, index) => (
                <button
                    onClick={() => onSelectCategory(category)}
                    className={`px-3 text-2xl font-bold hover:bg-orange-500 hover:text-black py-1 
                        ${activeCategory === category ? "activeBtn" : ""}`}
                    key={index}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}

export default CategorySelection