import Service_Block from '../../../../components/widget/Service_Block';
import data from './data.json';

const Service = () => {
  return (
    <>
      {/*...::: Service Section Start :::... */}
      <section id='section-service'>
        {/* Section Spacer */}
        <div className='pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]'>
          {/* Section Container */}
          <div className='global-container'>
            {/* Section Content Block */}
            <div className='jos mb-10 lg:mb-16 xl:mb-20'>
              <div className='md:max-w-sm lg:max-w-xl xl:max-w-[746px]'>
                <h2>Core features that make it valuable</h2>
              </div>
            </div>
            {/* Section Content Block */}
            {/* Service List */}
            <ul className='jos grid grid-cols-1 gap-[2px] overflow-hidden rounded-[10px] border-2 border-black bg-black sm:grid-cols-2 lg:grid-cols-4'>
              {/* Service Item */}
              {data.map((item, index) => (
                <Service_Block key={index} {...item} />
              ))}
              {/* Service Item */}
            </ul>
            {/* Service List */}
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </section>
      {/*...::: Service Section End :::... */}
    </>
  );
};

export default Service;
