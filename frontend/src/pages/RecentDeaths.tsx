import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../components/Spinner";
import { Error } from "../components/Error";
import moment from "moment";
import { Case } from "../types/cases";
import { recentDaysDeaths$ } from "../signals/RecentDaysDeaths";

export const RecentDeaths = () => {
  const recentDays = recentDaysDeaths$.value;
  const { isPending, error, data } = useQuery({
    queryKey: ["recentDeaths"],
    queryFn: () =>
      fetch(
        `https://uhc7frtxn4.execute-api.us-east-1.amazonaws.com/dev/cases-per-day/${recentDays}`
      ).then((res) => res.json()),
  });

  if (isPending) return <Spinner spinnerInfo={`fetching deaths for past ${recentDays} days ...`} />;
  if (error) return <Error errorText={error.message} />;
  return (
    <>
      <h1>Recent deaths for last {recentDays} days(s)</h1>
      {data.data.data &&
        data.data.data.map((item: Case, index: any) => (
          <div key={index} className="post">
            <p>Date: {moment(item.date).format("DD-MM-YYYY")}</p>
            <h3>Cases: {item.cases}</h3>
          </div>
        ))}
    </>
  );
};
