import Image from "next/image";

import StatsTmp from "@/public/stats-tmp.png";

const StatsShorten = () => {
  return (
    <div>
      <Image src={StatsTmp} alt="стастистика" width={787} />
    </div>
  );
};

export default StatsShorten;
