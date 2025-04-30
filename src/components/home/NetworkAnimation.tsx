'use client';

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  z: number;
  radius: number;
  glow: number;
  connections: number[];
}

export default function NetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create nodes
    const createNodes = () => {
      const nodes: Node[] = [];
      const nodeCount = 30;
      
      // Check if we're in mobile portrait mode
      const isMobilePortrait = window.matchMedia('(max-width: 640px) and (orientation: portrait)').matches;
      
      for (let i = 0; i < nodeCount; i++) {
        let x: number = 0;
        let y: number = 0;
        let isValidPosition = false;

        while (!isValidPosition) {
          // Generate random position
          x = Math.random() * canvas.width;
          y = Math.random() * canvas.height;

          if (isMobilePortrait) {
            // For mobile portrait: avoid bottom right area
            const bottomRightX = canvas.width * 0.4; // Start at 40% from left
            const bottomRightY = canvas.height * 0.4; // Start at 40% from top
            
            // Position is valid if it's not in the bottom right area
            isValidPosition = !(x > bottomRightX && y > bottomRightY);
          } else {
            // For desktop: avoid the portrait area in center-right
            const portraitAreaX = canvas.width * 0.5;
            const portraitAreaY = canvas.height * 0.2;
            const portraitWidth = canvas.width * 0.4;
            const portraitHeight = canvas.height * 0.6;

            const isInPortraitArea = (
              x > portraitAreaX && 
              x < portraitAreaX + portraitWidth && 
              y > portraitAreaY && 
              y < portraitAreaY + portraitHeight
            );

            isValidPosition = !isInPortraitArea;
          }
        }

        nodes.push({
          x,
          y,
          z: Math.random() * 100,
          radius: 2 + Math.random() * 2,
          glow: Math.random(),
          connections: []
        });
      }

      // Create connections
      nodes.forEach((node, i) => {
        const maxConnections = 3;
        const connections = Math.floor(Math.random() * maxConnections) + 1;
        
        for (let j = 0; j < connections; j++) {
          const targetIndex = Math.floor(Math.random() * nodes.length);
          if (targetIndex !== i && !node.connections.includes(targetIndex)) {
            node.connections.push(targetIndex);
          }
        }
      });

      return nodes;
    };

    // Set canvas size to match container
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      // Recreate nodes when canvas is resized
      nodesRef.current = createNodes();
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodesRef.current.forEach((node, i) => {
        // Update glow
        node.glow += 0.01;
        if (node.glow > 1) node.glow = 0;

        // Draw connections
        node.connections.forEach(connectionIndex => {
          const targetNode = nodesRef.current[connectionIndex];
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(targetNode.x, targetNode.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + Math.min(node.glow, targetNode.glow) * 0.2})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        });

        // Draw node
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 2
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${0.8 + node.glow * 0.2})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ mixBlendMode: 'screen' }}
    />
  );
} 