import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: 'Nabila',
    lastName: 'Sari',
    username: 'nabilasari4',
    email: 'nabilasari4@email.com',
    phone: '(+62)555-2304-324',
    country: 'Indonesia',
    language: 'Bahasa Indonesia',
    about: '',
  });

  const [profileImage, setProfileImage] = useState('/img/profile.png');
  const [notification, setNotification] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    const isValid = Object.values(formData).every(value => value.trim() !== '');

    if (!isValid) {
      setNotification('Please fill out all fields before updating.');
      setTimeout(() => setNotification(''), 3000);
      return;
    }

    setNotification('Profile successfully updated!');
    setTimeout(() => setNotification(''), 3000);
  };

  const handleRemovePhoto = () => {
    setProfileImage(null);
  };

  const handleCancel = () => {
    navigate(-1);  // kembali ke halaman sebelumnya
  };

  return (
    <div className="max-w-4xl ml-0 px-[-10px] py-2 text-sm">
      <h2 className="text-xl font-bold mb-4">Profile</h2>
      <p className="mb-4 text-gray-700">
        This information will be displayed publicly so be careful what you share.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 font-medium">First name</label>
          <input
            type="text"
            name="firstName"
            className="w-full border border-gray-400 bg-[#EBDECE] px-3 py-2 rounded"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Last name</label>
          <input
            type="text"
            name="lastName"
            className="w-full border border-gray-400 bg-[#EBDECE] px-3 py-2 rounded"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Username</label>
          <div className="flex items-center border border-gray-400 bg-[#EBDECE] rounded px-3 py-2 w-82">
            <span className="mr-2 text-gray-500">@</span>
            <input
              type="text"
              name="username"
              className="w-full bg-transparent outline-none"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Photo upload */}
        <div className="md:col-span-2 mt-4">
          <label className="block mb-1 font-medium">Photo</label>
          <div className="flex items-center gap-4">
            {profileImage && (
              <img src={profileImage} alt="Profile" className="w-12 h-12 rounded-full" />
            )}
            <button className="bg-[#FF5126] text-white px-3 py-1 rounded-[5px] text-sm">Change</button>
            {profileImage && (
              <button onClick={handleRemovePhoto} className="text-red-600 text-sm">Remove</button>
            )}
          </div>
        </div>

        <div className="md:col-span-2 mt-4">
          <label className="block mb-1 font-medium">About</label>
          <textarea
            name="about"
            className="w-full border border-gray-400 bg-[#EBDECE] px-3 py-2 rounded"
            rows="3"
            value={formData.about}
            onChange={handleChange}
            placeholder="Review Description"
          />
          <p className="text-xs text-gray-500 mt-1">Brief description for your profile. URLs are hyperlinked.</p>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4">Personal Information</h2>
      <p className="mb-4 text-gray-700">
        This information will be displayed publicly so be careful what you share.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-1 font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-400 bg-[#EBDECE] px-3 py-2 rounded"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="text"
            name="phone"
            className="w-full border border-gray-400 bg-[#EBDECE] px-3 py-2 rounded"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Country</label>
          <input
            type="text"
            name="country"
            className="w-full border border-gray-400 bg-[#EBDECE] px-3 py-2 rounded"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Language</label>
          <input
            type="text"
            name="language"
            className="w-full border border-gray-400 bg-[#EBDECE] px-3 py-2 rounded"
            value={formData.language}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Notification + Buttons */}
      <div className="mt-10 flex items-center w-full">
        {notification && (
          <div className={`font-semibold ${notification.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
            {notification}
          </div>
        )}
        <div className="flex gap-6 ml-auto">
          <button
            onClick={handleCancel}
            className="bg-[#FFDEB5] text-black rounded-[5px] px-6 py-2 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="bg-[#FF5126] rounded-[5px] text-white px-6 py-2 text-sm"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
