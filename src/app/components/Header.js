import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className=" flex relative mx-5 h-48">
        <Image
          src="/banner.jpg"
          alt="banner"
          layout="fill"
          className=" rounded-full"
        />
      </div>
    </>
  );
}
