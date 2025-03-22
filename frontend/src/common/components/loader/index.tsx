import { FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Loader: FC = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ display: 'none', opacity: 0 }}
        transition={{ delay: 2 }}
        className="fixed bottom-0 left-0 right-0 top-0 z-20 grid place-items-center bg-background"
      >
        <motion.div
          initial={{
            minWidth: '20px',
            minHeight: '20px',
            borderRadius: '50%',
            paddingInline: 0,
          }}
          animate={{
            minWidth: '100px',
            minHeight: 'auto',
            borderRadius: '20px',
            paddingInline: '20px',
          }}
          transition={{ duration: 0.5 }}
          className="grid place-items-center overflow-hidden rounded-[20px] bg-mainColor"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center justify-center overflow-hidden text-[50px] font-bold text-white"
          >
            <span>K</span>
            <motion.span
              className="overflow-hidden"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              eep
            </motion.span>
            <span>N</span>
            <motion.span
              className="overflow-hidden"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              otes
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Loader
