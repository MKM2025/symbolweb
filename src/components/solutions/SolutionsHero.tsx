'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Node {
  x: number;
  y: number;
  connections: number[];
}

export default function SolutionsHero({ fitMode = 'cover' }: { fitMode?: 'cover' | 'contain' }) {
  const [nodes, setNodes] = useState<Node[]>([]);
  
  useEffect(() => {
    // Create initial nodes
    const initialNodes: Node[] = Array.from({ length: 12 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      connections: []
    }));

    // Create connections between nodes
    initialNodes.forEach((node, idx) => {
      const numConnections = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < numConnections; i++) {
        let targetIdx;
        do {
          targetIdx = Math.floor(Math.random() * initialNodes.length);
        } while (targetIdx === idx || node.connections.includes(targetIdx));
        node.connections.push(targetIdx);
      }
    });

    setNodes(initialNodes);
  }, []);

  return (
    <section className="relative w-full min-h-[400px] aspect-[3/4] sm:aspect-[3/2] md:aspect-[32/15] max-h-screen md:max-h-[900px] landscape:aspect-[32/15] landscape:min-h-[300px] -mt-[1px] bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
      {/* Network Visualization */}
      <div className="absolute inset-0">
        {nodes.map((node, idx) => (
          <div key={idx}>
            {/* Draw connections */}
            {node.connections.map((targetIdx, connIdx) => {
              const target = nodes[targetIdx];
              return (
                <motion.div
                  key={`${idx}-${connIdx}`}
                  className="absolute h-px bg-blue-400/30"
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    width: `${Math.sqrt(
                      Math.pow(target.x - node.x, 2) + Math.pow(target.y - node.y, 2)
                    )}%`,
                    transform: `rotate(${Math.atan2(target.y - node.y, target.x - node.x)}rad)`,
                    transformOrigin: 'left center'
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                />
              );
            })}
            {/* Draw node */}
            <motion.div
              className="absolute w-4 h-4 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: [1, 1.2, 1],
                y: [0, -10, 0]
              }}
              transition={{
                duration: 2,
                delay: idx * 0.1,
                repeat: Infinity,
                repeatDelay: Math.random() * 2
              }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center portrait:justify-start portrait:pt-16">
        <div className="max-w-2xl ml-[2%] sm:ml-[2%] portrait:ml-6">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 sm:mb-4 md:mb-6 drop-shadow-lg"
          >
            Digital Network
          </motion.h1>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col portrait:gap-3 flex-wrap landscape:flex-row landscape:gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="w-48 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1a1a1a] px-4 py-2 rounded-lg hover:from-[#FCF6BA] hover:via-[#B38728] hover:to-[#BF953F] transition-all duration-300 font-semibold shadow-md text-sm text-center"
            >
              Explore Network
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="w-48 bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-[#1a1a1a] px-4 py-2 rounded-lg hover:from-[#FCF6BA] hover:via-[#B38728] hover:to-[#BF953F] transition-all duration-300 font-semibold shadow-md text-sm text-center"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 