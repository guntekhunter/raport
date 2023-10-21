import React from "react";
import PrintPage from "../component/print/PrintPage";
import PrintRaport from "../component/print/PrintRaport";

export default function page() {
  return (
    <div>
      {/* <PrintPage id={2} /> */}
      <PrintRaport id={2} />
    </div>
  );
}
