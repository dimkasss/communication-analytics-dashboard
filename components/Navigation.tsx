import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-100">
      <h1>Navigation</h1>
      <div className="*:mx-2">
        <Link href="/">Главная</Link>
        <Link href="/input">Отправить аудио</Link>
      </div>
    </nav>
  );
};

export default Navigation;
