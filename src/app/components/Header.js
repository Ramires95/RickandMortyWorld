import Image from "next/image";

export default function Header() {
  return (
    <>
      <div style={{ width: "100vw", height: "20vh", position: "relative" }}>
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
