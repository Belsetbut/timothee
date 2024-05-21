"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const PinContainer = ({
                                 children,
                                 className,
                                 containerClassName,
                             }: {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    return (
        <motion.div
            className={cn("relative group/pin z-50 cursor-pointer", containerClassName)}
            whileHover={{ scale: 1.04 }} // Scale up the card on hover
            //transition={{ duration: 1 }} // Slow down the animation
        >
            <div
                style={{
                    perspective: "1000px",
                    transform: "rotateX(70deg) translateZ(0deg)",
                }}
                className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
            >
                <motion.div
                    style={{
                        transform: "translate(-50%,-50%) rotateX(0deg)",
                    }}
                    className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] transition duration-700 overflow-hidden"
                >
                    <div className={cn("relative z-50", className)}>{children}</div>
                </motion.div>
            </div>
        </motion.div>
    );
};
