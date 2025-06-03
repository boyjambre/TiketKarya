import React, { useState } from 'react';
// Pastikan path ke ShareProfile menggunakan casing yang benar untuk folder 'ShareProfile'
// Tambahkan ekstensi .jsx secara eksplisit pada semua impor komponen lokal
import ShareProfile from '../ShareProfile/ShareProfile.jsx'; // Path dikoreksi
import Notification from '../Notification/Notification.jsx'; // Tambahkan .jsx
import MyWorkshop from '../MyWorkshop/MyWorkshop.jsx'; // Tambahkan .jsx
import Points from '../Points/Points.jsx'; // Tambahkan .jsx
import Settings from '../Settings/Settings.jsx'; // Tambahkan .jsx


const Ticket = () => {
  const [mainTab, setMainTab] = useState('ticket');     // Tab utama: 'ticket' atau lainnya
  const [activeTab, setActiveTab] = useState('upcoming');



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
          onClick={() => setMainTab('ticket')}
          className={`cursor-pointer pb-2 whitespace-nowrap ${mainTab === 'ticket' ? 'border-b-2 border-black' : ''}`}
        >
          <strong>Ticket</strong>
        </li>
        <li
          onClick={() => setMainTab('notification')}
          className={`cursor-pointer pb-2 whitespace-nowrap ${mainTab === 'notification' ? 'border-b-2 border-black' : ''}`}
        >
          <strong>Notification</strong>
        </li>
        <li
          onClick={() => setMainTab('workshop')}
          className={`cursor-pointer pb-2 whitespace-nowrap ${mainTab === 'workshop' ? 'border-b-2 border-black' : ''}`}
        >
          <strong>My Workshop</strong>
        </li>
        <li
          onClick={() => setMainTab('karya')}
          className={`cursor-pointer pb-2 whitespace-nowrap ${mainTab === 'karya' ? 'border-b-2 border-black' : ''}`}
        >
          <strong>Karya Points</strong>
        </li>
        <li
          onClick={() => setMainTab('settings')}
          className={`cursor-pointer pb-2 whitespace-nowrap ${mainTab === 'settings' ? 'border-b-2 border-black' : ''}`}
        >
          <strong>Settings</strong>
        </li>
      </ul>
    </div>


                {/* ===== TICKET TAB CONTENT ===== */}
      {mainTab === 'ticket' && (
        <>

        {/* Tab secondary */}
    <div className="mb-4 mt-12">
      <ul className="flex gap-6 text-l font-semibold overflow-x-auto scrollbar-hide">
        <li
          className={`cursor-pointer pb-2 whitespace-nowrap ${activeTab === 'upcoming' ? 'border-b-2 border-black' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
        Upcoming
        </li>
        <li
          className={`cursor-pointer pb-2 whitespace-nowrap ${activeTab === 'used' ? 'border-b-2 border-black' : ''}`}
          onClick={() => setActiveTab('used')}
        >
        Used
        </li>
      </ul>
    </div>


                {/* UPCOMING */}
                {activeTab === 'upcoming' ? (
                  <div className="bg-[#FEE4C4] overflow-hidden flex md:flex-row flex-col">
                    <div className="w-40 md:w-40 h-full">
                      <img
                        src="/img/pict1.png"
                        alt="Workshop"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 px-3 py-3 relative">
                      <h3 className="font-bold text-lg font-robotoMono">Wheel Throwing for Beginners</h3>
                      <p className="text-sm text-gray-700 mt-1">
                        Learn the basics of pottery on the wheel—from centering clay to shaping your
                        first bowl or cup. Ideal for beginners looking to get their hands muddy!
                      </p>
                      <div className="mt-10 flex justify-between items-center text-sm text-gray-600">
                        <div className="flex gap-6">
                          <span className="flex items-center gap-1">
                            <img src="/img/location.svg" alt="iconL" className="w-4 h-4" />
                            Jakarta, Indonesia
                          </span>
                          <span className="flex items-center gap-1">
                            <img src="/img/calender.svg" alt="iconC" className="w-4 h-4" />
                            June 5, 2025
                          </span>
                        </div>
                        <a href="#" className="text-sm font-semibold text-black underline">See Ticket</a>
                      </div>
                    </div>
                  </div>
                ) : (


                <div>
                  {/*USER */}
                  {/* CARD 1 */}
                  <div className="bg-[#FEE4C4] overflow-hidden flex md:flex-row flex-col">
                    <div className="w-40 md:w-40 h-full">
                      <img src="/img/pict2.png" alt="Workshop" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 px-3 py-3 relative">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg font-robotoMono">Make Your Own Paper Wayang</h3>
                        <div className="text-md font-bold text-gray-700 flex items-center gap-1">
                          <span>N/A</span>
                          <img src="/img/starline.svg" alt="My Icon" className="mb-1 w-7 h-7 object-contain" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mt-1 line-clamp-2">
                        Learn the basics of Indonesian weaving on a mini loom and create your own patterned piece...
                      </p>
                      <div className="mt-10 flex justify-between items-center text-sm text-gray-600">
                        <div className="flex gap-6">
                          <span className="flex items-center gap-1">
                            <img src="/img/location.svg" alt="iconL" className="w-4 h-4" />
                            Jakarta, Indonesia
                          </span>
                          <span className="flex items-center gap-1">
                            <img src="/img/calender.svg" alt="iconC" className="w-4 h-4" />
                            February 12, 2025
                          </span>
                        </div>
                        <a href="#" className="text-sm font-semibold text-black underline">Give a Review</a>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2 */}
                  <div className="bg-[#FCEDDA] overflow-hidden flex md:flex-row flex-col">
                    <div className="w-40 md:w-40 h-full">
                      <img src="/img/pict3.png" alt="Workshop" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 px-3 py-3 relative">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg font-robotoMono">Make Your Own Paper Wayang</h3>
                        <div className="text-md font-bold text-gray-700 flex items-center gap-1">
                          <span>4/5</span>
                          <img src="/img/star.svg" alt="My Icon" className="mb-1 w-7 h-7 object-contain" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mt-1 line-clamp-2">
                        Learn the basics of Indonesian weaving on a mini loom and create your own patterned piece...
                      </p>
                      <div className="mt-10 flex justify-between items-center text-sm text-gray-600">
                        <div className="flex gap-6">
                          <span className="flex items-center gap-1">
                            <img src="/img/location.svg" alt="iconL" className="w-4 h-4" />
                            Rawamangun, East Jakarta
                          </span>
                          <span className="flex items-center gap-1">
                            <img src="/img/calender.svg" alt="iconC" className="w-4 h-4" />
                            April 07, 2025
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                    {/* CARD 3 */}
                  <div className="bg-[#FEE4C4] overflow-hidden flex md:flex-row flex-col">
                    <div className="w-40 md:w-40 h-full">
                      <img src="/img/pict4.png" alt="Workshop" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 px-3 py-3 relative">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg font-robotoMono">Make Your Own Paper Wayang</h3>
                        <div className="text-md font-bold text-gray-700 flex items-center gap-1">
                          <span>N/A</span>
                          <img src="/img/starline.svg" alt="My Icon" className="mb-1 w-7 h-7 object-contain" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mt-1 line-clamp-2">
                        Learn the basics of Indonesian weaving on a mini loom and create your own patterned piece...
                      </p>
                      <div className="mt-10 flex justify-between items-center text-sm text-gray-600">
                        <div className="flex gap-6">
                          <span className="flex items-center gap-1">
                            <img src="/img/location.svg" alt="iconL" className="w-4 h-4" />
                            Jakarta, Indonesia
                          </span>
                          <span className="flex items-center gap-1">
                            <img src="/img/calender.svg" alt="iconC" className="w-4 h-4" />
                            February 12, 2025
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CARD 4 */}
                  <div className="bg-[#FCEDDA] overflow-hidden flex md:flex-row flex-col">
                    <div className="w-40 md:w-40 h-full">
                      <img src="/img/pict5.png" alt="Workshop" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 px-3 py-3 relative">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg font-robotoMono">Make Your Own Paper Wayang</h3>
                        <div className="text-md font-bold text-gray-700 flex items-center gap-1">
                          <span>4/5</span>
                          <img src="/img/star.svg" alt="My Icon" className="mb-1 w-7 h-7 object-contain" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mt-1 line-clamp-2">
                        Learn the basics of Indonesian weaving on a mini loom and create your own patterned piece...
                      </p>
                      <div className="mt-10 flex justify-between items-center text-sm text-gray-600">
                        <div className="flex gap-6">
                          <span className="flex items-center gap-1">
                            <img src="/img/location.svg" alt="iconL" className="w-4 h-4" />
                            Rawamangun, East Jakarta
                          </span>
                          <span className="flex items-center gap-1">
                            <img src="/img/calender.svg" alt="iconC" className="w-4 h-4" />
                            April 07, 2025
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
            )}
        </>
      )}

      {/* == NOTIFICATION == */}
    {mainTab === 'notification' && (
      <div>
        <Notification />
      </div>
    )}

    {/* == MY WORKSHOP == */}
    {mainTab === 'workshop' && (
      <div>
        <MyWorkshop/>
      </div>
    )}

    {/* == KARYA POINTS == */}
    {mainTab === 'karya' && (
      <div>
        <Points/>
      </div>
    )}

    {/* == SETTINGS == */}
    {mainTab === 'settings' && (
      <div>
        <Settings/>
      </div>
    )}

            </section>
          </div>
        </div>
      );
    };

    export default Ticket;