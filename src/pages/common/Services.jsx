import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Faq_Section from '../../components/sections/inner-pages/service/Faq_Section';
import Service_Section from '../../components/sections/inner-pages/service/service_section/Service_Section';
import Testimonial from '../../components/sections/home_04/Testimonial';

const Services = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Breadcrumb Section Start :::... */}
        <Breadcrumb title='Our Services' link='Services' />
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Service Section Start :::... */}
        <Service_Section />
        {/*...::: Service Section End :::... */}
        {/*...::: FAQ Section Start :::... */}
        <Faq_Section />
        {/*...::: FAQ Section End :::... */}
        {/*...::: Testimonial Section Start :::... */}
        <Testimonial />
        {/*...::: Testimonial Section Start :::... */}
      </main>
    </>
  );
};

export default Services;
