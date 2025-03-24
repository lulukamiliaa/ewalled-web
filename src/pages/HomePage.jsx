import UserList from "../components/ListUser";
import Greeting from "../components/Greeting";
import AccountBalanceInfo from "../components/AccountBalanceInfo";
import Filter from "../components/Filter";
import { useState, useEffect } from "react";
// import ThemeContext from "../context/ThemeContext";

function HomePage() {
  const [transactionData, setTransactionData] = useState([]);
  const [filteredTransactionData, setFilteredTransactionData] = useState([]);

  useEffect(() => {
    const fetchedTransactionData = [
        { id: 1, date: "20:10 - 30 June 2022", type: "Transfer", name: "Sendy", description: "Fore Coffee", amount: -75000 },
        { id: 2, date: "20:10 - 30 June 2022", type: "Topup", name: "", description: "Topup from Bank Transfer", amount: 1000000 },
        { id: 3, date: "20:10 - 30 June 2022", type: "Transfer", name: "Spongebob", description: "Fore Coffee", amount: -75000 },
        { id: 4, date: "20:10 - 30 June 2022", type: "Topup", name: "", description: "Topup from Bank Transfer", amount: 1000000 },
        { id: 5, date: "20:10 - 30 June 2022", type: "Transfer", name: "Anwar", description: "Beli barang", amount: -75000 },
        { id: 6, date: "20:10 - 30 June 2022", type: "Transfer", name: "Joko", description: "Transfer", amount: 1000000 },
        { id: 7, date: "20:10 - 30 June 2022", type: "Transfer", name: "Joko", description: "Fore Coffee", amount: -75000 },
        { id: 8, date: "20:10 - 30 June 2022", type: "Topup", name: "", description: "Topup from Bank Transfer", amount: 1000000 },
        { id: 9, date: "20:10 - 30 June 2022", type: "Transfer", name: "Joko", description: "Fore Coffee", amount: -75000 },
        { id: 10, date: "20:10 - 30 June 2022", type: "Topup", name: "", description: "Topup from Bank Transfer", amount: 1000000 },
        { id: 11, date: "20:10 - 30 June 2022", type: "Topup", name: "A", description: "Topup from Bank Transfer", amount: 1000000 },
        { id: 12, date: "20:10 - 30 June 2022", type: "Topup", name: "B", description: "Topup from Bank Transfer", amount: 1000000 },
        { id: 13, date: "20:10 - 30 June 2022", type: "Topup", name: "C", description: "Topup from Bank Transfer", amount: 1000000 },
        { id: 14, date: "20:10 - 30 June 2022", type: "Topup", name: "D", description: "Topup from Bank Transfer", amount: 1000000 },
        { id: 15, date: "20:10 - 30 June 2022", type: "Topup", name: "E", description: "Topup from Bank Transfer", amount: 1000000 },
        { id: 16, date: "20:10 - 30 June 2022", type: "Topup", name: "F", description: "Topup from Bank Transfer", amount: 1000000 },
        { id: 17, date: "20:10 - 30 June 2022", type: "Topup", name: "G", description: "Topup from Bank Transfer", amount: 1000000 },
        { id: 18, date: "20:10 - 30 June 2022", type: "Topup", name: "H", description: "Topup from Bank Transfer", amount: 1000000 },
        { id: 19, date: "20:10 - 30 June 2022", type: "Topup", name: "I", description: "Topup from Bank Transfer", amount: 1000000 },
        { id: 20, date: "20:10 - 30 June 2022", type: "Topup", name: "J", description: "Topup from Bank Transfer", amount: 1000000 },
        { id: 21, date: "20:10 - 30 June 2022", type: "Topup", name: "K", description: "Topup from Bank Transfer", amount: 1000000 },
    ];
    setTransactionData(fetchedTransactionData);
    setFilteredTransactionData(fetchedTransactionData);
}, []);

  return (
    <div>
      {/* <ThemeContext.Provider value="light"> */}
        <Greeting/>
        <AccountBalanceInfo/>

        <Filter transactionData={transactionData} setFilteredTransactionData={setFilteredTransactionData} />
        <UserList transactionData={filteredTransactionData} />

      {/* </ThemeContext.Provider> */}
    </div>
  );
}

export default HomePage;
