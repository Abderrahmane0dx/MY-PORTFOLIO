import { useEffect, useRef } from 'react';
import { cardData } from '../constants/index.js';

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
          spaceBetween: 30,
                     
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
    <section className="showcase-section">
      <div className="container swiper">
        <div className="card-wrapper">
          <ul className="card-list swiper-wrapper">
            {cardData.map((card) => (
              <li key={card.id} className="card-item swiper-slide">
                <div className="bg-gray-800 p-4 w-[450px] h-auto rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="w-full h-[250px] bg-gray-700 rounded-lg overflow-hidden mb-4">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover object-center" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>

                  {/* Description with Fixed Height */}
                  <p className="text-gray-400 min-h-[80px]">{card.description}</p>

                  {/* White Separator Line */}
                  <hr className="border-t border-gray-500 my-4" />

                  {/* Buttons: Code & Demo */}
                  <div className="flex gap-2">
                    {/* Code Button */}
                    <a
                      href={card.detailsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#2D3E50] text-white px-4 py-2 rounded-2xl hover:bg-[#3B4C63] transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.304 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.24c-3.34.726-4.043-1.416-4.043-1.416-.546-1.39-1.332-1.76-1.332-1.76-1.089-.743.083-.728.083-.728 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.932 0-1.31.468-2.38 1.24-3.22-.124-.302-.54-1.52.118-3.164 0 0 1.007-.322 3.3 1.23a11.47 11.47 0 013.005-.404c1.018.006 2.044.137 3.005.404 2.292-1.552 3.297-1.23 3.297-1.23.66 1.644.244 2.862.12 3.164.774.84 1.237 1.91 1.237 3.22 0 4.612-2.805 5.624-5.475 5.921.43.372.815 1.103.815 2.222v3.293c0 .32.192.694.8.577C20.567 22.096 24 17.601 24 12.297 24 5.67 18.627.297 12 .297z"
                        />
                      </svg>
                      Code
                    </a>

                    {/* Demo Button */}
                    <a 
                      href={card.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-200 text-blue-900 rounded-lg hover:bg-blue-300 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14 3v2h3.59L9.17 13.42l1.41 1.41L19 6.41V10h2V3h-7zM5 5h6V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6h-2v6H5V5z" />
                      </svg>
                      Demo
                    </a>
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

      <style jsx>{`
        .swiper-pagination {
          display: none !important;
        }

        .swiper-button-prev,
        .swiper-button-next {
          transition: all 0.3s ease;
        }

        .swiper-button-prev::before,
        .swiper-button-next::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 60px;
          height: 60px;
          background: radial-gradient(circle, rgba(74, 144, 226, 0.3) 0%, rgba(74, 144, 226, 0.1) 50%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          transition: transform 0.3s ease;
          z-index: -1;
          filter: blur(8px);
        }

        .swiper-button-prev:hover::before,
        .swiper-button-next:hover::before {
          transform: translate(-50%, -50%) scale(1);
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default Showcase;