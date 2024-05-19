import Recording from "@/components/Recording";

const CurrentPage = () => {
  return (
    <div>
      <section className="font-extrabold text-4xl w-2/5 p-2 pb-8">
        <span className="bg-[--red] px-2.5 py-[4px] text-[--white]">
          Текущие записи
        </span>
      </section>
      <section className="grid grid-cols-2 gap-3">
        <Recording />
        <Recording />
        <Recording />
        <Recording />
        <Recording />
        <Recording />
        <Recording />
        <Recording />
      </section>
    </div>
  );
};

export default CurrentPage;
