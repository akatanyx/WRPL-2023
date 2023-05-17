import Link from 'next/link';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
//import mapboxgl from 'mapbox-gl/dist/mapbox-gl';


// Replace with your Mapbox access token
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZmFkeWFuYWJpbGEiLCJhIjoiY2xocjNvczUwMmEzZTNlczFlOTBzcXVlYyJ9.UiIB0PvYqbVzyxSntcbd_Q';

export default function Signup() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const phone = null; // set phone to null
  const imgURL = null;
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [coordinates, setCoordinates] = useState(''); // Store the coordinates
  const router = useRouter();

  // Function to initialize the map
  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9,
    });

    // Add navigation controls
    map.addControl(new mapboxgl.NavigationControl());

    // Add a marker on map click
    map.on('click', (e) => {
      const { lng, lat } = e.lngLat;
      console.log('Coordinates:', lng, lat);
      setCoordinates({ lng, lat }); // Update the coordinates state
    });

    return () => {
      // Clean up the map after component unmounts
      map.remove();
    };
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Retrieve the coordinates if available
    const { lng, lat } = coordinates || {};
    console.log('Selected Coordinates:', lng, lat);

    const response = await fetch('/api/signup?type=user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nama, email, phone, imgURL, password, repassword, coordinates: { lng, lat } }),
    });
    if (response.ok) {
      router.push('/customer/login');
    } else {
      console.error(response);
    }
  };

  return (
    <>
      {/* Navigasi Back To Index */}
      <div className="mx-[27px] my-[29px]">
        <Link href="/customer">
          <button>
            <img src="/icon_login_arrow_back.svg" alt="" />
          </button>
        </Link>
      </div>

      {/* Image */}
      <img src="/signup_c_image.svg" alt="" className="mx-auto" />

      {/* Signup*/}
      <div className="flex flex-col mt-10 gap-y-3 w-full">
        <h1 className="mx-[37px] font-poppins font-bold text-[24px] sm:mx-auto">
          Register
        </h1>

        <form className="flex flex-col gap-y-5 mt-4 items-center" onSubmit={handleSubmit}>

          {/* Nama */}
          <div>
            <input
              type="text"
              className="border border-[#9A9A9A] rounded-lg h-[53px] font-poppins w-[290px] text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
              placeholder="Nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="text"
              className="border border-[#9A9A9A] rounded-lg w-[290px] h-[53px] font-poppins text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              className="border border-[#9A9A9A] rounded-lg w-[290px] h-[53px] font-poppins text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Re-enter Password */}
          <div>
            <input
              type="password"
              className="border border-[#9A9A9A] rounded-lg w-[290px] h-[53px] font-poppins text-[19px] p-3 px-4 text-[#838080] focus:outline-none"
              placeholder="Re-enter Password"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
            />
          </div>

          {/* Button Regsiter */}
          <button className="flex justify-center items-center w-[290px] h-[44px] bg-[#EC7505] rounded-lg shadow-lg mt-2">
            <h1 className="text-white font-semibold font-poppins text-[19px]">
              Register
            </h1>
          </button>
        </form>

        {/* tidak punya akun */}
        <div className="flex -translate-y-1 justify-center font-poppins ">
          <h2 className="text-sm">
            Already have an account?{" "}
            <Link href="/customer/login">
              <button>
                <h1 className="font-bold text-sm">Login</h1>
              </button>
            </Link>
          </h2>
        </div>

        {/* Map */}
        <div id="map" style={{ height: '400px', width: '100%' }}></div>
      </div>
    </>
  );
}
