import React from "react";

interface RecordingProps {
  params: {
    rid: string;
  };
}

const Recording: React.FC<RecordingProps> = ({ params }) => {
  return <div>Страница с информацией о записи №{params.rid}</div>;
};

export default Recording;
