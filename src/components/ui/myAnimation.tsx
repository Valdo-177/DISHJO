import Lottie from "lottie-react";
import myAnimation from "@/assets/data_Text.json";
import { useState } from "react";
import { motion } from "framer-motion";

const MyAnimationComponent = ({ children }: { children: React.ReactElement }) => {
    const [show, setShow] = useState(true);

    setTimeout(() => {
        setShow(false)
    }, 2500);
    return (
        <div>
            {show && <Lottie
                animationData={myAnimation}
                loop={false}
                style={{ width: "300px", height: "300px" }}
            />}
            {!show && <motion.div
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{
                    duration: 0.3, 
                    ease: "easeOut", 
                }}
              
            >
                {children}
            </motion.div>}
        </div>
    );
};

export default MyAnimationComponent;
