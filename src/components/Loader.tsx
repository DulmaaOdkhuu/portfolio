import { Html } from "@react-three/drei";
import Image from "next/image";

export default function Loader() {
  return (
    <>
      <Html>
        <div className="flex justify-center items-center">
          <div className="w-20 h-20 animate-bounce">
            <Image
              src="/air-balloon.png"
              alt="air-balloon"
              width={100}
              height={100}
            />
          </div>
        </div>
      </Html>
    </>
  );
}
