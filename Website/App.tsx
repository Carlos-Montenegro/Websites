import React, { useState, useEffect } from 'react';
import { Page, VideoReel, Credit, TrainingItem, Skill } from './types';
import { HEADSHOT_IMAGES, VIDEO_REELS, FILM_CREDITS, TRAINING, SKILLS, HOME_BG_IMAGE} from './constants';
import { MenuIcon, CloseIcon, DownloadIcon, ExternalLinkIcon, EmailIcon, WhatsAppIcon } from './components/icons';

// SECTION: PAGE COMPONENTS

const Section: React.FC<{id: string, children: React.ReactNode, className?: string}> = ({ id, children, className = '' }) => (
  <section id={id.toLowerCase()} className={`section-min-height w-full flex justify-center pt-16 md:pt-24 ${className}`}>
    <div className="container px-6 md:px-8 max-w-6xl">
      {children}
    </div>
  </section>
);

const SectionTitle: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-center text-white relative pb-4">
    {children}
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 accent-bg rounded-full"></span>
  </h2>
);

const HomePage: React.FC = () => (
  <div className="h-screen w-full flex items-center justify-center text-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${HOME_BG_IMAGE})`}}>
    <div className="text-white animate-fade-in">
      <h1 className="text-5xl md:text-7xl font-black tracking-tight">CARLOS MONTENEGRO</h1>
      <p className="text-xl md:text-2xl mt-4 font-light accent-color tracking-wider">Actor based in Amsterdam</p>
    </div>
  </div>
);

