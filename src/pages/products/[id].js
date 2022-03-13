import { Tab } from '@headlessui/react';
import {
  CalendarIcon, EyeIcon, HeartIcon, LocationMarkerIcon, ShoppingBagIcon, ShoppingCartIcon, SparklesIcon, TruckIcon, ViewGridIcon,
} from '@heroicons/react/outline';
import { Rating } from 'components/atoms';
import { ButtonRadioGroup } from 'components/molecules';
import { ListsProduct, TabProduct } from 'components/organisms';
import { AppLayout } from 'components/templates';
import Link from 'next/link';

function Product() {
  const data = {
    thumb: 'https://i.ebayimg.com/images/g/Md4AAOSwjeJdw8lB/s-l1600.jpg',
    title: 'ESP Random Star Kasumi Touyama',
    rating: 4,
    desc: 'ESP RANDOM STAR Kasumi used by Poppin\'Party guitar and vocalist Kasumi Toyama (CV: Aimi). This model is a version without LEDs embedded in the fingerboard and the star of the body. The basic part is almost the same specification as the random star used by Kasumi Toyama in the play, the alder body and the hard maple 3P neck are jointed by a bolt-on method, and the rosewood fingerboard has a star-shaped inlay. increase. The pickup is equipped with a combination of Seymour Duncan SH-1 and SH-4. The bridge and tailpiece are a traditional combination of GOTOH\'s GE103B-T and GE101Z. It has a simple master volume, master tone, pickup selector, and a mini switch control configuration for turning the pickup on and off.',
    spec: [{
      key: 'Body',
      value: 'Alder',
    }, {
      key: 'Neck',
      value: 'Hard Maple 3P',
    }, {
      key: 'Fingerboard',
      value: 'Rosewood'
    }, {
      key: 'Radius',
      value: '305R'
    }, {
      key: 'Scale',
      value: '628mm'
    }, {
      key: 'Nut',
      value: 'Bone(42mm)'
    }, {
      key: 'Inlay',
      value: 'STAR'
    }, {
      key: 'Fret',
      value: 'JESCAR FW57110-NS, 22 Frets'
    }, {
      key: 'Construction',
      value: 'Bolt-on'
    }, {
      key: 'Tuner',
      value: 'GOTOH SG360-07 MG-TGOTOH SG360-07 MG-T'
    }, {
      key: 'Bridge',
      value: 'GOTOH GE103B-T & GE101Z'
    }, {
      key: 'Pickups',
      value: '(Neck) Seymour Duncan SH-1n, (Bridge) Seymour Duncan SH-4'
    }, {
      key: 'Parts Color',
      value: 'Chrome'
    }, {
      key: 'Controls',
      value: 'Master Volume, Master Tone, Mini Toggle PU Selector, PU ON/OFF Switch'
    }, {
      key: 'Color',
      value: 'Kasumi Red'
    }, {
      key: 'Coming With',
      value: 'Certificate, Gig Bag, Pick, Strap'
    }],
    price: 'US $639.97',
  };

  const payment = [
    {
      name: 'VISA',
    },
    {
      name: 'Master Card',
    },
    {
      name: 'PayPal',
    },
    {
      name: 'Bank Transfer',
    },
  ];

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap gap-4">
          <div className="w-full sm:w-[calc(((90%+1rem)/2)-1rem)] sm:sticky sm:top-20 h-max bg-white">
            <ListsProduct data={data} />
          </div>
          <div className="w-full sm:w-[calc(((110%+1rem)/2)-1rem)] pt-4 sm:pt-8">
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="font-semibold text-xl mb-2">{data.title}</h1>
                <Rating star={4} />
              </div>
              <div>
                <h4 className='font-semibold text-3xl'>{data.price}</h4>
              </div>
              <div>
                <TabProduct desc={data.desc} spec={data.spec} />
              </div>
              <hr className='mb-3 border-t'/>
              <div>
                <ButtonRadioGroup title="Payment" lists={payment} />
              </div>
              <hr className="my-4 border-t" />
              <div className="flex flex-wrap justify-between gap-y-4 divide-x px-6 sm:px-0">
                <div className="w-1/2 sm:w-1/3">
                  <label className="text-xs sm:text-sm">Shipping From</label>
                  <div className="flex gap-1">
                    <LocationMarkerIcon className="h-4 w-4 -mt-[0.5px] sm:mt-[3px]" />
                    <p className="text-xs sm:text-base font-semibold">Osaka City, Japan</p>
                  </div>
                </div>
                <div className="w-1/2 sm:w-1/3 text-right sm:text-center">
                  <label className="text-xs sm:text-sm">Condition</label>
                  <div className="flex flex-row-reverse sm:flex-row justify-start sm:justify-center gap-1">
                    <SparklesIcon className="h-4 w-4 my-auto" />
                    <p className="text-xs sm:text-base font-semibold">New</p>
                  </div>
                </div>
                <div className="w-1/2 sm:w-1/3 sm:text-right !border-l-0 sm:!border-l">
                  <label className="text-xs sm:text-sm">Guarantee</label>
                  <div className="flex sm:flex-row-reverse gap-1">
                    <CalendarIcon className="h-4 w-4 -mt-[1px] sm:mt-[2.5px]" />
                    <p className="text-xs sm:text-base font-semibold">30 Days</p>
                  </div>
                </div>
                <div className="w-1/2 sm:w-1/3 text-right sm:text-left sm:!border-l-0">
                  <label className="text-xs sm:text-sm">Category</label>
                  <div className="flex flex-row-reverse sm:flex-row gap-1">
                    <ViewGridIcon className="h-4 w-4 my-auto" />
                    <p className="text-xs sm:text-base font-semibold">Guitar</p>
                  </div>
                </div>
                <div className="w-1/2 sm:w-1/3 sm:text-center !border-l-0 sm:!border-l">
                  <label className="text-xs sm:text-sm">Watchers</label>
                  <div className="flex sm:justify-center gap-1">
                    <EyeIcon className="h-4 w-4 -mt-[1px] sm:mt-[2.5px]" />
                    <p className="text-xs sm:text-base font-semibold">196</p>
                  </div>
                </div>
                <div className="w-1/2 sm:w-1/3 text-right">
                  <label className="text-xs sm:text-sm">Est. Arrive</label>
                  <div className="flex flex-row-reverse gap-1">
                    <TruckIcon className="h-4 w-4 my-auto" />
                    <p className="text-xs sm:text-base font-semibold">10-20 Days</p>
                  </div>
                </div>
              </div>
              <hr className="my-4 border-t" />
              <div className="flex flex-col gap-3">
                <Link href='/buy-now'>
                  <a className="btn btn-info">
                    <ShoppingBagIcon />
                    Buy It Now
                  </a>
                </Link>
                <button className="btn btn-primary" type="button">
                  <ShoppingCartIcon />
                  Add to Cart
                </button>
                <button className="btn btn-outline-primary" type="button">
                  <HeartIcon />
                  Add to Watchlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Product;
