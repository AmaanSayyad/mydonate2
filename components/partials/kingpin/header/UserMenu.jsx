import React, { useState, useRef, useEffect, useContext } from 'react';
// import Transition from '../../../utils/Transition';
import Transition from '../../../../utils/Transition';
import { useRouter } from 'next/router';

function UserMenu() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const trigger = useRef(null);
  const dropdown = useRef(null);
  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <img
          className="w-8 h-8 rounded-full"
          src={'/images/profile3.jpg'}
          width="32"
          height="32"
          alt="User"
        />
        <div className="flex items-centeate ml-2 text-sm font-medium group-hover:text-slate-800">
          <svg
            className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
            viewBox="0 0 12 12"
          >
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200  border border-slate-200 py-1.5 rounded-lg shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200">
            <div className="font-medium text-slate-800 dark:text-gray-200">
              0000{' '}
            </div>
            {/* <div className="text-xs text-slate-500 italic">Customer</div> */}
          </div>
          <ul>
            <li className="p-2">
              <div
                className="font-medium text-sm bg-blue-600  text-white rounded-full text-center cursor-pointer flex justify-center w-full  items-center py-1 px-3"
                to="/"
                onClick={() => {
                  disconnect();
                  router.push('/');
                }}
              >
                Disconnect
              </div>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default UserMenu;