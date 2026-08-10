import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the problem and define the experience.",
  },
  {
    number: "02",
    title: "Design",
    description: "Create a clear and consistent interface system.",
  },
  {
    number: "03",
    title: "Build",
    description: "Turn the design into reusable React components.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Ship a polished and accessible product.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const stepAnimation = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function AnimationTimeline() {
  return (
    <section className="timeline-section">
      <div className="timeline-heading">
        <span>06</span>

        <div>
          <h2>Motion Timeline</h2>
          <p>
            A sequential animation demonstrating Framer Motion variants.
          </p>
        </div>
      </div>

      <motion.div
        className="timeline"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        {steps.map((step, index) => (
          <motion.div
            className="timeline-item"
            variants={stepAnimation}
            key={step.number}
          >
            <div className="timeline-marker">
              {step.number}
            </div>

            <div className="timeline-content">
              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>

            {index < steps.length - 1 && (
              <motion.div
                className="timeline-line"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.4 + index * 0.25,
                  duration: 0.5,
                }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}