import { useLayoutEffect, useState } from 'react';
import './index.css'
import { getCoins } from '../../utils/getCoins';
const Main = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [coins, setCoins] = useState<string[]>([])
  useLayoutEffect( () => {
    getCoins(apiUrl).then((data) => {
      setCoins(data)
      // console.log(data)
    })

  }, [apiUrl])
  return (
    <main className="main">
      <ul className="coin-list">
      {coins.map((coin) => <li key={coin} className='coin'>{coin?coin:'empty coin'}</li>)}
      </ul>
    </main>

  )
}

export default Main