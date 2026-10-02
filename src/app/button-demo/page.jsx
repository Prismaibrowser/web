'use client';

import PoweredByButton from '@/components/PoweredByButton';
import SmoothScrollProvider from '@/components/smooth-scroll-provider';

export default function ButtonDemo() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-[200vh] flex items-center justify-center bg-[#000000] p-8">
      <div className="flex flex-col items-center gap-12">
        {/* Demo on Black Background */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm font-mono text-white/50 uppercase tracking-wider">Black Background</p>
          <PoweredByButton />
        </div>

        {/* Demo on Obsidian Background */}
        <div className="flex flex-col items-center gap-4 p-12 bg-[#090c12] rounded-xl">
          <p className="text-sm font-mono text-white/50 uppercase tracking-wider">Obsidian Board</p>
          <PoweredByButton />
        </div>

        {/* Demo in Context */}
        <div className="flex flex-col items-center gap-4 p-12 bg-gradient-to-br from-[#090c12] to-[#000000] rounded-xl border border-[#a1fea0]/20">
          <p className="text-sm font-mono text-white/50 uppercase tracking-wider mb-4">In Context</p>
          <div className="flex items-center gap-3">
            <div className="font-mono text-xs text-white/70">Built with</div>
            <PoweredByButton />
          </div>
        </div>

        {/* Comparison Row */}
        <div className="flex gap-8 items-center mt-8">
          <div className="flex flex-col items-center gap-3">
            <p className="text-xs font-mono text-white/40">Original Style</p>
            <div className="px-4 py-2.5 bg-[#3a3a3a] rounded-md">
              <span className="font-semibold text-base text-white/95 tracking-wide">
                POWERED BY
              </span>
            </div>
          </div>

          <div className="h-12 w-px bg-[#a1fea0]/20" />

          <div className="flex flex-col items-center gap-3">
            <p className="text-xs font-mono text-[#a1fea0]">High-Voltage Design</p>
            <PoweredByButton />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex flex-col items-center gap-4 opacity-50">
          <p className="text-xs font-mono text-white/40">Scroll to test Lenis smooth scrolling</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="animate-bounce">
            <path d="M12 5v14m0 0l-7-7m7 7l7-7" stroke="#a1fea0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Spacer content for scroll testing */}
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg font-mono text-white/30">Smooth scrolling powered by</p>
            <p className="text-2xl font-bold text-[#a1fea0] mt-2">Lenis</p>
          </div>
        </div>
      </div>
      </div>
    </SmoothScrollProvider>
  );
}

