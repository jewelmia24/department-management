"use client";
import React from "react";
import Link from "next/link";
import Logout from "../components/logout";
import { redirect } from "next/navigation";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { useSession } from "next-auth/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  if (!session) redirect("/auth/login");
  return (
    <div>
      <Provider store={store}>
        <div className="bg-sky-500">
          <nav className="container mx-auto py-4 px-4 flex justify-between">
            <div className=" flex gap-2">
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/profile">Profile</Link>
            </div>
            <Logout />
          </nav>
        </div>
        {children}
      </Provider>
    </div>
  );
}
