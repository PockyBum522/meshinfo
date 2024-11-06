import { Link } from "react-router-dom";

import { HeardBy } from "../components/HeardBy";
import {useGetNodesQuery, useGetTelemetryQuery} from "../slices/apiSlice";

export const NodeSettings = () => {
  const { data: telemetry } = useGetTelemetryQuery();
  const { data: nodes } = useGetNodesQuery();


  if (!nodes) {
    return <div>Loading...</div>;
  }

  if (!telemetry) {
    return <div>Loading...</div>;
  }

  return (
      ""
  );
};
