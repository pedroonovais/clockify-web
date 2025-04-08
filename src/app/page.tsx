"use client";
import React from 'react';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Comparison } from '@/components/comparison';
import { Stats } from '@/components/stats';
import { HowItWorks } from '@/components/how-it-works';
import { Clients } from '@/components/clients';
import { Integrations } from '@/components/integrations';
import { Pricing } from '@/components/pricing';
import { FAQ } from '@/components/faq';
import { Newsletter } from '@/components/newsletter';
import { CTA } from '@/components/cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return <div className="min-h-screen bg-gray-900 text-gray-50">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Comparison />
        <HowItWorks />
        <Integrations />
        <Pricing />
        <FAQ />
        <Newsletter />
        <CTA />
      </main>
      <Footer />
    </div>;
}