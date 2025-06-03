import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// Impor semua komponen Anda dengan path yang benar dan ekstensi .jsx
// Pastikan nama folder dan nama file di sini SAMA PERSIS dengan di sistem file Anda.
import Ticket from './ticket/Ticket.jsx'; // Contoh: folder 'Ticket' (T kapital), file 'Ticket.jsx' (T kapital)
import Notification from './Notification/Notification.jsx'; // Contoh: folder 'Notification' (N kapital), file 'Notification.jsx' (N kapital)
import MyWorkshop from './MyWorkshop/MyWorkshop.jsx'; // Contoh: folder 'MyWorkshop' (M, W kapital), file 'MyWorkshop.jsx' (M, W kapital)
import Points from './Points/Points.jsx'; // Contoh: folder 'Points' (P kapital), file 'Points.jsx' (P kapital)
import Settings from './Settings/Settings.jsx'; // Contoh: folder 'Settings' (S kapital), file 'Settings.jsx' (S kapital)
import ShareProfile from './ShareProfile/ShareProfile.jsx'; // Kritis: folder 'ShareProfile' (S, P kapital), file 'ShareProfile.jsx' (S, P kapital)

const Profil = () => {
  const location = useLocation();

  const getActiveMainTab = () => {
    if (location.pathname.includes('/notification')) {
      return 'notification';
    } else if (location.pathname.includes('/my-workshop')) {
      return 'workshop';
    } else if (location.pathname.includes('/karya-points')) {
      return 'karya';
    } else if (location.pathname.includes('/settings')) {
      return 'settings';
    }
    return 'ticket';
  };

  const [activeMainTab, setActiveMainTab] = useState(getActiveMainTab());

  useEffect(() => {
    setActiveMainTab(getActiveMainTab());
  }, [location.pathname]);

  return (
    <div className="bg-[#FCEDDA] min-h-screen text-[#000000] p-30">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar profil */}
        <aside className="md:w-1/3 flex flex-col items-center text-center">
          <div className="relative w-36 h-36">
            <img
              src="./img/profile.png"
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
            />
            <img
              src="/img/badge.png"
              alt="Verified"
              className="absolute bottom-0 right-0 w-[50px] h-[50px]"
            />
          </div>

          <div className="mt-[30px] flex items-center gap-2">
            <h2 className="text-3xl font-bold">Nabila Sari</h2>
          </div>
          <p className="text-lg text-[#696767]">@nabilasari4</p>

          <ShareProfile />

          <div className="mt-10 space-y-2 w-full max-w-full sm:max-w-[300px] px-4">
            <div className="flex justify-between w-full">
              <span className="font-medium">Workshop Attended</span>
              <span className="text-gray-500">4</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="font-medium">Forum Replies</span>
              <span className="text-gray-500">11</span>
            </div>
          </div>

          <div className="mt-10 w-full px-6 md:ml-15 text-left md:text-left flex flex-col items-center md:block">
            <h4 className="font-semibold mb-2">INTEREST</h4>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full">
              <span className="mt-1 bg-[#FFDEB5] px-2 py-1 rounded-full text-sm">Pottery</span>
              <span className="mt-1 bg-[#FFDEB5] px-2 py-1 rounded-full text-sm">Lifestyle & Home</span>
              <span className="mt-1 bg-[#FFDEB5] px-2 py-1 rounded-full text-sm">Painting</span>
            </div>
          </div>
        </aside>

        {/* Konten utama */}
        <section className="flex-1 px-4 md:px-0">
          <div className="border-b border-black mb-10">
            <ul className="flex gap-6 text-sm font-robotoMono overflow-x-auto scrollbar-hide">
              <li
                className={`cursor-pointer pb-2 whitespace-nowrap ${activeMainTab === 'ticket' ? 'border-b-2 border-black' : ''}`}
              >
                <Link to="ticket"><strong>Ticket</strong></Link>
              </li>
              <li
                className={`cursor-pointer pb-2 whitespace-nowrap ${activeMainTab === 'notification' ? 'border-b-2 border-black' : ''}`}
              >
                <Link to="notification"><strong>Notification</strong></Link>
              </li>
              <li
                className={`cursor-pointer pb-2 whitespace-nowrap ${activeMainTab === 'workshop' ? 'border-b-2 border-black' : ''}`}
              >
                <Link to="my-workshop"><strong>My Workshop</strong></Link>
              </li>
              <li
                className={`cursor-pointer pb-2 whitespace-nowrap ${activeMainTab === 'karya' ? 'border-b-2 border-black' : ''}`}
              >
                <Link to="karya-points"><strong>Karya Points</strong></Link>
              </li>
              <li
                className={`cursor-pointer pb-2 whitespace-nowrap ${activeMainTab === 'settings' ? 'border-b-2 border-black' : ''}`}
              >
                <Link to="settings"><strong>Settings</strong></Link>
              </li>
            </ul>
          </div>

          {/* Render komponen aktif berdasarkan rute */}
          <Routes>
            <Route path="ticket" element={<Ticket />} />
            <Route path="notification" element={<Notification />} />
            <Route path="my-workshop" element={<MyWorkshop />} />
            <Route path="karya-points" element={<Points />} />
            <Route path="settings" element={<Settings />} />
            <Route index element={<Ticket />} />
          </Routes>
        </section>
      </div>
    </div>
  );
};

export default Profil;