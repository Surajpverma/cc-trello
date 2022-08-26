import { motion } from 'framer-motion';

function App() {
  return (
    /* This is just testing of tailwind CSS and Framer Motion */
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="flex justify-center"
      >
        <motion.div 
          className="w-2/4 mt-7 bg-prmBg text-4xl text-center border-solid border-outerBoxCol border-8 cursor-pointer"
        >
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          className="text-prmRed pt-4">
          Suraj Pal
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          className="text-prmYellow">
          Kavya Goel
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          className="text-prmBlue">
          Prateek Kashyap
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          className="text-headingCol">
          Sai Rithvik Padma
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          className="text-contentCol pb-4">
          Suraj Pal ek baar fir
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default App;
