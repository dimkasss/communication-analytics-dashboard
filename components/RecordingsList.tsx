import React from "react";
import Recording from "./Recording";

interface RecordingsListProps {
  len: number;
}

const RecordingsList: React.FC<RecordingsListProps> = ({ len }) => {
  return (
    <div>
      {len == 2 ? (
        <>
          <Recording />
          <Recording />
        </>
      ) : (
        <>
          <Recording />
          <Recording />
          <Recording />
          <Recording />
        </>
      )}
    </div>
  );
};

export default RecordingsList;
