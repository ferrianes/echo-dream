import cx from 'classnames';

export default function Footer({ className }) {
  return (
    <footer className={cx('border-t-2 mt-8 bg-slate-50 sm:bg-slate-100', className)}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-x-4 gap-y-6">
          <div className="flex flex-col gap-1 w-full sm:w-[calc(((100%+1rem)/4)-1rem)]">
            <h5 className="font-bold text-lg">FEATURES</h5>
            <ul className="space-y-0.5">
              <li className="underline"><a href="#">Reviews</a></li>
              <li className="underline"><a href="#">Community</a></li>
              <li className="underline"><a href="#">Social Media Kit</a></li>
              <li className="underline"><a href="#">Affiliate</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-1 w-full sm:w-[calc(((100%+1rem)/4)-1rem)]">
            <h5 className="font-bold text-lg">ACCOUNT</h5>
            <ul className="space-y-0.5">
              <li className="underline"><a href="#">Refund</a></li>
              <li className="underline"><a href="#">Security</a></li>
              <li className="underline"><a href="#">Rewards</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-1 w-full sm:w-[calc(((100%+1rem)/4)-1rem)]">
            <h5 className="font-bold text-lg">COMPANY</h5>
            <ul className="space-y-0.5">
              <li className="underline"><a href="#">Career</a></li>
              <li className="underline"><a href="#">Help Center</a></li>
              <li className="underline"><a href="#">Media</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-1 w-full sm:w-[calc(((100%+1rem)/4)-1rem)]">
            <h5 className="font-bold text-lg">GET CONNECTED</h5>
            <ul className="space-y-0.5">
              <li className="underline"><a href="#">Tokyo</a></li>
              <li className="underline"><a href="#">Japan</a></li>
              <li className="underline"><a href="#">0812-9162-0221</a></li>
              <li className="underline"><a href="#">support@echodream.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-center">Copyright © 2022 Echo Dream Inc.</p>
        </div>
      </div>
    </footer>
  );
}
