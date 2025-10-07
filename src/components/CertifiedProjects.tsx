import { Building2, Building, Waves, ArrowRight } from 'lucide-react';

export default function CertifiedProjects() {
  const projects = [
    {
      icon: Building2,
      title: 'RESIDENTIAL',
      description: 'Premium apartments and villas in prime locations',
      link: '#residential',
    },
    {
      icon: Building,
      title: 'COMMERCIAL',
      description: 'Office spaces and retail properties',
      link: '#commercial',
    },
    {
      icon: Waves,
      title: 'COASTAL',
      description: 'Beachfront properties and resorts',
      link: '#coastal',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-brand-dark mb-16">
          Certified Projects By Y The Brokers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-brand-orange hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-brand-orange flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-center text-brand-dark mb-4 tracking-wider">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  className="flex items-center justify-center gap-2 text-brand-orange hover:text-brand-orange-hover font-medium transition-colors duration-200 group-hover:gap-3"
                >
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
