/* eslint-disable import/no-extraneous-dependencies */
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import '@splidejs/splide/dist/css/splide.min.css';

export default function ListsProduct({ data }) {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  return (
    <>
      <Splide
        ref={mainRef}
        options={{
          arrows: false,
          rewind: true,
          cover: true,
        }}
        className="overflow-hidden rounded-lg mb-2"
      >
        <SplideSlide>
          <Image src={data.thumb} width="100%" height="100%" layout="responsive" objectFit="cover" alt="card" />
        </SplideSlide>
        <SplideSlide>
          <Image src={data.thumb} width="100%" height="100%" layout="responsive" objectFit="cover" alt="card" />
        </SplideSlide>
        <SplideSlide>
          <Image src={data.thumb} width="100%" height="100%" layout="responsive" objectFit="cover" alt="card" />
        </SplideSlide>
        <SplideSlide>
          <Image src={data.thumb} width="100%" height="100%" layout="responsive" objectFit="cover" alt="card" />
        </SplideSlide>
        <SplideSlide>
          <Image src={data.thumb} width="100%" height="100%" layout="responsive" objectFit="cover" alt="card" />
        </SplideSlide>
        <SplideSlide>
          <Image src={data.thumb} width="100%" height="100%" layout="responsive" objectFit="cover" alt="card" />
        </SplideSlide>
      </Splide>
      <Splide
        ref={thumbsRef}
        id="thumbs-splider"
        options={{
          // rewind: true,
          fixedWidth: 104,
          // fixedHeight: 58,
          isNavigation: true,
          gap: 10,
          pagination: false,
          cover: true,
          dragMinThreshold: {
            mouse: 4,
            touch: 10,
          },
          breakpoints: {
            640: {
              fixedWidth: 66,
              // fixedHeight: 38,
            },
          },
        }}
      >
        <SplideSlide>
          <Image src={data.thumb} width="64" height="64" layout="responsive" objectFit="cover" alt="card" />
        </SplideSlide>
        <SplideSlide>
          <Image src={data.thumb} width="64" height="64" layout="responsive" objectFit="cover" alt="card" />
        </SplideSlide>
        <SplideSlide>
          <Image src={data.thumb} width="64" height="64" layout="responsive" objectFit="cover" alt="card" />
        </SplideSlide>
        <SplideSlide>
          <Image src={data.thumb} width="64" height="64" layout="responsive" objectFit="cover" alt="card" />
        </SplideSlide>
        <SplideSlide>
          <Image src={data.thumb} width="64" height="64" layout="responsive" objectFit="cover" alt="card" />
        </SplideSlide>
        <SplideSlide>
          <Image src={data.thumb} width="64" height="64" layout="responsive" objectFit="cover" alt="card" />
        </SplideSlide>
      </Splide>
    </>
  );
}
