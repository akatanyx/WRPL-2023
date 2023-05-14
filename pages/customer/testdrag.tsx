import { useState } from "react";
import Draggable from "react-draggable";
import { motion, AnimatePresence } from "framer-motion";

export default function TestDrag() {
  const [isDragged, setIsDragged] = useState(false);

  const handleDrag = (e, ui) => {
    if (ui.lastY <= 10) {
      setIsDragged(true);
    } else {
      setIsDragged(false);
    }
  };

  return (
    <div className="relative h-screen">
      {/* The first draggable area */}
      <Draggable axis="y" onDrag={handleDrag}>
        <div className="bg-gray-400 flex flex-col justify-center items-center absolute bottom-0 left-0 right-0 cursor-pointer">
          <h1>Drag me!</h1>

          {/* The content */}
          <AnimatePresence>
            {isDragged && (
              <motion.div
                className="w-full bg-gray-600"
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gray-300 p-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  semper sed elit quis hendrerit. Morbi euismod felis vel mauris
                  semper, vel mollis nunc pretium. Donec sollicitudin justo in mi
                  tincidunt, at ultrices purus euismod.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Draggable>
    </div>
  );
}
