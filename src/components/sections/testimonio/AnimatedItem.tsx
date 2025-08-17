import { ReactNode, useRef } from "react";
import { useInView } from "framer-motion";
import { MotionBox } from "@/components/preloader/MotionBox";
interface AnimatedItemProps {
  idx: number;
  children: ReactNode;
}
export const AnimatedItem = ({ idx, children }: AnimatedItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px", // ajusta para anticipar la animación
  });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: idx * 0.1 }}
    >
      {children}
    </MotionBox>
  );
};
