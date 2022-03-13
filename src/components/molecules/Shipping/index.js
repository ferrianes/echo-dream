import { RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import cx from 'classnames';

const shippings = [
  {
    name: 'Standard International Shipping',
    est: 'Mar 20 - Mar 31',
    price: 'US $121.00',
  },
  {
    name: 'Economy International Shipping',
    est: 'Mar 21 - Apr 3',
    price: 'US $319.00',
  },
];

export default function Shipping() {
  const [selected, setSelected] = useState(shippings[0].name);

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
      <div className="space-y-2">
        {shippings.map((shipping) => (
          <RadioGroup.Option
            key={shipping.name}
            value={shipping.name}
            className={({ active, checked }) => cx({
              'ring ring-sky-300 ring-opacity-60': active,
              'bg-sky-900 text-white': checked,
              'border border-sky-900 bg-white': !checked,
              'relative rounded-lg px-5 py-4 cursor-pointer flex focus:outline-none': true,
            })}
          >
            {({ checked }) => (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <div className="text-sm">
                    <RadioGroup.Label
                      as="p"
                      className={cx({
                        'text-gray-900': !checked,
                        'font-medium': true,
                      })}
                    >
                      {shipping.name}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className={cx({
                        'text-sky-100': checked,
                        'text-gray-500': !checked,
                        inline: true,
                      })}
                    >
                      <span>
                        Est. delivery
                        {' '}
                        {shipping.est}
                      </span>
                      {' '}
                      <span aria-hidden="true">&middot;</span>
                      {' '}
                      <span className="font-semibold">{shipping.price}</span>
                    </RadioGroup.Description>
                  </div>
                </div>
                {checked ? (
                  <div className="flex-shrink-0 text-white">
                    <CheckCircleIcon className="h-6 w-6" />
                  </div>
                ) : (
                  <div className="flex-shrink-0 text-sky-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                )}
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
