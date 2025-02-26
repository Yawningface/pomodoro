import React from 'react';
import PomodoroComponent from './components/PomodoroComponent';
import AdComponent from './components/AdComponent';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#101827] flex flex-col items-center justify-center gap-10 p-6">
      <h1 className="text-4xl font-bold text-white mb-2 hover:text-[#ebb305] transition">
        Pomodoro Timer
      </h1>
      <h2 className="text-xl text-[#9ca3af] mb-8">
        Focus. Work. Succeed.
      </h2>

      <PomodoroComponent />

      <div className="flex flex-wrap gap-4 justify-center mt-6">
        <AdComponent 
          image="/ad_1.jpg"
          title="YawningBlock"
          description="Block distractions during Pomodoro sessions."
          link="https://pomodoro.yawningface.org"
        />
        <AdComponent 
          image="/ad_2.jpg"
          title="Notion Pomodoro Template"
          description="Organize work with this template."
          link="https://notion.yawningface.org"
        />
        <AdComponent 
          image="/ad_3.jpg"
          title="Lofi Pomodoro"
          description="Focus with lofi hip-hop beats."
          link="https://lofi.yawningface.org"
        />

        
      </div>
    </div>
  );
}

export default App;
