"use client";
import { SidebarComponent } from "@/components/SidebarComponent";
import { Content } from "@/components/Content";
import { BurgerProvider } from "@/context/BurgerProvider";

export default function Home() {
  return (
    <>
      <BurgerProvider>
        <SidebarComponent />
        <Content />
      </BurgerProvider>
    </>
  );
}
