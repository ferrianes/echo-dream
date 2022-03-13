import { AppLayout } from 'components/templates';
import Image from 'next/image';
import { ListPayWith, OrderSummary, Shipping } from 'components/molecules';

export default function BuyNow() {
  const data = {
    thumb: 'https://i.ebayimg.com/images/g/Md4AAOSwjeJdw8lB/s-l1600.jpg',
    title: 'ESP Random Star Kasumi Touyama',
    rating: 4,
    price: 'US $639.97',
  };

  return (
    <AppLayout mobileWithoutFooter>
      <div className="max-w-7xl sm:max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-4">
        <h1 className="font-bold text-xl mb-4">Buy Now</h1>
        <div className="flex flex-wrap gap-4">
          <div className="w-full sm:w-[calc(66.666667%-0.5rem)] flex flex-wrap gap-6">
            <div className="w-full flex flex-col">
              <p className="font-semibold mb-3">Review Item and Shipping</p>
              <div className="w-full flex flex-wrap gap-x-4">
                <div className="w-[calc(20%-0.5rem)] sm:w-[10%]">
                  <Image className="rounded" src={data.thumb} width="100%" height="100%" layout="responsive" objectFit="cover" alt="card" />
                </div>
                <div className="w-[calc(80%-0.5rem)] sm:w-[calc(90%-1rem)]">
                  <p className="mb-1 sm:mb-0.5">{data.title}</p>
                  <span className="font-semibold mb-1 sm:mb-0.5 block">{data.price}</span>
                  <span className="text-gray-500">Quantity : 1</span>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col">
              <p className="font-semibold mb-3">Delivery</p>
              <div className="w-full">
                <Shipping />
              </div>
            </div>
            <div className="w-full flex flex-col">
              <p className="font-semibold mb-3">Ship to</p>
              <div className="w-full text-sm">
                <span className="block font-medium">Ferrian (0881240148)</span>
                <span className="block text-gray-500">Jl.Iman/Gg. Al-Huda RT 10 RW 05 No.20, Kel. Cibubur, Kec. Ciracas, Jakarta Timur</span>
                <span className="block text-gray-500">Indonesia</span>
              </div>
            </div>
            <div className="w-full flex flex-col">
              <p className="font-semibold mb-3">Pay With</p>
              <div className="w-full">
                <ListPayWith />
              </div>
            </div>
          </div>
          <OrderSummary />
        </div>
      </div>
    </AppLayout>
  );
}
