import { StarIcon } from '@heroicons/react/solid';
import cx from 'classnames';

export default function Rating({ star, align, className }) {
  const ratingClass = cx(className, {
    'flex flex-row': true,
    'justify-start': align === 'left',
    'justify-center': align === 'center',
    'justify-end': align === 'end',
  });

  return (
    <div className={ratingClass}>
      {[...Array(5)].map((value, index) => {
        if (index < Math.floor(star)) {
          return <StarIcon key={index} className="fill-yellow-500 h-8 w-8" />;
        } else {
          return <StarIcon key={index} className="fill-transparent stroke-yellow-500 stroke-[1.5] h-8 w-8" />;
        }
      })}
    </div>
  );
}
