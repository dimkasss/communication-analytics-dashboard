import Image from "next/image";
import Recording from "./Recording";

import DeleteIcon from "@/public/delete-icon.svg";

const RecordingEditable = () => {
  return (
    <Recording>
      <div className="flex justify-between *:py-1 *:px-4 *:mt-2">
        <button className="bg-[--gray-20] flex items-center gap-2">
          Удалить
          <Image src={DeleteIcon} alt="Удалить" width={13} />
        </button>
        <p className="text-[--orange-100] font-extrabold text-[22px]">
          Есть замечания
        </p>
      </div>
    </Recording>
  );
};

export default RecordingEditable;
