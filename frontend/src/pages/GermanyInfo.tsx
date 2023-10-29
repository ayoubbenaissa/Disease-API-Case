import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../components/Spinner";
import { Error } from "../components/Error";
import { Meta } from "../components/Meta";
import { MetaProps } from "../types/meta";

import "../styles/GermanyInfo.scss";

export const GermanyInfo = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["getGermanyInfo"],
    queryFn: () =>
      fetch(
        "https://uhc7frtxn4.execute-api.us-east-1.amazonaws.com/dev/germany"
      ).then((res) => res.json()),
  });
  if (isPending) return <Spinner spinnerInfo="fetching Germany Info ..." />;
  if (error) return <Error errorText={error.message} />;
  console.log(data);
  const metaProps: MetaProps = data.data.meta;

  const {cases, casesPer100k, deaths, deathsPerWeek, recovered} = data.data;

  return (
    <>
      <h1>Germany Info</h1>

      <div className="statistics-item">
        <div className="statistic-label">cases:</div>
        <div className="statistic-value cases">{cases}</div>
      </div>

      <div className="statistics-item">
        <div className="statistic-label">casesPer100k:</div>
        <div className="statistic-value cases">{casesPer100k}</div>
      </div>

      <div className="statistics-item">
        <div className="statistic-label">deaths:</div>
        <div className="statistic-value deaths">{deaths}</div>
      </div>

      <div className="statistics-item">
        <div className="statistic-label">deathsPerWeek:</div>
        <div className="statistic-value deaths">{deathsPerWeek}</div>
      </div>

      <div className="statistics-item">
        <div className="statistic-label">recovered:</div>
        <div className="statistic-value recovered">{recovered}</div>
      </div>

      <Meta {...metaProps} />
    </>
  );
};
