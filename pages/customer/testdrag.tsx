import Image from "next/image";
import { useState } from "react";
import Draggable from "react-draggable";
import { motion, AnimatePresence } from "framer-motion";

const Order = () => {
  const [statusOrder, setStatusOrder] = useState("Sedang menuju ke Restoran");

  return (
    <div>
      <div className="h-25 w-full my-5 px-5">
        <div className="flex items-center">
          {/* <Image
            src={"/images/icons/left-arrow.svg"}
            alt="plus-icon"
            width={26}
            height={26}
          /> */}
          <h2 className="text-3xl font-semibold text-gray-600 ml-5">
            {statusOrder}
          </h2>
        </div>
        <div className="flex my-5 mx-1 justify-between">
          {/* <Image src={"/images/icons/Location.svg"} width={23} height={35} /> */}
          <div>
            <p className="text-base font-semibold text-gray-700">Tempat</p>
            <h3 className="text-lg font-bold">McDonalds cabang Kaliurang</h3>
          </div>
          <div>
            <p className="text-base font-semibold">Estimasi</p>
            <h3 className="text-lg text-gray-500 font-semibold">20 mnt</h3>
          </div>
        </div>
      </div>
      <Drag />
    </div>
  );
};

export default Order;

const Drag = () => {
    const [isDragged, setIsDragged] = useState(false);
    const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  
    const handleDrag = (e: any, ui: any) => {
      if (ui.y >= -100 && ui.y <= 30) {
        setIsDragged(true);
        setDragPosition({ x: 0, y: ui.y });
      } else {
        setIsDragged(false);
      }
    };
  
    const handleLoremDrag = (e: any, ui: any) => {
      if (ui.y >= 0 && ui.y <= 10) {
        setIsDragged(true);
      } else {
        setIsDragged(false);
      }
    };
  
    return (
      <div className="w-full h-full bg-black">
        <Draggable
          axis="y"
          onDrag={handleDrag}
          position={dragPosition}
          bounds={{ top: -150, bottom: 0 }}
        >
          <div className="bg-gray-100 flex flex-col justify-center items-center absolute bottom-30 left-0 right-0 cursor-pointer">
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
                  <Draggable
                    axis="y"
                    onDrag={handleLoremDrag}
                    bounds={{ top: 0, bottom: 10 }}
                  >
                    <div className="bg-gray-300 p-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis semper sed elit quis hendrerit. Morbi euismod felis vel
                      mauris semper, vel mollis nunc pretium. Donec sollicitudin
                      justo in mi tincidunt, at ultrices purus euismod.
                    </div>
                  </Draggable>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Draggable>
      </div>
    );
  };