"use client";
import { X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

type TechnicalSpec = {
  name: string;
  src: string;
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
  specs: TechnicalSpec[];
}

export const TechnicalSpecsModal: React.FC<Props> = ({ isOpen, onClose, specs }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 backdrop-blur-sm bg-black/40 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-2xl shadow-2xl w-full max-w-lg p-6 relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
          >
            {/* Botón de cerrar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white transition"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Título */}
            <div className="mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Fichas Técnicas</h2>
            </div>

            {/* Lista */}
            <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 pr-2">
              <ul className="space-y-3">
                {specs.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:underline hover:text-blue-800 transition"
                    >
                      <FileText className="w-4 h-4" />
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
