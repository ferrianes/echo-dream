import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Fragment, useState } from 'react';
import cx from 'classnames';

const payWith = [
  { id: 1, name: 'Bank Transfer' },
  { id: 2, name: 'PayPal' },
  { id: 3, name: 'VISA' },
];

export default function ListPayWith() {
  const [selectedPayWith, setSelectedPayWith] = useState(payWith[0]);

  return (
    <Listbox value={selectedPayWith} onChange={setSelectedPayWith}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded cursor-default border border-sky-900 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-slate-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
          <span className="block truncate">{selectedPayWith.name}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {payWith.map((item) => (
              <Listbox.Option key={item.id} value={item}>
                {({ active, selected }) => (
                  <div className={cx({
                    'cursor-default select-none relative py-2 pl-10 pr-4': true,
                    'text-sky-900 bg-sky-100': active,
                    'text-gray-900': !active,
                  })}
                  >
                    <span className={cx({
                      'block truncate': true,
                      'font-medium': selected,
                      'font-normal': !selected,
                    })}
                    >
                      {item.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-600">
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
