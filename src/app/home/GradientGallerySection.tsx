"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export interface GalleryItem {
  id: string;
  gradient: string;
}

export interface GalleryProps {
  items: GalleryItem[];
}

function GradientGallerySection({ items }: GalleryProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  

  
  return (
    <section className="mt-6">
      <div className="container mb-8">
        <div className="flex flex-col gap-2">
          <h2 className="heading-medium">Gradient Gallery</h2>
          <p className="subtext-muted">Pre-generated gradients and user favorites.</p>
        </div>
      </div>
      <div className="container relative overflow-hidden" ref={carouselRef}>
        <motion.div 
          className="flex gap-4 cursor-grab active:cursor-grabbing"
          style={{ width: "fit-content" }}
          drag="x"
          dragConstraints={carouselRef}
          dragElastic={0.05}
          dragTransition={{ power: 0.2, timeConstant: 400 }}
        >
          {/* First set of items */}
          <div className="flex gap-4">
            {items.map((item) => (
              <div 
                key={item.id} 
                className="relative overflow-hidden rounded-lg w-[300px] flex-shrink-0"
              >
                <div
                  className="aspect-video w-full"
                  style={{ background: item.gradient }}
                />
                <div className="absolute bottom-3 right-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-white/80 hover:bg-white hover:scale-105 transition-transform hover:cursor-grab"
                    onClick={() => window.location.href = `/create?gradient=${encodeURIComponent(item.gradient)}`}
                  >
                    Use this <ArrowRight className="ml-1 h-4 w-4 cursor-pointer" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Duplicate set for infinite scroll effect */}
          <div className="flex gap-4">
            {items.map((item) => (
              <div 
                key={`${item.id}-dup`} 
                className="relative overflow-hidden rounded-lg w-[300px] flex-shrink-0"
              >
                <div
                  className="aspect-video w-full"
                  style={{ background: item.gradient }}
                />
                <div className="absolute bottom-3 right-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-white/80 hover:bg-white hover:scale-105 transition-transform hover:cursor-grab"
                    onClick={() => window.location.href = `/create?gradient=${encodeURIComponent(item.gradient)}`}
                  >
                    Use this <ArrowRight className="ml-1 h-4 w-4 cursor-pointer" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default GradientGallerySection;
