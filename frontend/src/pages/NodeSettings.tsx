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
      <div>
        <h1 className="mb-2 text-xl">Required Node Settings for Map Visibility</h1>

        <p>
          <b>Channels > Click on LongFast</b>
          <ul>
            <li>Uplink Enabled: True</li>
            <li>Downlink Enabled: Recommended False</li>
            <li>Position Enabled: True</li>
            <li>Precise Location: False</li>
            <li>Bottom slider: 1194ft is the *most* accurate setting that will still show up on any map. This is a
              meshtastic limitation.
            </li>
            <br/>
            <li>Be sure to click send to save after each page/section</li>
          </ul>

          <b>Position:</b>

          <ul>
            <li>Set your lat/long/alt and set "Used fixed position" to True if your node doesn't have GPS or is
              stationary
            </li>
            <li>Otherwise set your GPS settings.</li>

          </ul>

          <b>Lora:</b>
          <ul>
            <li>OK to MQTT: True</li>
          </ul>

          <b>MQTT:</b>
          <ul>
            <li>Address: mqtt.meshtastic.org</li>
            <li>Username: meshdev</li>
            <li>Password: large4cats</li>
            <br/>
            <li>Encryption enabled: True</li>
            <li>JSON output enabled: False</li>
            <li>Root topic: msh/US/FL/anything</li>
            <ul>
              (Typical options to replace 'anything' above are: orl, jax, etc...As long as your root topic starts with
              msh/US/FL then you're good.)
            </ul>
            <li>Proxy to client enabled: True if your board isn't directly hooked to Wi-Fi or Ethernet.</li>
            <li>Map reporting: True</li>
            <li>Precise location: False</li>
            <br/>
            <li>Slider at the bottom: 1194 feet is the *most* accurate you can set things to and still have your node
              show up on maps.
            </li>
            <br/>
            <li>Map reporting interval: 900</li>
          </ul>
        </p>
      </div>
  );
};