const ActingClipsPage: React.FC = () => (
  <Section id="actingclips">
    <SectionTitle>Acting Clips</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {VIDEO_REELS.map((reel) => (
        <div key={reel.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://www.youtube.com/embed/${reel.id}`}
              title={reel.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-white">{reel.title}</h3>
            {reel.description && <p className="text-gray-400 mt-1">{reel.description}</p>}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const GalleryPage: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <Section id="gallery">
      <SectionTitle>Headshots</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {HEADSHOT_IMAGES.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg cursor-pointer group" onClick={() => setSelectedImg(src)}>
            <img src={src} alt={`Carlos Montenegro Headshot ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"/>
          </div>
        ))}
      </div>
      {selectedImg && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="Enlarged view" className="max-w-full max-h-full p-4 rounded-lg"/>
        </div>
      )}
    </Section>
  );
};

const AboutPage: React.FC = () => (
    <Section id="about">
        <div className="max-w-3xl mx-auto">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                    I bring a unique, cosmopolitan perspective as a vegan, queer person raised in Peru who has also lived in the US, France, Denmark, and the Netherlands.
                </p>
                <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-2xl font-semibold mb-4 text-white">Details</h3>
                    <ul className="space-y-3 text-gray-300">
                        {[
                            { label: 'Location', value: 'Amsterdam, North Holland, Netherlands' },
                            { label: 'Height', value: `5'9" / 175cm` },
                            { label: 'Eyes', value: 'Brown' },
                            { label: 'Playing Age', value: '23 - 37' },
                            { label: 'Ethnicities', value: 'Ethnically Ambiguous / Multiracial, Indigenous Peoples, Latino / Hispanic' },
                        ].map(item => (
                            <li key={item.label}><strong className="font-medium text-white">{item.label}:</strong> {item.value}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </Section>
);

const ResumePage: React.FC = () => {
    const renderCredits = (credits: Credit[]) => (
        <ul className="space-y-4">
            {credits.map((credit, i) => (
                <li key={i} className="grid grid-cols-1 md:grid-cols-3 gap-2 p-3 rounded-md transition-colors hover:bg-gray-800">
                    <span className="font-bold text-white">{credit.title}</span>
                    <span className="text-gray-300">{credit.role}</span>
                    <span className="text-gray-400 text-sm md:text-base">Dir: {credit.director} ({credit.date})</span>
                </li>
            ))}
        </ul>
    );

    const renderTraining = (training: TrainingItem[]) => (
        <ul className="space-y-4">
            {training.map((item, i) => (
                 <li key={i} className="flex flex-col md:flex-row justify-between p-3 rounded-md transition-colors hover:bg-gray-800">
                    <div>
                        <span className="font-bold text-white">{item.institution}: </span>
                        <span className="text-gray-300">{item.course}</span>
                    </div>
                    <span className="text-gray-400 text-sm md:text-base">{item.years}</span>
                </li>
            ))}
        </ul>
    );
    
    const renderSkills = (skills: Skill[]) => (
        <ul className="space-y-4">
            {skills.map((skill, i) => (
                 <li key={i} className="p-3 rounded-md transition-colors hover:bg-gray-800">
                    <span className="font-bold text-white">{skill.category}: </span>
                    <span className="text-gray-300">{skill.details.join(', ')}</span>
                </li>
            ))}
        </ul>
    );

  return (
    <Section id="resume">
      <SectionTitle>Resume</SectionTitle>
      <div className="space-y-12">
        <div className="flex justify-center gap-4 flex-wrap mb-8">
            <a href="https://www.backstage.com/tal/carlos-montenegro" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors">
                View on Backstage <ExternalLinkIcon />
            </a>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white border-l-4 accent-border pl-4">Film</h3>
          {renderCredits(FILM_CREDITS)}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white border-l-4 accent-border pl-4">Training</h3>
          {renderTraining(TRAINING)}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white border-l-4 accent-border pl-4">Skills & Details</h3>
          {renderSkills(SKILLS)}
        </div>
      </div>
    </Section>
  );
};

const ContactPage: React.FC = () => (
    <Section id="contact" className="pb-16 md:pb-24">
        <SectionTitle>Contact</SectionTitle>
        <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-300 mb-8 text-lg">
                For professional inquiries, please feel free to reach out.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
                <a 
                    href="mailto:carlos.montenegrovela@gmail.com"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    <EmailIcon className="w-6 h-6" />
                    <span>Send an Email</span>
                </a>
                <a 
                    href="https://wa.me/31623042914"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 accent-bg text-gray-900 font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    <WhatsAppIcon className="w-6 h-6" />
                    <span>Message on WhatsApp</span>
                </a>
            </div>
        </div>
    </Section>
);

// SECTION: HEADER COMPONENT
const Header: React.FC<{
    activePage: Page;
    setActivePage: (page: Page) => void;
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}> = ({ activePage, setActivePage, isMenuOpen, setIsMenuOpen }) => {
  const navItems = Object.values(Page);

  const NavLink: React.FC<{ page: Page }> = ({ page }) => (
    <button
      onClick={() => {
        setActivePage(page);
        setIsMenuOpen(false);
      }}
      className={`py-2 px-3 rounded-md text-sm font-medium transition-colors duration-300 ${
        activePage === page ? 'accent-color' : 'text-gray-300 hover:text-white hover:bg-gray-700'
      }`}
    >
      {page.replace(/([A-Z])/g, ' $1').trim()}
    </button>
  );

  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-md fixed top-0 left-0 right-0 z-40 shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button onClick={() => setActivePage(Page.Home)} className="text-white text-2xl font-bold tracking-wider">
              Carlos Montenegro
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => <NavLink key={item} page={item} />)}
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navItems.map((item) => <NavLink key={item} page={item} />)}
          </div>
        </div>
      )}
    </header>
  );
};


// SECTION: MAIN APP COMPONENT

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Home);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sectionId = activePage.toLowerCase();
    const section = document.getElementById(sectionId);
    if (section) {
        // Adjust for fixed header height
        const headerOffset = 80; 
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
        window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
        });
    } else if (activePage === Page.Home) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activePage]);

  const renderContent = () => {
    // This is a single page scroll layout, so all components are rendered.
    // The activePage state is used for highlighting nav and scrolling.
    return (
        <>
            <div id="home"><HomePage /></div>
            <ActingClipsPage />
            <GalleryPage />
            <AboutPage />
            <ResumePage />
            <ContactPage />
        </>
    );
  };

  return (
    <div className="bg-gray-900 text-gray-200">
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />
      <main>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
