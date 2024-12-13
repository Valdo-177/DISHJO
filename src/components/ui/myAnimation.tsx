"use client";

import Lottie from "lottie-react";
import myAnimation from "@/assets/data_Text.json";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MyAnimationComponent = ({ children }: { children: React.ReactElement }) => {
    const [show, setShow] = useState(true);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Asegurar que el componente esté en el cliente
        setIsClient(true);

        // Iniciar el temporizador solo en el cliente
        const timeout = setTimeout(() => {
            setShow(false);
        }, 2500);

        return () => clearTimeout(timeout); // Limpieza del temporizador
    }, []);

    if (!isClient) {
        return null; // No renderizar nada en el servidor
    }

    return (
        <div>
            {show && (
                <Lottie
                    animationData={myAnimation}
                    loop={false}
                    style={{ width: "300px", height: "300px" }}
                />
            )}
            {!show && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut",
                    }}
                >
                    {children}
                </motion.div>
            )}
        </div>
    );
};

export default MyAnimationComponent;
