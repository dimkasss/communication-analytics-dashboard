import Image from "next/image";
import Link from "next/link";
import CustomLink from "./CustomLink";

import VerticalLine from "./VerticalLine";

import RzhdLogo from "@/public/rzhd-logo.svg";
import UploadLogo from "@/public/upload-logo.svg";
import LogoutLogo from "@/public/logout-logo.svg";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between bg-[--white] h-[67px]">
      {/* <h1>Navigation</h1>
      <div className="*:mx-2">
        <Link href="/">Главная</Link>
        <Link href="/input">Отправить аудио</Link>
      </div> */}
      <section className="flex">
        <Image
          src={RzhdLogo}
          width={125}
          alt="RZHD logo"
          className="inline float-left"
        />
        <div className="flex">
          <div></div>
          <CustomLink href="/recordings/current">Текущие записи</CustomLink>
          <VerticalLine />
          <CustomLink href="/recordings/archive">Архив записей</CustomLink>
          <VerticalLine />
          <CustomLink href="/stats">Статистика</CustomLink>
        </div>
      </section>
      <section className="flex ">
        <a
          href="/"
          className="w-[--upload-audio-btn-width] flex items-center justify-center text-center gap-[10px] p-[--upload-audio-and-profile-padding]"
        >
          <p>Загрузить аудиозапись </p>
          <Image src={UploadLogo} alt="Загрузить" width={16} />
        </a>
        <VerticalLine />
        <div className="w-[--user-profile-btn-width] flex items-center p-[--upload-audio-and-profile-padding]">
          <p className="text-[--black-60]">Имя Фамилия</p>
          <div className="flex gap-[--gap-default] p-[--logout-link-padding]">
            Выйти
            <Image
              className="relative top-[1px]"
              src={LogoutLogo}
              alt="Выйти"
              width={14}
            />
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navigation;
