import Image from "next/image";
import styles from "./flowers.module.css";
import img1 from "../public/1.jpg";
import img2 from "../public/2.jpg";
import img3 from "../public/3.jpg";
import img4 from "../public/4.jpg";
import img5 from "../public/5.jpg";

export default function Flower() {
  return (
    <>
      {[img1, img2, img3, img4, img5].map((path) => (
        <div key={path}>
          <Image
            src={path}
            alt="flowers"
            width="600"
            height="780"
            className={styles.images}
            placeholder="blur"
            blu
          />
        </div>
      ))}
    </>
  );
}
