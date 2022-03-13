/* eslint-disable import/no-extraneous-dependencies */
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import Link from 'next/link';
import '@splidejs/splide/dist/css/splide.min.css';
import { Rating } from 'components/atoms';

function Cards() {
  const datas = [
    {
      thumb: 'https://i.ebayimg.com/images/g/Md4AAOSwjeJdw8lB/s-l1600.jpg',
      title: 'ESP Random Star Kasumi Touyama',
      rating: 4,
    },
    {
      thumb: 'https://i.ebayimg.com/images/g/Md4AAOSwjeJdw8lB/s-l1600.jpg',
      title: 'ESP Random Star Kasumi Touyama',
      rating: 4,
    },
    {
      thumb: 'https://i.ebayimg.com/images/g/Md4AAOSwjeJdw8lB/s-l1600.jpg',
      title: 'ESP Random Star Kasumi Touyama',
      rating: 4,
    },
    {
      thumb: 'https://i.ebayimg.com/images/g/Md4AAOSwjeJdw8lB/s-l1600.jpg',
      title: 'ESP Random Star Kasumi Touyama',
      rating: 4,
    },
    {
      thumb: 'https://i.ebayimg.com/images/g/Md4AAOSwjeJdw8lB/s-l1600.jpg',
      title: 'ESP Random Star Kasumi Touyama',
      rating: 4,
    },
    {
      thumb: 'https://i.ebayimg.com/images/g/Md4AAOSwjeJdw8lB/s-l1600.jpg',
      title: 'ESP Random Star Kasumi Touyama',
      rating: 4,
    },
    {
      thumb: 'https://i.ebayimg.com/images/g/Md4AAOSwjeJdw8lB/s-l1600.jpg',
      title: 'ESP Random Star Kasumi Touyama',
      rating: 4,
    },
    {
      thumb: 'https://i.ebayimg.com/images/g/Md4AAOSwjeJdw8lB/s-l1600.jpg',
      title: 'ESP Random Star Kasumi Touyama',
      rating: 4,
    },
  ];

  const slideOptions = {
    mediaQuery: 'min',
    perPage: 3,
    breakpoints: {
      640: {
        perPage: 6,
      },
    },
    perMove: 1,
    gap: '1rem',
    pagination: false,
  };

  slideOptions.arrows = !(datas.length <= slideOptions.perPage);

  return (
    <Splide
      options={slideOptions}
    >
      {datas.map((data, index) => (
        <SplideSlide key={index} className="cursor-pointer">
          <Link href="/products/1">
            <a>
              <Image className="rounded-xl" src={data.thumb} width="100%" height="100%" layout="responsive" objectFit="cover" alt="card" />
              <div className="p-4 text-center">
                <h5 className="font-medium text-slate-900 mb-2">{data.title}</h5>
                <Rating star={4} align="center" />
              </div>
            </a>
          </Link>
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default Cards;
