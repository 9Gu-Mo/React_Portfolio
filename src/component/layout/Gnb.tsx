// lib
import { motion } from 'framer-motion';

// component
import IconClose from '@/component/icon/IconClose';

// interface
interface Props {
  closeClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Gnb(props: Props) {
  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 right-0 bottom-0 left-0 bg-black/70"
      >
        <button
          type="button"
          className="absolute top-0 right-0"
          onClick={props.closeClick}
        >
          <IconClose color="#fff" />
        </button>
      </motion.nav>
    </>
  );
}
