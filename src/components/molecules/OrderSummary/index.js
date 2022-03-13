import { Dialog, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { ShieldCheckIcon } from '@heroicons/react/solid';
import { Fragment, useState } from 'react';

export default function OrderSummary() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full sm:w-[calc(33.333333%-0.5rem)] sm:sticky sm:top-20 h-max sm:border sm:p-4 sm:rounded-lg">
        <div className="flex flex-col gap-y-0.5">
          <div className="hidden sm:flex justify-between">
            <span>Subtotal (1 item)</span>
            <span>US $639.97</span>
          </div>
          <div className="hidden sm:flex justify-between">
            <span>Shipping</span>
            <span>US $121.00</span>
          </div>
          <hr className="my-2 border-t" />
          <div className="flex justify-between sm:flex-col pt-2 sm:pt-0 gap-3">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <span className="text-gray-500 text-sm sm:text-slate-900 sm:font-semibold sm:text-lg">
                Order Total
              </span>
              <div>
                <span className="font-semibold text-lg pr-2 sm:p-0">US $760.97</span>
                <ChevronDownIcon className="sm:hidden h-4 w-4 inline-block align-baseline" onClick={() => setIsOpen(true)} />
              </div>
            </div>
            <button type="button" className="btn btn-info">
              <ShieldCheckIcon />
              Let&apos;s Pay
            </button>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="w-full absolute bottom-0 p-6 overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-t-2xl">
                <div className="flex flex-col gap-y-0.5">
                  <div className="flex justify-between">
                    <span>Subtotal (1 item)</span>
                    <span className="font-semibold">US $639.97</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-semibold">US $121.00</span>
                  </div>
                  <hr className="my-2 border-t" />
                  <div className="flex justify-between">
                    <span>Order Total</span>
                    <span className="font-semibold">US $760.97</span>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
