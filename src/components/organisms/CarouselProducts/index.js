import { Cards } from 'components/molecules';

function CarouselProducts({ title }) {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4">
      <div className="flex flex-col gap-3">
        <h4 className="text-2xl font-medium">{title}</h4>
        <Cards />
      </div>
    </div>
  );
}

export default CarouselProducts;
