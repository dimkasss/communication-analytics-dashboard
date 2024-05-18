"use client";

import Image from "next/image";
import Link from "next/link";
import CustomLink from "./CustomLink";

import VerticalLine from "./VerticalLine";
import localFont from "next/font/local";
import RzhdLogo from "@/public/rzhd-logo.svg";
import UploadLogo from "@/public/upload-logo.svg";
import LogoutLogo from "@/public/logout-logo.svg";

export const FSRail = localFont({
  src: [
    {
      path: "../app/fonts/FSRAIL_Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../app/fonts/FSRAIL_Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

const Navigation = () => {
  const uploadAudio = () => {
    alert("абоба");
  };

  return (
    <nav
      className={
        "flex items-center justify-between bg-[--white] h-[67px] " +
        FSRail.className
      }
    >
      <section className="flex">
        <Link href="/">
          <Image
            src={RzhdLogo}
            width={125}
            alt="RZHD logo"
            className="inline float-left"
          />
        </Link>

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
          onClick={uploadAudio}
          className="w-[--upload-audio-btn-width] flex items-center justify-center text-center gap-[10px] p-[--upload-audio-and-profile-padding] cursor-pointer"
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
