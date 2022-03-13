import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import cx from 'classnames';

export default function ButtonRadioGroup({ title, lists }) {
  const [state, setState] = useState(0);

  return (
    <RadioGroup value={state} onChange={setState}>
      <RadioGroup.Label className="inline-block mb-3">{title}</RadioGroup.Label>
      <div className="flex flex-wrap gap-2">
        {lists.map((list, index) => (
          <RadioGroup.Option
            key={index}
            value={list.name}
          >
            {({ active, checked }) => (
              <button
                type="button"
                className={cx({
                  'ring ring-slate-500': active,
                  'bg-slate-900 text-white': checked,
                  'hover:bg-slate-900 hover:text-white': !checked,
                  'px-4 py-2 border border-slate-900 rounded transition': true,
                })}
              >
                {list.name}

              </button>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
