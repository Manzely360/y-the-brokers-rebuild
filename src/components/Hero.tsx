import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  const [currentWord, setCurrentWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const words = ['COMMERCIAL', 'RESIDENTIAL', 'COASTAL'];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const word = words[wordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 0 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && currentWord === word) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setCurrentWord(
          isDeleting
            ? word.substring(0, currentWord.length - 1)
            : word.substring(0, currentWord.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentWord, wordIndex, isDeleting]);

  return (
    <section id="home" className="relative bg-brand-dark pt-32 pb-20 min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-12">
            <span className="text-white">Explore </span>
            <span className="text-brand-orange">
              {currentWord}
              {showCursor && <span className="text-brand-orange">|</span>}
            </span>
          </h1>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here"
                className="w-full px-6 py-5 pr-40 rounded-full text-gray-800 placeholder-gray-500 bg-white/95 focus:outline-none focus:ring-2 focus:ring-brand-orange text-lg"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-3 rounded-full font-medium transition-all duration-200 flex items-center gap-2">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
