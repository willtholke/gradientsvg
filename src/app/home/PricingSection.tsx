"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Tilt from 'react-parallax-tilt';

const PricingSection = () => {
  return (
    <section className="mt-6 mb-8">
      <div className="mx-auto">
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="heading-medium">Pricing</h2>
          <p className="subtext-muted">Simple and transparent.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex w-full flex-col md:flex-row items-stretch gap-6">
            <Tilt
              className="w-full hover:z-10 relative"
              perspective={1000}
              scale={1.02}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glareEnable={true}
              glareMaxOpacity={0.08}
              glareColor="white"
              glarePosition="all"
              glareBorderRadius="8px"
              transitionSpeed={400}
            >
              <div className="flex w-full flex-col rounded-lg border p-6 text-left h-full">
                <Badge className="mb-6 block w-fit">PRO</Badge>
                <span className="text-4xl font-medium">$0</span>
                <p className="text-muted-foreground">Forever</p>
                <Separator className="my-6" />
                <div className="flex flex-col justify-between gap-8 h-full">
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="size-4" />
                      <span>Unlimited gradients</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-4" />
                      <span>Export to SVG, PNG, ICO, JPG, JPEG, & WebP</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-4" />
                      <span>Custom colors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-4" />
                      <span>No attribution required</span>
                    </li>
                  </ul>
                  <Button asChild>
                    <Link href="/create">Start creating <ArrowUpRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </Tilt>
            
            <Tilt
              className="w-full hover:z-10 relative"
              perspective={1000}
              scale={1.02}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glareEnable={true}
              glareMaxOpacity={0.08}
              glareColor="white"
              glarePosition="all"
              glareBorderRadius="8px"
              transitionSpeed={400}
            >              
              <div className="flex w-full flex-col rounded-lg border bg-muted p-6 text-left h-full">
                <Badge className="mb-6 block w-fit">ELITE</Badge>
                <span className="text-4xl font-medium">$0</span>
                <p className="text-muted-foreground">Still forever</p>
                <Separator className="my-6" />
                <div className="flex flex-col justify-between gap-8 h-full">
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="size-4" />
                      <span>Everything in Pro</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-4" />
                      <span>Imaginary 24/7 support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-4" />
                      <span>Ability to say &quot;I&apos;m ELITE&quot;</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-4" />
                      <span>Virtual high-fives</span>
                    </li>
                  </ul>
                  <Button variant="outline" disabled>
                    Become Elite
                  </Button>
                </div>
              </div>
            </Tilt>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
