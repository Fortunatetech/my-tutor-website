// src/components/services/ServiceHeader.tsx
'use client';

import React from 'react';
import PriceTag from '@/components/ui/PriceTag';
import BookServiceButton from '@/components/services/BookServiceButton';
import { Service } from '@/data/services';
import TrustRow from '@/components/TrustRow';

type Props = {
  service: Service;
};

export default function ServiceHeader({ service }: Props) {
  return (
    <header className="mb-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="md:flex-1">
          <h1 className="text-4xl font-extrabold text-brand-900 leading-tight">{service.title}</h1>
          {service.subservices && (
            <div className="mt-2 text-sm text-neutral-700">
              <strong className="mr-2">Covers:</strong>
              {service.subservices.slice(0, 6).join(' • ')}
            </div>
          )}

          {/* short, thrilling description */}
          <p className="mt-4 text-neutral-600 max-w-prose">
            {service.desc}
            {service.heroMetric ? (
              <span className="block mt-2 text-brand-500 font-medium">{service.heroMetric}</span>
            ) : null}
          </p>

          {/* Trust row placed under description for immediate social proof */}
          <div className="mt-4">
            <TrustRow />
          </div>
        </div>

        {/* Top-right price + book */}
        <div className="flex-shrink-0 w-full md:w-auto md:text-right">
          <div className="inline-block text-left md:text-right">
            <div className="text-sm text-neutral-600">Starting at</div>
            <div className="mt-1">
              <PriceTag original={service.priceOriginal} current={service.price} />
            </div>

            <div className="mt-4">
              <BookServiceButton serviceId={service.id} className="px-4 py-3 rounded-lg bg-orange-500 text-white">
                Book consultation
              </BookServiceButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}







// src/components/services/ServiceDetailSections/ServiceHeader.tsx
// 'use client';
// import React from 'react';
// import PriceTag from '@/components/ui/PriceTag';
// import BookServiceButton from '@/components/services/BookServiceButton';

// export default function ServiceHeader({
//   service,
// }: {
//   service: import('@/data/services').Service;
// }) {
//   return (
//     <header className="mb-6">
//       <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
//         <div>
//           <h1 className="text-4xl font-extrabold text-brand-900">{service.title}</h1>
//           {service.subservices && <p className="mt-2 text-sm text-neutral-700">{service.subservices.join(' • ')}</p>}
//           {service.heroMetric && <div className="mt-3 text-sm text-brand-500">{service.heroMetric}</div>}
//           <p className="mt-4 text-neutral-600 max-w-2xl">{service.desc}</p>
//         </div>

//         <div className="text-right">
//           <PriceTag original={service.priceOriginal} current={service.price} />
//           <div className="mt-4">
//             <BookServiceButton serviceId={service.id}>Book a consultation</BookServiceButton>
//           </div>
//         </div>
//       </div>

//       <div className="mt-4 text-sm text-neutral-600">Trusted by 1,200+ learners • Avg rating 4.9/5</div>
//     </header>
//   );
//}
