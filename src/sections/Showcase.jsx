import { useEffect, useRef } from 'react';
import { cardData } from '../constants/index.js';
import Button from '../components/Button';    
import TitleHeader from '../components/TitleHeader';

const Showcase = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Check if Swiper is already loaded
    if (window.Swiper) {
      initializeSwiper();
      return;
    }

    // Load Swiper via CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
    script.async = true;
    script.onload = initializeSwiper;
    document.head.appendChild(script);

    // Load Swiper CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
    document.head.appendChild(link);

    function initializeSwiper() {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        swiperRef.current = new window.Swiper('.card-wrapper', {
          loop: true,
          spaceBetween: 20,
                     
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
                     
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          },
        });
      }, 100);
    }

    // Cleanup function
    return () => {
      if (swiperRef.current && swiperRef.current.destroy) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  return (
    <section id="showcase" className="showcase-section">
      <div className="container swiper">
        <div className="mb-12 mt-12">
          <TitleHeader title="Explore My Journey Through Code" />
        </div>
        <div className="card-wrapper">
          <ul className="card-list swiper-wrapper">
            {cardData.map((card) => (
              <li key={card.id} className="card-item swiper-slide">
                <div className="card-link">
                  <img src={card.image} alt="Card" className="card-image" />
                  <h2 className="card-title mt-4 ">{card.title}</h2>
                  <p className="card-description text-sm text-gray-800 mb-4 mt-4">{card.description}</p>
                  <hr className="border-gray-500 mb-4" />
                  <div className="card-buttons flex gap-2">
                    <Button
                      text="Code"
                      href={card.detailsLink}
                      isExternal={true}
                      direction="right"
                      variant="card"
                      className="bg-[#2D3E50] text-white rounded-2xl"
                    />
                    <Button
                      text="Demo"
                      href={card.demoLink}
                      isExternal={true}
                      direction="right"
                      variant="card"
                      className="bg-[#2D3E50] text-white rounded-2xl"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;