import { useState } from "react";
import { fetchCoinData } from "../../Services/fetchCoinData";
import { useQuery } from "react-query";
// import { Currencycontext } from "../../context/CurrencyContext";
import currencyStore from "../../State/Store";

function CoinTable() {
//   const {currency} = useContext(Currencycontext);
  const {currency} = currencyStore();
    const [page, setPage] = useState(1);
    const { data, isLoading, isError, error } = useQuery(['coins', page,currency], () =>
        fetchCoinData(page, currency), {
        // retry: 2,
        // retryDelay: 1000,
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error: {error.message}</div>
    }



    return (
        <div className="flex flex-col items-center justify-center gap-5 my-5 w-[80vw] mx-auto">
            <div className="flex items-center justify-center w-full px-2 py-4 font-semibold text-black bg-yellow-500">
                <div className="basis-[35%]">
                    Coin
                </div>
                <div className="basis-[35%]">
                    Price
                </div>
                <div className="basis-[35%]">
                    24h Change
                </div>
                <div className="basis-[35%]">
                    Market Cap
                </div>
            </div>

            <div className="flex flex-col w-[80vw] mx-auto">
                {isLoading && <div>Loading....</div>}
                {data && data.map((coin) => {
                    return (
                        <div key={coin.id} className="flex items-center justify-between w-full px-2 py-4 font-semibold text-white bg-transparent">
                            <div className="flex items-center justify-start gap-3 basis-[35%]">
                                <div className="h-[5rem] w-[5rem]">
                                    <img src={coin.image} className="w-full h-full" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-3xl">{coin.name}</div>
                                    <div className="text-xl">{coin.symbol}</div>
                                </div>
                            </div>

                            <div className="basis-[35%]">
                                {coin.current_price}
                            </div>
                            <div className="basis-[35%]">
                                {coin.price_change_24h}
                            </div>
                            <div className="basis-[35%]">
                                {coin.market_cap}
                            </div>
                        </div>
                    )
                })}

            </div>

            <div className="flex items-center justify-center gap-3">
                                <button
                                    disabled={page === 1}
                                    className="text-2xl text-white btn btn-primary btn-wide"
                                    onClick={() => setPage(page - 1)}>
                                    Prev
                                </button>
                                <button
                                    className="text-2xl text-white btn btn-secondary btn-wide"
                                    onClick={() => setPage(page + 1)}>
                                    Next
                                </button>
                            </div>
        </div>
    )
}
export default CoinTable;