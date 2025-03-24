import Dropdown from "../components/Dropdown";
import Notes from "../components/Notes";
import InputAmount from "../components/InputAmount";
import { useState } from "react";
import RegularButton from "../components/RegularButton";

function TransferPage({ data }) {
    const [notes, setNotes] = useState("");
    const [amount, setAmount] = useState(""); 
    const [transferSuccess, setTransferSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleTransfer = () => {
      const numericAmount = parseFloat(amount.replace(/\./g, "").replace(",", "."));

      if (numericAmount === 0 || !numericAmount) {
        setError("Please enter a valid amount before transferring.");
        setTransferSuccess(false);
        return;
      }

      // Reset error if valid
      setError("");
      setTransferSuccess(true);

      // Hide success message after 3 seconds
      setTimeout(() => setTransferSuccess(false), 3000);
    };

    return (
        <div className="flex justify-center items-center flex-col">
            {/* Title Text */}
            <div
                className="pl-4 w-[659px]" 
                style={{
                    fontFamily: "Open Sans",
                    fontWeight: 600,
                    fontSize: "45px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    marginBottom: "20px",
                }}
            >
                Transfer
            </div>

            {/* Error Message (If amount is invalid) */}
            {error && (
                <div className="bg-red-100 text-red-600 px-4 py-2 rounded-md mb-4 border border-red-400">
                    {error}
                </div>
            )}

            {/* Success Message */}
            {transferSuccess && (
                <div className="text-green-600 text-lg font-semibold mb-4">
                    Transfer Successful!
                </div>
            )}

            {/* Box container */}
            <div className="flex flex-col justify-start items-center w-[659px] h-[500px] bg-white shadow-lg rounded-[20px]">
                {/* Dropdown inside the box */}
                <Dropdown data={data} label="To" showId={true} />
                <InputAmount value={amount} onChange={setAmount} /> 

                {/* Balance Section */}
                <div className="w-[551px] h-[1px] bg-[#FAFBFD] rounded-[20px] p-2 flex flex-col justify-center mt-2">
                    <p className="text-black text-[16px] font-['Open_Sans']">
                        Balance: <span className="text-[#00A86B] font-semibold">IDR 10.000.000</span>
                    </p>
                </div>

                {/* Notes Section */}
                <Notes value={notes} onChange={(e) => setNotes(e.target.value)} />
                <RegularButton onClick={handleTransfer} />
            </div>
        </div>
    );
}

export default TransferPage;
