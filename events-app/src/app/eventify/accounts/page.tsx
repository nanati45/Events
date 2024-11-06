import AccountInfo from "@/app/components/Account/AccountInfo";
import ChangeEmail from "@/app/components/Account/ChangeEmail";
import SetPassword from "@/app/components/Account/SetPassword";
import Setting from "@/app/components/Account/Setting";
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Setting />
        <AccountInfo />
      </div>
      <Footer />
    </div>
  );
};

export default page;
