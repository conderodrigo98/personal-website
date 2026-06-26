'use client'

import { TypeAnimation } from 'react-type-animation';

const typingSequence = [
  'I craft apps that solve your problems.',
  2000,
  'I craft apps that make your work easier.',
  2000,
  'I craft apps that push your ideas forward.',
  2000,
] as const;

export default function HomeTypingLine() {
  return (
    <TypeAnimation
      aria-label="I craft apps that solve your problems, make your work easier, and move your ideas forward."
      className="inline"
      cursor
      deletionSpeed={65}
      preRenderFirstString={false}
      repeat={Infinity}
      sequence={typingSequence}
      speed={55}
      wrapper="span"
    />
  );
}
