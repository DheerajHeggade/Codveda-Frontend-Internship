import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function AdvancedAnimations() {
  return (
    <section className="animation-section">
      <div className="animation-header">
        <span>05</span>
        <div>
          <h2>Advanced Animations</h2>
          <p>
            Interactive motion built with Framer Motion.
          </p>
        </div>
      </div>

      <motion.div
        className="animation-grid"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="motion-card"
          variants={item}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="motion-icon">✦</span>
          <h3>Hover Motion</h3>
          <p>
            Interactive spring animation triggered by hovering.
          </p>
        </motion.div>

        <motion.div
          className="motion-card"
          variants={item}
          whileHover={{
            rotate: 2,
            scale: 1.03,
          }}
        >
          <span className="motion-icon">↗</span>
          <h3>Interactive UI</h3>
          <p>
            Smooth transitions that respond directly to user interaction.
          </p>
        </motion.div>

        <motion.div
          className="motion-card"
          variants={item}
          whileHover={{
            y: -10,
            rotate: -2,
          }}
        >
          <span className="motion-icon">●</span>
          <h3>Scroll Reveal</h3>
          <p>
            Components animate into view as the user scrolls.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}