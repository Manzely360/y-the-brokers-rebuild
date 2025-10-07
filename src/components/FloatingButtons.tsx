import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed right-4 md:right-8 bottom-8 z-40 flex flex-col gap-4">
      <a
        href="tel:+201234567890"
        className="w-14 h-14 rounded-full bg-brand-orange hover:bg-brand-orange-hover shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>

      <a
        href="https://wa.me/201234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
