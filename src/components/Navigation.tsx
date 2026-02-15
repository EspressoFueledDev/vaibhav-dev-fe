type View = 'home' | 'frontend' | 'ai' | 'homelab';

type NavigationProps = {
  currentView: View;
  setCurrentView: (view: View) => void;
  projectsExpanded: boolean;
  setProjectsExpanded: (expanded: boolean) => void;
};

export default function Navigation({
  currentView,
  setCurrentView,
  projectsExpanded,
  setProjectsExpanded,
}: NavigationProps) {
  return (
    <nav className="flex flex-col gap-1">
      <button
        onClick={() => setCurrentView('home')}
        className={`text-left px-4 py-2 text-sm rounded transition-colors ${
          currentView === 'home'
            ? 'bg-zinc-100 text-zinc-900 font-medium'
            : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
        }`}
      >
        About & Experience
      </button>

      {/* Projects Dropdown */}
      <div>
        <button
          onClick={() => setProjectsExpanded(!projectsExpanded)}
          className="w-full text-left px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 rounded transition-colors flex items-center justify-between"
        >
          <span>Projects</span>
          <svg
            className={`w-4 h-4 transition-transform ${projectsExpanded ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {projectsExpanded && (
          <div className="ml-2 mt-1 flex flex-col gap-1">
            <button
              onClick={() => setCurrentView('frontend')}
              className={`text-left px-4 py-2 text-sm rounded transition-colors ${
                currentView === 'frontend'
                  ? 'bg-zinc-100 text-zinc-900 font-medium'
                  : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
              }`}
            >
              Frontend Development
            </button>
            <button
              onClick={() => setCurrentView('ai')}
              className={`text-left px-4 py-2 text-sm rounded transition-colors ${
                currentView === 'ai'
                  ? 'bg-zinc-100 text-zinc-900 font-medium'
                  : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
              }`}
            >
              AI & Machine Learning
            </button>
            <button
              onClick={() => setCurrentView('homelab')}
              className={`text-left px-4 py-2 text-sm rounded transition-colors ${
                currentView === 'homelab'
                  ? 'bg-zinc-100 text-zinc-900 font-medium'
                  : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900'
              }`}
            >
              Homelab & Infrastructure
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
