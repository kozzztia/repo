import { getText } from "./getText";

// export const getCoins = async (url: string) => {
//     try {
//       const res = await fetch(url);
//       if (!res.ok) {
//         throw new Error(`${getText('error')} : ${res.status}`);
//       }
//       const data = await res.json();
//       return data;
//     } catch (error) {
//       console.error(getText('error'), error);
//       throw error;
//     }
//   };

export const getCoins = async (url: string) => {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(`${getText('error')} : ${res.status}`);
            }
            const data = await res.json();
            return data;
        } catch (error) {
            console.error(getText('error'), error);
            throw error;
        }
    }