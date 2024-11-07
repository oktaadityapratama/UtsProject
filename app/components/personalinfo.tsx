import React from 'react';

const PersonalInfo = () => {
    return (
        <div className="border border-green-300 rounded-lg shadow-lg p-6 max-w-md mx-auto mt-6">
            <h2 className="text-3xl font-bold text-center text-grey-800 mb-4">Personal Info</h2>
            <div className="text-gray-700">
                <p className="text-lg mb-2"><strong>Name:</strong> Okta Aditya Pratama</p>
                <p className="text-lg mb-2"><strong>TTL:</strong> Cimahi, 07 Oktober 2002</p>
                <p className="text-lg mb-2"><strong>Jenis Kelamin:</strong> Laki-Laki</p>
                <p className="text-lg mb-2"><strong>Alamat:</strong> Perum Hegarmanah Indah</p>
                <p className="text-lg mb-2"><strong>Motor Favorit:</strong> Rx King X Ninja</p>
                <p className="text-lg mb-2"><strong>Status Pernikahan:</strong> Belum Menikah</p>
                <p className="text-lg mb-2"><strong>Whatsapp:</strong> 087716720615</p>
                <p className="text-lg"><strong>Email:</strong> oktaadityapratama665@gmail.com</p>
            </div>
        </div>
    );
};

export default PersonalInfo;
