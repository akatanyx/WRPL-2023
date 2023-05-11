import C_Header from "@/components/Customer/C_Header";
import Card_Diskon from "@/components/Customer/Pesanan/Card_Diskon";
import { useState } from "react";

export default function Diskon() {

  return (
    <div className="font-poppins">
      {/* Header */}
      <C_Header>Diskon yang tersedia</C_Header>
      <div className="mb-4"></div>

      {/* Diskon */}
          <Card_Diskon/>
          <Card_Diskon/>
          <Card_Diskon/>
          <Card_Diskon/>
          <Card_Diskon/>

    </div>
  );
}
