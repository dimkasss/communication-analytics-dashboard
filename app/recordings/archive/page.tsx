import RecordingEditable from "@/components/RecordingEditable";

const ArchievePage = () => {
  return (
    <div>
      <section className="font-extrabold text-4xl w-2/5 p-2 pb-8">
        <span className="bg-[--red] px-2.5 py-[4px] text-[--white]">
          Архив записей
        </span>
      </section>
      <section className="grid grid-cols-2 gap-3">
        <RecordingEditable />
        <RecordingEditable />
        <RecordingEditable />
        <RecordingEditable />
        <RecordingEditable />
        <RecordingEditable />
        <RecordingEditable />
        <RecordingEditable />
      </section>
    </div>
  );
};

export default ArchievePage;
