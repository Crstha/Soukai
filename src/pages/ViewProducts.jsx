import React, { useState } from 'react'

import { useParams } from 'react-router-dom'
import { ProductsList } from "../constants"
import ReactPaginate from 'react-paginate'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const ViewProducts = () => {
    const categories = ['All', 'Vegetables', 'Fruits', 'Juices', 'Wines', 'Beverages', 'Meat'];
    const [activeCategory, setActiveCategory] = useState('All');

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;
    const startOffset = currentPage * itemsPerPage;
    const endOffset = startOffset + itemsPerPage;

    const filteredProducts = ProductsList.filter((product) => {
        return activeCategory === 'All' || product.category === activeCategory;
    });

    const currentItems = filteredProducts.slice(startOffset, endOffset);

    const { id } = useParams()
    return (
        <section className='section mt-20 '>
            {/* <div className='w-full h-full border relative  '>
                <h2 className='absolute font-bold text-4xl text-center left-1/2 transform -translate-x-1/2 top-2/4 uppercase text-emerald-800'>Products</h2>
                <img className='h-full w-full object-cover' src={bgvege} alt="" />
            </div> */}
            <div className='w-full flex  flex-wrap gap-4 m-10 h-auto'>
                {
                    categories.map((category) => (
                        <button className={`px-4 border rounded-full transition ${activeCategory === category ? 'bg-green-600 text-white border-green-600' : 'bg-white text-green-600 border-green-300 hover:bg-green-600 hover:text-white'}
                        `} key={category} onClick={() => { setActiveCategory(category); setCurrentPage(0) }}>
                            {category}

                        </button>


                    ))
                }
            </div>

            <div className='w-full grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1  gap-5 h-auto'>{
                currentItems.map((list, i) => (
                    <div className='border-1 border-gray-300 flex flex-col rounded-2xl text-center justify-start items-center p-2 transition-transform hover:scale-105 duration-100' key={i}>
                        <img className=' m-2 object-cover' src="https://themewagon.github.io/vegefoods/images/product-2.jpg" alt="" />
                        <h3 className='font-light'>{list.name}</h3>
                        <p><strong className='font-medium text-green-600'>{list.price}</strong></p>
                        <button className='p-2 items-center w-1/2 rounded-full bg-green-600 text-white hover:bg-green-700 hover:text-white'>Add to Cart</button>
                    </div>
                ))}
            </div>
            {filteredProducts.length === 0 && (
                <p className="text-center text-gray-500 col-span-4">No products found in this category.</p>
            )}
            <ReactPaginate
                breakLabel={<span className='mr-4'>...</span>}
                nextLabel={<span className='w-10 h-10 flex items-center justify-center bg-light rounded-md'>
                    <AiOutlineRight />
                </span>}
                onPageChange={({ selected }) => setCurrentPage(selected)}
                pageRangeDisplayed={5}
                pageCount={Math.ceil(filteredProducts.length / itemsPerPage)}
                previousLabel={<span className='w-10 h-10 flex items-center justify-center bg-light rounded-md'>
                    <AiOutlineLeft />
                </span>}
                containerClassName='flex items-center justify-center mt-8 mb-4'
                renderOnZeroPageCount={null}
                pageClassName='cursor-pointer block border border-solid border-gray-300 hover:bg-green-600 w-10 h-10 flex items-center justify-center rounded-md mr-4'
                activeClassName='bg-green-600 text-white'

            />


        </section>
    )
}

export default ViewProducts