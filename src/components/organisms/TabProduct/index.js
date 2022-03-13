import { Tab } from '@headlessui/react';
import cx from 'classnames';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';

export default function TabProduct({ desc, spec }) {
  const [isOpenDesc, setIsOpenDesc] = useState(false);
  const [isOpenSpec, setIsOpenSpec] = useState(false);

  return (
    <Tab.Group>
      <Tab.List className="flex border-b">
        <Tab
          className={({ selected }) => cx({
            'w-full py-2.5 text-sm leading-5 font-medium rounded-tl-lg rounded-tr-lg': true,
            'bg-slate-900 text-white': selected,
          })}
        >
          Description
        </Tab>
        <Tab
          className={({ selected }) => cx({
            'w-full py-2.5 text-sm leading-5 font-medium rounded-tl-lg rounded-tr-lg': true,
            'bg-slate-900 text-white': selected,
          })}
        >
          Specification
        </Tab>
      </Tab.List>
      <Tab.Panels className="mt-3">
        <Tab.Panel>
          <p className={cx({
            'text-sm leading-loose': true,
            'line-clamp-3': !isOpenDesc,
          })}
          >
            {desc}
          </p>
          <button type="button" className="text-sm font-semibold" onClick={() => setIsOpenDesc(!isOpenDesc)}>{isOpenDesc ? 'See Less' : 'See More'}</button>
        </Tab.Panel>
        <Tab.Panel>
          <table className="table-auto w-full">
            <tbody>
              {
              spec.filter((item, index) => index < (!isOpenSpec ? 5 : spec.length))
                .map((item, index) => (
                  <tr key={index}>
                    <th className="border text-sm border-slate-300 p-1.5 border-l-0 w-1/4 text-right">{item.key}</th>
                    <td className="border text-sm border-slate-300 p-1.5 border-r-0 w-3/4 text-left">{item.value}</td>
                  </tr>
                ))
              }
              {
              spec.length > 5
                && (
                <>
                  {!isOpenSpec && (
                  <tr>
                    <td className="border text-sm border-slate-300 p-1.5 border-l-0 w-1/4 text-right">...</td>
                    <td className="border text-sm border-slate-300 p-1.5 border-r-0 w-3/4 text-left">...</td>
                  </tr>
                  )}
                  <tr>
                    <td colSpan="2" className="border border-slate-300 p-1.5 border-r-0 border-l-0 leading-[0px]">
                      <button type="button" className="w-full" onClick={() => setIsOpenSpec(!isOpenSpec)}>
                        {isOpenSpec
                          ? <ChevronUpIcon className="h-5 w-5 mx-auto stroke-1" />
                          : <ChevronDownIcon className="h-5 w-5 mx-auto stroke-1" />}
                      </button>
                    </td>
                  </tr>
                </>
                )
              }
            </tbody>
          </table>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
