import { useEffect, useLayoutEffect, useState } from 'react';
import './index.css';
import { getCoins } from '../../utils/getCoins';
import { Header, SearchModal } from '../../components';

const Main = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getValueFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('search');
  };

  const [coins, setCoins] = useState<string[]>([]);
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('');

  useLayoutEffect(() => {
    getCoins(`${apiUrl}`).then((data) => {
      setCoins(data);
    });
  }, [apiUrl]);

  useEffect(() => {
    const search = getValueFromUrl();
    if (search) {
      setFilter(search);
    }
  }, [openPopUp]);

  const filteredCoins = coins.filter((coin) => coin.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <Header handler={setOpenPopUp} />
      <main className="main">
        <ul className="coin-list">
          {filteredCoins.map((coin) => (
            <li key={coin} className='coin'>{coin ? coin : 'empty coin'}</li>
          ))}
        </ul>
      </main>
      <SearchModal 
        isOpen={openPopUp}
        setIsOpen={setOpenPopUp}  
        list={coins} 
      />
    </>
  );
}

export default Main;