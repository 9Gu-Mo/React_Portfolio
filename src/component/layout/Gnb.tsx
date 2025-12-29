// lib
import { motion } from 'framer-motion';

// component
import IconClose from '@/component/icon/IconClose';
import Link from 'next/link';

// interface
interface Props {
  closeClick: React.MouseEventHandler<HTMLButtonElement>;
}

const items = [
  {
    id: 'item01',
    name: 'item01',
    direction: '',
  },
  {
    id: 'item02',
    name: 'item02',
  },
  {
    id: 'item03',
    name: 'item03',
    direction: '',
  },
];

export default function Gnb(props: Props) {
  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="gnb fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/90"
        onClick={props.closeClick}
      >
        <button
          type="button"
          className="absolute top-4 right-4 transition-transform duration-500 ease-in-out hover:rotate-180"
          onClick={props.closeClick}
        >
          <IconClose
            color="#fff"
            size="30"
          />
        </button>
        <ul className="list flex flex-col gap-4">
          {items.map((item, index) => (
            <li
              key={index}
              data-aos={item.direction ? item.direction : 'fade-right'}
              data-aos-duration={200 * (index + 1)}
            >
              <Link
                href={`#${item.id}`}
                className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
}
