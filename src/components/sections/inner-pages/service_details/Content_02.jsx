const Content_02 = () => {
  return (
    <section id='content-section-2'>
      {/* Section Spacer */}
      <div className='pb-20 xl:pb-[150px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='jos mb-10 text-center lg:mb-16 xl:mb-20'>
            <div className='mx-auto md:max-w-xl lg:max-w-4xl xl:max-w-[950px]'>
              <h2>Widely used throughout the industry for work</h2>
            </div>
          </div>
          {/* Section Content Block */}
          <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-[minmax(0,_1fr)_1.2fr] xl:gap-28 xxl:gap-32'>
            {/* Content Left Block */}
            <div
              className='jos order-2 overflow-hidden rounded-md md:order-1'
              data-jos_animation='fade-left'
            >
              <img
                src='assets/img/th-1/funfact-image.jpg'
                alt='content-image-4'
                width={529}
                height={500}
                className='h-auto w-full'
              />
            </div>
            {/* Content Left Block */}
            {/* Content Right Block */}
            <div
              className='jos order-1 md:order-2'
              data-jos_animation='fade-right'
            >
              <ul className='flex flex-col gap-y-6'>
                <li>
                  <h5 className='mb-[10px]'>1. Trusted by Leading Enterprises</h5>
                  <p className='mb-7 last:mb-0'>
                  Chosen by industry leaders worldwide, our products set the standard for robust cybersecurity solutions, ensuring businesses can operate securely and with confidence
                  </p>
                </li>
                <li>
                  <h5 className='mb-[10px]'>
                  2. Proven Performance Across Industries
                  </h5>
                  <p className='mb-7 last:mb-0'>
                  From finance to healthcare and beyond, our products deliver consistent performance and reliability, tailored to meet the unique cybersecurity needs of diverse sectors
                  </p>
                </li>
                <li>
                  <h5 className='mb-[10px]'>
                  3. Innovating Security Solutions
                  </h5>
                  <p className='mb-7 last:mb-0'>
                  Continuously pushing the boundaries of cybersecurity technology, we pioneer innovative solutions that anticipate and mitigate emerging threats, keeping your business protected.
                  </p>
                </li>
              </ul>
            </div>
            {/* Content Right Block */}
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Content_02;
