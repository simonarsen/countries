"use client";
import Image from "next/image";
import logo from "../../assets/logo.png";
import styles from "./Logo.module.css";
import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")} className={styles.logo}>
      <Image src={logo} alt="headerLogo" />
    </div>
  );
};
