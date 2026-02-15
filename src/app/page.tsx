'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import About from '@/components/sections/About';
import TechStack from '@/components/sections/TechStack';
import Experience from '@/components/sections/Experience';
import Interests from '@/components/sections/Interests';
import FrontendProjects from '@/components/sections/projects/FrontendProjects';
import AIProjects from '@/components/sections/projects/AIProjects';
import HomelabProjects from '@/components/sections/projects/HomelabProjects';

type View = 'home' | 'frontend' | 'ai' | 'homelab';

export default function Home() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [projectsExpanded, setProjectsExpanded] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}>
        <Navigation
          currentView={currentView}
          setCurrentView={setCurrentView}
          projectsExpanded={projectsExpanded}
          setProjectsExpanded={setProjectsExpanded}
        />
      </Header>

      <div className="max-w-7xl mx-auto flex">
        {/* Left Sidebar Navigation - Desktop */}
        <aside className="hidden lg:block w-64 border-r border-zinc-200 min-h-[calc(100vh-5rem)] p-6 sticky top-[5rem] h-fit">
          <Navigation
            currentView={currentView}
            setCurrentView={setCurrentView}
            projectsExpanded={projectsExpanded}
            setProjectsExpanded={setProjectsExpanded}
          />
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 lg:p-12 max-w-4xl">
          {currentView === 'home' && (
            <>
              <About />
              <TechStack />
              <Experience />
              <Interests />
            </>
          )}

          {currentView === 'frontend' && <FrontendProjects />}
          {currentView === 'ai' && <AIProjects />}
          {currentView === 'homelab' && <HomelabProjects />}
        </main>
      </div>

      <Footer />
    </div>
  );
}
