import { getDictionary } from '@/utils/i18n/dictionary';

import Cart1Component from '@/components/cart/1';
import Cart2Component from '@/components/cart/2';
import Cart3Component from '@/components/cart/3';
import Cart4Component from '@/components/cart/4';
import Cart5Component from '@/components/cart/5';
import Cart6Component from '@/components/cart/6';
import Cart7Component from '@/components/cart/7';
import Cart8Component from '@/components/cart/8';
import LanguagePickerComponent from '@/components/languagePicker';

export default async function HomePage({ params }: {
  params: Promise<{
    lang: string;
  }>
}) {
  const { lang } = await params;

  const t = await getDictionary(lang);

  return (
    <>
      <main className="h-screen md:center py-0">
        <div className="select-none font-bold grid grid-cols-12 lg:grid-cols-[repeat(4,minmax(0,300px))] gap-4 lg:grid-rows-[repeat(8,minmax(0,60px))] p-5 lg:p-0">
          <Cart1Component {...{ t }} />
          <Cart2Component {...{ t }} />
          <Cart3Component {...{ t }} />
          <Cart4Component {...{ t }} />
          <Cart5Component {...{ t }} />
          <Cart6Component />
          <Cart7Component {...{ t }} />
          <Cart8Component />
          <LanguagePickerComponent {...{ lang }} />
        </div>
      </main>
    </>
  );
}