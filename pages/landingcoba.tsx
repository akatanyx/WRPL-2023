import NavbarCust from "@/components/Customer/Navbar";
import Header_Customer from "@/components/Header_Customer";

export default function Home () {
    return (
        <div>
          {/* Header1 */}
          <div>
            <Header_Customer />
          </div>
          {/* Content */}
          <div>welcome to letseat</div>
          {/* Navbar */}
          <NavbarCust />
          <div></div>
        </div>
      );
}