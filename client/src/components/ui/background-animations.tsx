import { useEffect, useRef } from "react";

interface NeuralNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
}

export function BackgroundAnimations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<NeuralNode[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    // Initialize neural network
    const initializeNeuralNetwork = () => {
      if (!canvasRef.current) return;
      
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Create neural nodes
      const nodeCount = 25;
      const nodes: NeuralNode[] = [];
      
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          connections: []
        });
      }
      
      // Create connections between nearby nodes
      nodes.forEach((node, i) => {
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
            );
            if (distance < 150 && Math.random() > 0.7) {
              node.connections.push(j);
            }
          }
        });
      });
      
      nodesRef.current = nodes;
    };

    // Animate neural network
    const animateNeuralNetwork = () => {
      if (!canvasRef.current) return;
      
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      nodesRef.current.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;
        
        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(225, 29, 72, 0.6)';
        ctx.fill();
        
        // Draw connections
        node.connections.forEach(connectionIndex => {
          if (connectionIndex < nodesRef.current.length) {
            const connectedNode = nodesRef.current[connectionIndex];
            const distance = Math.sqrt(
              Math.pow(node.x - connectedNode.x, 2) + Math.pow(node.y - connectedNode.y, 2)
            );
            
            if (distance < 200) {
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(connectedNode.x, connectedNode.y);
              ctx.strokeStyle = `rgba(225, 29, 72, ${0.2 * (1 - distance / 200)})`;
              ctx.lineWidth = 1;
              ctx.stroke();
              
              // Add flowing particles along connections
              const progress = (Date.now() * 0.001 + i * 0.1) % 1;
              const particleX = node.x + (connectedNode.x - node.x) * progress;
              const particleY = node.y + (connectedNode.y - node.y) * progress;
              
              ctx.beginPath();
              ctx.arc(particleX, particleY, 1.5, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(225, 29, 72, 0.8)';
              ctx.fill();
            }
          }
        });
      });
      
      animationFrameRef.current = requestAnimationFrame(animateNeuralNetwork);
    };

    initializeNeuralNetwork();
    animateNeuralNetwork();

    // Handle resize
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        initializeNeuralNetwork();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

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

    const interval = setInterval(createParticle, 3000);
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
      {/* Neural Network Canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
        style={{ background: 'transparent' }}
      />
      
      {/* Floating Shapes */}
      <div className="floating-shape w-32 h-32 top-10 left-10 rounded-full opacity-20"></div>
      <div className="floating-shape w-24 h-24 top-1/3 right-20 rounded-full opacity-15 animate-float-delay"></div>
      <div className="floating-shape w-40 h-40 bottom-20 left-1/4 rounded-full opacity-20"></div>
      <div className="floating-shape w-28 h-28 top-2/3 right-1/3 rounded-full opacity-10 animate-float-delay"></div>
      
      {/* Enhanced morphing neural blobs */}
      <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-full animate-morph opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-gradient-to-l from-primary/8 via-primary/4 to-transparent rounded-full animate-morph opacity-25" style={{ animationDelay: '2s' }}></div>
      
      {/* Static Particles - Dynamic ones added via JS */}
      <div className="particle" style={{ left: '15%', animationDelay: '0s' }}></div>
      <div className="particle" style={{ left: '25%', animationDelay: '4s' }}></div>
      <div className="particle" style={{ left: '35%', animationDelay: '8s' }}></div>
      <div className="particle" style={{ left: '45%', animationDelay: '12s' }}></div>
      <div className="particle" style={{ left: '55%', animationDelay: '16s' }}></div>
      <div className="particle" style={{ left: '65%', animationDelay: '3s' }}></div>
      <div className="particle" style={{ left: '75%', animationDelay: '7s' }}></div>
      <div className="particle" style={{ left: '85%', animationDelay: '11s' }}></div>
    </div>
  );
}
