import "../styles/Cases.scss";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../components/Spinner";
import { Error } from "../components/Error";
import { AllCasesTable } from "./AllCasesTable";
import { useState } from "react";
import { InputChangeEvent } from "../types/utils";
import { useNavigate } from "react-router-dom";
import { recentDaysCases$ } from "../signals/RecentDaysCases";

export function Cases() {
  const [nbDays, setNbDays] = useState(0);
  const navigate = useNavigate();
  const handleBtnClick = () => {
    recentDaysCases$.value = nbDays;
    navigate(`/cases-per-days/${nbDays}`);
  };
  const handleRecentDaysChange = (e: InputChangeEvent) => {
    setNbDays(parseInt(e.target.value));
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["allCases"],
    queryFn: () =>
      fetch(
        "https://uhc7frtxn4.execute-api.us-east-1.amazonaws.com/dev/cases"
      ).then((res) => res.json()),
  });

  if (isPending) return <Spinner spinnerInfo="fetching all cases ..." />;
  if (error) return <Error errorText={error.message} />;
  return (
    <>
      <h1>All Cases</h1>
      <div className="info">
        You can also get cases for <strong>N</strong> given days: <br />
        <input
          value={nbDays}
          onChange={handleRecentDaysChange}
          type="number"
          placeholder="enter recent days here"
        />
        <button disabled={nbDays < 1} onClick={handleBtnClick}>
          OK
        </button>
      </div>
      <AllCasesTable cases={data.data.data} />
    </>
  );
}
