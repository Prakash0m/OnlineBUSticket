import React from "react";
import InBusImg from "../../assets/inbus.jpg";
import { Link } from "react-router-dom";
import WarningAlert from "../../components/WarningAlert";
import TopLayout from "../../layout/TopLayout";
import RootLayout from "../../layout/RootLayout";

export const Detail = () => {
  // show the waring message box
  const message = (
    <>
      One individual only can book 10 seats. If you want to book more than 10
      setas . Please{" "}
      <Link to={"/support-team"} className="text-yellow-700 font-medium">
        Contact our support team.
      </Link>
    </>
  );

  return (
    <div>
      <div className="w-full space-y-12 pb-16 text-center">
        {/* Top Layout */}
        <TopLayout bgImg={InBusImg} title={"Bus Details"} />
        <RootLayout className="space-y-12 w-full pb-16 ">
          {/* seat layout and selection action details */}
          <div className="w-full sapce-y-8">
            {/* Warning  Message */}
            <WarningAlert message={message} />
            {/* Seat Layout */}
          </div>
          {/* Bus Details */}
          <div className="w-full flex items-center justify-center flex-col gap-8 text-center"></div>
        </RootLayout>
      </div>
    </div>
  );
};
