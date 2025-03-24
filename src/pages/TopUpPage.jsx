import Dropdown from "../components/Dropdown"
import Notes from "../components/Notes"
import InputAmount from "../components/InputAmount"
import { useState } from "react";
import RegularButton from "../components/RegularButton"


function TopUpPage({data}){
    const [amount, setAmount] = useState("");
    const [notes, setNotes] = useState("");
    const [topUpSuccess, setTopUpSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleTransfer = () => {
      const numericAmount = parseFloat(amount.replace(/\./g, "").replace(",", "."));

      if (numericAmount === 0 || !numericAmount) {
        setError("Please enter a valid amount before transferring.");
        setTopUpSuccess(false);
        return;
      }

      // Reset error if valid
      setError("");
      setTopUpSuccess(true);

      // Hide success message after 3 seconds
      setTimeout(() => setTopUpSuccess(false), 3000);
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
            Top Up
          </div>

          {/* Error Message (If amount is invalid) */}
          {error && (
                <div className="bg-red-100 text-red-600 px-4 py-2 rounded-md mb-4 border border-red-400">
                    {error}
                </div>
            )}

            {/* Success Message */}
            {topUpSuccess && (
                <div className="text-green-600 text-lg font-semibold mb-4">
                    Top Up Successful!
                </div>
            )}
    
          {/* Box container */}
            <div className="flex flex-col justify-start items-center w-[659px] h-[500px] bg-white shadow-lg rounded-[20px]">        
                <InputAmount value={amount} onChange={setAmount} /> 
                <Dropdown data={data} label="From" showId={false}/>


                {/* Notes Section (from NotesInput Component) */}
                <Notes value={notes} onChange={(e) => setNotes(e.target.value)} />
                <RegularButton onClick={handleTransfer} />
            </div>

        </div>
    );

}

export default TopUpPage

