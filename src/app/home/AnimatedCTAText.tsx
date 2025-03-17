"use client";

import React, { useEffect, useState } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';

const AnimatedCTAText = () => {
  const text = "Generate beautiful, infinitely scalable gradient SVGs for your personal brand and visual identity.";
  const className = "text-2xl md:text-3xl lg:text-4xl mb-4 max-w-2xl mx-auto text-gray-900 overflow-hidden whitespace-pre-wrap";
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const [scope, animate] = useAnimate();
  const words = text.split(' ');
  
  useEffect(() => {
    if (isMounted) {
      animate(
        'span',
        { 
          opacity: 1,
          y: 0,
          filter: 'blur(0px)'
        },
        { 
          duration: 0.03,
          delay: stagger(0.01),
          ease: [0.22, 1, 0.36, 1]
        }
      );
    }
  }, [animate, isMounted]);

  return (
    <h1 
      ref={scope} 
      className={className}
    >
      {words.map((word, wordIndex) => (
        <React.Fragment key={`word-${wordIndex}`}>
          {wordIndex > 0 && (
            <motion.span 
              className="inline-block"
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              style={{ display: 'inline-block' }}
            >
              {' '}
            </motion.span>
          )}
          <span className="inline-block whitespace-nowrap">
            {word.split('').map((char, charIndex) => {
              // TODO: Fix this to be more scalable
              // Check if we're at the words "infinitely" or "scalable" to apply italic styling
              const isItalicWord = word === 'infinitely' || word === 'scalable';
              return (
                <motion.span
                  key={`char-${wordIndex}-${charIndex}`}
                  initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                  className={isItalicWord ? 'italic' : ''}
                  style={{ display: 'inline-block' }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        </React.Fragment>
      ))}
    </h1>
  );
};

export default AnimatedCTAText;
