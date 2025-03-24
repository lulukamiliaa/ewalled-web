import { useState, useMemo } from "react";

function UserList({ transactionData }) {
    const [currentPage, setCurrentPage] = useState(1);
    const transactionDataPerPage = 10;

    // Remove duplicate transactionData based on ID
    const uniqueTransactionData = useMemo(() => {
        return transactionData.filter((transactionData, index, self) => 
            index === self.findIndex((u) => u.id === transactionData.id)
        );
    }, [transactionData]);

    // Pagination logic
    const totalPages = Math.ceil(uniqueTransactionData.length / transactionDataPerPage);

    const indexOfLastTransactionData = currentPage * transactionDataPerPage;
    const indexOfFirstTransactionData = indexOfLastTransactionData - transactionDataPerPage;
    const currentTransactionData= uniqueTransactionData.slice(indexOfFirstTransactionData, indexOfLastTransactionData);

    return (
        <div>
        {/* Table Header */}
        <div >
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-white text-gray-700">
                        <th className="py-3 px-4 text-left border">Date & Time</th>
                        <th className="py-3 px-4 text-left border">Type</th>
                        <th className="py-3 px-4 text-left border">From / To</th>
                        <th className="py-3 px-4 text-left border">Description</th>
                        <th className="py-3 px-4 text-left border">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {currentTransactionData.map((transactionData, index) => (
                        <tr key={transactionData.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                            <td className="py-3 px-4 border">{transactionData.date}</td>
                            <td className="py-3 px-4 border">{transactionData.type}</td>
                            <td className="py-3 px-4 border">{transactionData.name}</td>
                            <td className="py-3 px-4 border">{transactionData.description}</td>
                            <td className={`py-3 px-4 font-semibold border ${transactionData.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                                {transactionData.amount.toLocaleString()} {/* Formats number properly */}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
        </div >
        

        {/* Pagination - Aligned Left & Buttons Sticking Together */}
        <div className="flex justify-start items-center mt-4">
            <button
                className={`px-4 py-2 font-medium rounded-l-lg border ${
                    currentPage === 1 
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed" 
                        : "bg-white hover:bg-white text-blue-600"
                }`}
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(1)}
            >
                First
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    className={`px-4 py-2 font-medium border ${
                        currentPage === index + 1 
                            ? "bg-blue-600 text-white"
                            : "bg-white hover:bg-white text-blue-600"
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                >
                    {index + 1}
                </button>
            ))}

            <button
                className={`px-4 py-2 font-medium rounded-r-lg border ${
                    currentPage === totalPages 
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                        : "bg-white hover:bg-white text-blue-600"
                }`}
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            >
                Next
            </button>
        </div>
        </div>
    );
}

export default UserList;
