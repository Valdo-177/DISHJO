import { motion } from "framer-motion";

const AnimatedSvg = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="border bg-white"
    >
      <svg
        width="1139"
        height="1120"
        viewBox="0 0 1139 1120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M457.296 1113.98C312.596 ..."
          stroke="#7616D0"
          strokeWidth="2"
          strokeDasharray="3000"
          strokeDashoffset="3000"
          initial={{ strokeDashoffset: 3000 }} // Empieza oculto
          animate={{ strokeDashoffset: 0 }} // Termina visible
          transition={{
            duration: 4,
            ease: "easeInOut",
          }}
        />
      </svg>
    </motion.div>
  );
};

export default AnimatedSvg;
