import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../components/Spinner";
import { Error } from "../components/Error";
import { recentDaysCases$ } from "../signals/RecentDaysCases";
import moment from "moment";
import { Case } from "../types/cases";

export const RecentCases = () => {
  const recentDays = recentDaysCases$.value;
  const { isPending, error, data } = useQuery({
    queryKey: ["recentCases"],
    queryFn: () =>
      fetch(
        `https://uhc7frtxn4.execute-api.us-east-1.amazonaws.com/dev/cases-per-day/${recentDays}`
      ).then((res) => res.json()),
  });

  if (isPending) return <Spinner spinnerInfo={`fetching cases for past ${recentDays} days ...`} />;
  if (error) return <Error errorText={error.message} />;
  return (
    <>
      <h1>Recent Cases for last {recentDays} days(s)</h1>
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
