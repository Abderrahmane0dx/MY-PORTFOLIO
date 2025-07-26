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
          
          // Enhanced pagination configuration
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          },
          
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          
          // Add event listeners for slide changes
          on: {
            slideChange: function () {
              // Force pagination update
              if (this.pagination && this.pagination.render) {
                this.pagination.render();
                this.pagination.update();
              }
            },
            slideChangeTransitionEnd: function () {
              // Additional pagination update after transition
              if (this.pagination && this.pagination.update) {
                this.pagination.update();
              }
            },
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
                <a href="#" className="card-link">
                  <img src={card.image} alt="Card" className="card-image" />
                  <p className={`badge ${card.badgeType}`}>{card.badge}</p>
                  <h2 className="card-title">{card.title}</h2>
                  <button className="card-button material-symbols-rounded">
                    arrow_forward_ios
                  </button>
                </a>
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