import { Link } from 'react-router-dom';


const Testimonial = () => {
  return (
    <section id='testimonial-section'>
      {/* Section Spacer */}
      <div className='pb-20 xl:pb-[150px]'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='mb-10 flex flex-wrap items-center justify-center text-center gap-8 md:mb-16 lg:mb-20'>
            {/* Section Content Block */}
            <div className='jos max-w-[480px] lg:max-w-2xl xl:max-w-[840px]'>
              <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-white sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
                What people are saying about AI cybersecurity
              </h2>
            </div>
            {/* Section Content Block */}
            {/* <Link
              rel='noopener noreferrer'
              to='#'
              className='button inline-block h-full rounded border-none bg-colorGreen py-3 text-base text-black after:border-none after:bg-white'
            >
              Read All Trustpilot Reviews
            </Link> */}
          </div>
        </div>
        {/* Section Container */}
        {/* Testimonial List */}
        <div className=' flex w-[100%] grid-flow-col gap-6 justify-center'>
          {/* Testimonial Item */}
          <div className='flex w-[415px] flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white'>
            <div className='block'>
              <img
                src='assets/img/th-4/icon-green-rating.svg'
                alt='rating'
                width={146}
                height={25}
              />
            </div>
            <p>
              “ platform has seamlessly integrated into our cloud infrastructure, ensuring continuous protection against evolving cyber threats. Their proactive monitoring and adaptive defenses have significantly enhanced our security posture, giving us peace of mind in today's digital landscape.”
            </p>
            <div className='flex items-center gap-x-4'>
              <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                <img
                  src='assets/img/user.png'
                  alt='testimonial-img'
                  width={60}
                  height={60}
                  className='h-full w-full object-cover object-center'
                />
              </div>
              <div className='flex flex-col gap-y-1'>
                <span className='block text-lg font-semibold leading-[1.6]'>
                John Smith
                </span>
                <span className='block text-sm font-light leading-[1.4]'>
                CEO of Local Tech Solutions
                </span>
              </div>
            </div>
          </div>
          {/* Testimonial Item */}
          {/* Testimonial Item */}
          <div className='flex w-[415px] flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white'>
            <div className='block'>
              <img
                src='assets/img/th-4/icon-green-rating.svg'
                alt='rating'
                width={146}
                height={25}
              />
            </div>
            <p>
              "AI cybersecurity solutions has been a game-changer for our organization. Their innovative approach not only detects threats in real-time but also provides actionable insights to fortify our defenses. It's a must-have for any company serious about safeguarding their digital assets"
            </p>
            <div className='flex items-center gap-x-4'>
              <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                <img
                  src='assets/img/user.png'
                  alt='testimonial-img'
                  width={60}
                  height={60}
                  className='h-full w-full object-cover object-center'
                />
              </div>
              <div className='flex flex-col gap-y-1'>
                <span className='block text-lg font-semibold leading-[1.6]'>
                Emily Jones
                </span>
                <span className='block text-sm font-light leading-[1.4]'>
                IT Manager at Regional Enterprises
                </span>
              </div>
            </div>
          </div>
          {/* Testimonial Item */}
          {/* Testimonial Item */}
          <div className='flex w-[415px] flex-col gap-y-8 rounded-[10px] border-[1px] border-colorCodGray p-[30px] text-white'>
            <div className='block'>
              <img
                src='assets/img/th-4/icon-green-rating.svg'
                alt='rating'
                width={146}
                height={25}
              />
            </div>
            <p>
              "As a financial services provider, maintaining data security is paramount. [Your Company Name]'s AI cybersecurity solutions have not only protected our customer's sensitive information but also helped us achieve regulatory compliance effortlessly. Their commitment to innovation and reliability sets them apart."
            </p>
            <div className='flex items-center gap-x-4'>
              <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                <img
                  src='assets/img/user.png'
                  alt='testimonial-img'
                  width={60}
                  height={60}
                  className='h-full w-full object-cover object-center'
                />
              </div>
              <div className='flex flex-col gap-y-1'>
                <span className='block text-lg font-semibold leading-[1.6]'>
                David Brown
                </span>
                <span className='block text-sm font-light leading-[1.4]'>
                Small Business Owner in the Communitys
                </span>
              </div>
            </div>
          </div>
          {/* Testimonial Item */}
          {/* Testimonial Item */}
        </div>
        {/* Testimonial List */}
      </div>
    </section>
  );
};

export default Testimonial;
