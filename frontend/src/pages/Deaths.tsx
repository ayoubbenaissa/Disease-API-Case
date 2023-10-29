import "../styles/Cases.scss";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../components/Spinner";
import { Error } from "../components/Error";
import { AllCasesTable } from "./AllCasesTable";
import { useState } from "react";
import { InputChangeEvent } from "../types/utils";
import { useNavigate } from "react-router-dom";
import { recentDaysDeaths$ } from "../signals/RecentDaysDeaths";

export function Deaths() {
  const [nbDays, setNbDays] = useState(0);
  const navigate = useNavigate();
  const handleBtnClick = () => {
    recentDaysDeaths$.value = nbDays;
    navigate(`/deaths-per-days/${nbDays}`);
  };
  const handleRecentDaysChange = (e: InputChangeEvent) => {
    setNbDays(parseInt(e.target.value));
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["allDeaths"],
    queryFn: () =>
      fetch(
        "https://uhc7frtxn4.execute-api.us-east-1.amazonaws.com/dev/deaths"
      ).then((res) => res.json()),
  });

  if (isPending) return <Spinner spinnerInfo="fetching all deaths ..." />;
  if (error) return <Error errorText={error.message} />;
  return (
    <>
      <h1>All deaths</h1>
      <div className="info">
        You can also get deaths for <strong>N</strong> given days: <br />
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
