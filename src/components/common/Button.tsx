import { motion } from "framer-motion";
import { ReactNode } from "react";
import { classNames } from "../../utils/helpers";
import { HTMLMotionProps } from "framer-motion";

type ButtonProps = HTMLMotionProps<"button"> & {
  children: ReactNode;
};

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classNames("transition cursor-pointer", className || "")}
      {...props}
    >
      {children}
    </motion.button>
  );
}
