import { CarouselProducts, HomeMainBanner } from 'components/organisms';
import { AppLayout } from 'components/templates';

export default function Home() {
  return (
    <AppLayout>

      <HomeMainBanner />

      <CarouselProducts title="Poppin Party" />
      <CarouselProducts title="Roselia" />
    </AppLayout>
  );
}
