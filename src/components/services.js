import { reader } from '../lib/keystatic';

export default async function Services() {
    const servicesData = await reader.collections.services.all();
    const services = servicesData.map(s => s.entry);

    // fallback content if collection is empty
    const displayServices = services.length > 0 ? services : [
      { title: 'Structural Design', desc: 'Robust and efficient structural engineering that stands the test of time.' },
      { title: 'System Innovation', desc: 'Integrating cutting-edge technology to streamline your core processes.' },
      { title: 'Project Consulting', desc: 'Expert guidance from inception to completion for complex deployments.' },
    ];

    return (
      <section id="services" className="py-24 px-4 bg-slate-50 relative border-t border-slate-200">
        <div className="max-w-6xl mx-auto">

          {/* section title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Our Services</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Comprehensive engineering solutions tailored to meet the unique challenges of your business.</p>
          </div>
          
          {/* services grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayServices.map((service, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <svg className="w-12 h-12 text-corporate-blue" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-corporate-blue">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-6 flex items-center text-orange font-medium group-hover:underline cursor-pointer">
                  Learn more <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      
    );
}