import React, { useEffect } from 'react'
import { ProductsCategory } from "../constants"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ViewProducts from './ViewProducts';
import { useNavigate } from 'react-router-dom';


gsap.registerPlugin(ScrollTrigger);

const Products = () => {

  const navigate = useNavigate();

  const handleViewProduct = (id) =>{
    navigate(`/view-product/${id}`);
  }


  useEffect(() => {
      gsap.fromTo('.categorie',
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.1,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.categories',
            start: 'top 60%',
            toggleActions: 'play none none none',

          }
        }
      )

    }, [])


  return (
    <section id="products" className="py-20 bg-white scroll-mt-30">
      <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
      <div className="categories grid grid-cols-2 md:grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {ProductsCategory.map((item) => (
          <div
            key={item.id}

            className="categorie flex flex-col justify-center items-center rounded-2xl shadow-lg p-6 bg-green-50 hover:bg-green-100 transition duration-300 text-center"
          >
            <img height={80} width={80} alt='category images' className="" src={item.imgKey} />
            <h3 className="text-xl font-semibold">{item.titleKey}</h3>
            <button onClick={()=>handleViewProduct(item.id)} className="mt-4 bg-green-900 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products