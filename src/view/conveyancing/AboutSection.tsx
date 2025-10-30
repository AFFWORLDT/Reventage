"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-[#4a3f2c] mb-6 font-serif">
              Conveyancing
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Buying or selling property is one of the biggest financial decisions you’ll make—and our
                conveyancing team is here to make sure it's done right. We manage all the legal, financial, and
                administrative aspects of transferring property ownership. From drafting and reviewing contracts to
                conducting title searches and liaising with all parties involved, we ensure your transaction is
                smooth, transparent, and fully compliant with local regulations.
              </p>

              <p>
                Whether you're a first-time buyer or an experienced investor, we provide clear communication,
                expert guidance, and timely execution every step of the way.
              </p>
            </div>

            <div className="mt-8">
              <Link href="/conveyancing">
                <Button className="bg-[#c8b180] hover:bg-[#a68b5b] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200">
                  Enquire now →
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/selling-resize.webp"
                alt="Professional conveyancing consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
