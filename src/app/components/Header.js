import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className=" flex relative mx-5" style={{ width: "95vw", height: "20vh"}}>
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
