/* eslint-disable import/no-extraneous-dependencies */
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import '@splidejs/splide/dist/css/splide.min.css';

function HomeMainBanner() {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-3">
      <div className="overflow-hidden rounded-3xl my-5 sm:border-b-8 sm:border-r-8 sm:border-gray-300">
        <Splide options={{ rewind: true, autoplay: true, interval: 3000 }}>
          <SplideSlide>
            <Image src="https://espguitars.co.jp/wp-content/uploads/2020/08/roselia4_bg.jpg" width="100%" height={38} layout="responsive" objectFit="cover" objectPosition="top" alt="card" />
          </SplideSlide>
          <SplideSlide>
            <Image src="https://espguitars.co.jp/wp-content/uploads/2020/08/poppinparty4_bg.jpg" width="100%" height={38} layout="responsive" objectFit="cover" objectPosition="top" alt="card" />
          </SplideSlide>
          <SplideSlide>
            <Image src="https://espguitars.co.jp/wp-content/uploads/2020/08/afterglow4_bg.jpg" width="100%" height={38} layout="responsive" objectFit="cover" objectPosition="top" alt="card" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default HomeMainBanner;
