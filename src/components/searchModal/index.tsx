import { createPortal } from "react-dom";
import './index.css';
import { getText } from "../../utils/getText";
import React, {  useEffect, useLayoutEffect } from "react";

interface SearchModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  list: string[];
}

const pushValueToUrl = (value : string) => {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set('search', value);
  const url = new URL(window.location.href);
  window.history.replaceState({}, '', `${url.pathname}?${urlParams.toString()}`);
}
const removeSearchFromUrl = () => {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.delete('search');
  const url = new URL(window.location.href);
  window.history.replaceState({}, '', `${url.pathname}${urlParams.toString()}`);
}



const SearchModal: React.FC<SearchModalProps> = ({ isOpen, setIsOpen, list }) => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const [filteredCoins, setFilteredCoins] = React.useState<string[]>([]);

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) return;
    pushValueToUrl(inputValue);
    setInputValue('');
    setIsOpen(false);
  };

  const itemHandler = (value : string) => {
    if (!value) return;
    pushValueToUrl(value);
    setInputValue('');
    setIsOpen(false);
  };

  const closeModal = (e: React.MouseEvent<HTMLDialogElement>) => {
    if(e.target === e.currentTarget){
      setInputValue('');
      setIsOpen(false);
    }

  };


  useLayoutEffect(() => {
    const filter = list.filter((coin) => coin.toLowerCase().includes(inputValue.toLowerCase()));
    setFilteredCoins(filter);
  }, [inputValue, list]);

  useEffect(() => {
    if(isOpen) removeSearchFromUrl();
  }, [isOpen]);

  const modalElement = document.getElementById('modal');
  if (!modalElement) return null;

  return createPortal(
    <dialog className="search-modal" open={isOpen} onClick={closeModal}>
      <div className="modal-content">
        <form className="modal-form" onSubmit={formHandler}>
          <input
            className="modal-input"
            type="text"
            placeholder={getText('placeholder')}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <button className="modal-button" type="submit">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 1280.000000 1180.000000"
              className="scope"
            >
              <g
                transform="translate(0.000000,1180.000000) scale(0.100000,-0.100000)"
                className="color"
                stroke="none"
              >
                <path
                  d="M4010 11789 c-1105 -89 -2068 -514 -2819 -1244 -510 -496 -874 -1099
                -1052 -1745 -252 -915 -157 -1844 276 -2694 272 -533 690 -1023 1198 -1405
                638 -478 1381 -767 2232 -868 116 -13 227 -17 490 -17 363 0 485 9 788 60 691
                117 1380 410 1930 823 305 229 627 548 843 836 503 669 774 1465 774 2270 0
                880 -324 1742 -918 2448 -664 788 -1636 1325 -2702 1491 -290 46 -776 67
                -1040 45z m737 -1180 c259 -32 496 -90 738 -180 148 -54 424 -191 563 -278
                354 -221 671 -523 892 -851 276 -409 424 -838 461 -1335 23 -312 -26 -684
                -132 -997 -296 -870 -1034 -1564 -1969 -1851 -849 -260 -1784 -165 -2544 260
                -755 422 -1282 1120 -1440 1905 -41 206 -50 303 -50 523 0 220 9 317 50 523
                142 708 584 1344 1234 1777 475 316 1027 495 1635 529 121 7 414 -6 562 -25z"
                />
                <path
                  d="M8496 5040 c-244 -346 -653 -735 -1051 -1000 -82 -55 -158 -106 -168
                -113 -16 -11 212 -223 2054 -1922 1139 -1051 2095 -1931 2124 -1957 l52 -47
                647 596 c514 474 644 599 634 608 -148 136 -1759 1620 -2830 2608 -775 713
                -1409 1297 -1410 1297 -2 -1 -25 -32 -52 -70z"
                />
              </g>
            </svg>
          </button>
        </form>
        <ul className="modal-list">
          {filteredCoins.map((item) => (
            <li key={item}
              className="modal-item"
              onClick={() => itemHandler(item)}
            >
              {item}
              </li>
          ))}
        </ul>
      </div>
    </dialog>,
    modalElement
  );
};

export default SearchModal;