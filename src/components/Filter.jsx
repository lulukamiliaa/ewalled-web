import { useState } from "react";

function Filter({ transactionData, setFilteredTransactionData }) {
  const [search, setSearch] = useState("");
  const [transactionsToShow, setTransactionsToShow] = useState("10");
  const [sortBy, setSortBy] = useState("Date");
  const [order, setOrder] = useState("Descending");

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    const filtered = transactionData.filter(
      (transactionData) =>
        transactionData.name.toLowerCase().includes(query) ||
        transactionData.description.toLowerCase().includes(query)
    );
    setFilteredTransactionData(filtered);
  };

  return (
    <div className="mb-5 flex flex-wrap justify-between items-center">
      {/* Search Input */}
      <div className="flex items-center border rounded-lg px-3 py-2 w-64">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.9 14.32a8 8 0 111.414-1.415l3.85 3.85a1 1 0 01-1.415 1.415l-3.85-3.85zm-1.4-.92a6 6 0 100-12 6 6 0 000 12z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
          className="w-full bg-transparent border-none focus:outline-none"
        />
      </div>

      {/* Show Transactions & Sort Options */}
      <div className="flex items-center gap-x-6">
        {/* Show Transactions Dropdown */}
        <div className="flex items-center mr-5">
          <span className="text-gray-600 mr-2">Show</span>
          <select
            value={transactionsToShow}
            onChange={(e) => setTransactionsToShow(e.target.value)}
            className="bg-white border rounded-lg px-3 py-2 shadow-sm cursor-pointer"
          >
            <option value="10">Last 10 transactions</option>
            <option value="20">Last 20 transactions</option>
            <option value="50">Last 50 transactions</option>
          </select>
        </div>

        {/* Sort By Dropdown */}
        <div className="flex items-center">
          <span className="text-gray-600 mr-2">Sort by</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white border rounded-lg px-3 py-2 shadow-sm cursor-pointer"
          >
            <option value="Date">Date</option>
            <option value="Amount">Amount</option>
          </select>
        </div>

        {/* Order Dropdown */}
        <div>
          <select
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            className="bg-white border rounded-lg px-3 py-2 shadow-sm cursor-pointer"
          >
            <option value="Descending">Descending</option>
            <option value="Ascending">Ascending</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
