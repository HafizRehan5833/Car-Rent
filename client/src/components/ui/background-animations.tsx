import { useEffect, useRef } from "react";

export function BackgroundAnimations() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create particles periodically
    const createParticle = () => {
      if (!containerRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 15 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      
      containerRef.current.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 25000);
    };

    const interval = setInterval(createParticle, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Parallax effect for floating shapes
    const parallaxElements = document.querySelectorAll('.floating-shape');
    
    const updateParallax = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        (element as HTMLElement).style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.1}deg)`;
      });
    };
    
    // Throttled scroll listener for performance
    let ticking = false;
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
        setTimeout(() => ticking = false, 16);
      }
    };
    
    window.addEventListener('scroll', requestTick, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', requestTick);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      {/* Floating Shapes */}
      <div className="floating-shape w-32 h-32 top-10 left-10 rounded-full opacity-30"></div>
      <div className="floating-shape w-24 h-24 top-1/3 right-20 rounded-full opacity-20 animate-float-delay"></div>
      <div className="floating-shape w-40 h-40 bottom-20 left-1/4 rounded-full opacity-25"></div>
      <div className="floating-shape w-28 h-28 top-2/3 right-1/3 rounded-full opacity-15 animate-float-delay"></div>
      
      {/* Static Particles - Dynamic ones added via JS */}
      <div className="particle" style={{ left: '10%', animationDelay: '0s' }}></div>
      <div className="particle" style={{ left: '20%', animationDelay: '3s' }}></div>
      <div className="particle" style={{ left: '30%', animationDelay: '6s' }}></div>
      <div className="particle" style={{ left: '40%', animationDelay: '9s' }}></div>
      <div className="particle" style={{ left: '50%', animationDelay: '12s' }}></div>
      <div className="particle" style={{ left: '60%', animationDelay: '2s' }}></div>
      <div className="particle" style={{ left: '70%', animationDelay: '5s' }}></div>
      <div className="particle" style={{ left: '80%', animationDelay: '8s' }}></div>
      <div className="particle" style={{ left: '90%', animationDelay: '11s' }}></div>
    </div>
  );
}
