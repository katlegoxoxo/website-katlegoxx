import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// This is a more performant way to handle rapid text updates.
// It directly manipulates the DOM, bypassing React's reconciliation for the text content,
// which is ideal for high-frequency animations like a text scramble effect.
const ScrambleText: React.FC<{ text: string }> = ({ text }) => {
    const chars = '$$$$$$$';
    const frameRef = useRef<number>();
    const frame = useRef(0);

    // Setup the queue of characters to be animated
    const queue = useRef(
        text.split('').map((_char, i) => ({
            from: ' ',
            to: text[i],
            start: i * 12,      // Stagger start time for each character reveal
            end: i * 12 + 20,   // Duration of scrambling for each character
            char: '',
        }))
    );

    const update = () => {
        let output = '';
        let complete = 0;

        for (let i = 0; i < queue.current.length; i++) {
            const { from, to, start, end } = queue.current[i];

            if (frame.current >= end) {
                complete++;
                output += to;
            } else if (frame.current >= start) {
                // Pick a random character for the scramble effect
                if (!queue.current[i].char || Math.random() < 0.28) {
                    const randomIndex = Math.floor(Math.random() * chars.length);
                    queue.current[i].char = chars[randomIndex];
                }
                // Wrap scrambling characters in a span for different styling
                output += `<span class="text-slate-500">${queue.current[i].char}</span>`;
            } else {
                output += from;
            }
        }

        const element = document.getElementById('scramble-text');
        if (element) {
            element.innerHTML = output;
        }

        if (complete === queue.current.length) {
            // Keep the text on screen for extra frames
            setTimeout(() => {
                cancelAnimationFrame(frameRef.current!);
            }, 1500); // 1.5 seconds extra delay
        } else {
            frame.current++;
            frameRef.current = requestAnimationFrame(update);
        }

    };

    useEffect(() => {
        // Start the animation loop
        frameRef.current = requestAnimationFrame(update);
        // Cleanup function to stop the animation when the component unmounts
        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    // This span acts as a container for the innerHTML set by the update function
    return <span id="scramble-text" className="text-cyan-400" />;
};

const Preloader: React.FC = () => {
    return (
        <motion.div
            key="preloader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            // The total duration is controlled by the timer in App.tsx. 
            // This exit animation starts when the component is unmounted.
            exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
        >
            <motion.div
                initial={{ opacity: 0, filter: 'blur(8px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)', transition: { duration: 1, delay: 0.2 } }}
                className="font-mono text-3xl md:text-5xl font-bold tracking-widest text-center"
            >
                <ScrambleText text="KATLEGOXX" />
            </motion.div>
        </motion.div>
    );
};

export default Preloader;