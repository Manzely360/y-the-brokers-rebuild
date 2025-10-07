import { Home, TrendingUp, Key } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Buy A Home',
      description:
        'We bring you the ideal home deal from the country\'s top-notch real estate developers. You get to choose from a variety of options with spaces that fit your needs, facilities that cater to a premium lifestyle and payment plans that make sense.',
    },
    {
      icon: TrendingUp,
      title: 'Sell A Home',
      description:
        'We offer you the best listing in town. Our far-reaching network guarantees you a satisfying process and the highest ROI. In no time, your home will be the most demanded in the market.',
    },
    {
      icon: Key,
      title: 'Rent A Home',
      description:
        'Give us a week\'s notice, and you\'ll be matched with the home of your dreams. You will be able to choose from the most premium locations, the best real estate developers and the most suitable payment plans.',
    },
  ];

  return (
    <section className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          What do you need?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-brand-dark border-2 border-gray-700 rounded-xl p-8 hover:border-brand-orange transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-brand-orange" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-center text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-300 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
