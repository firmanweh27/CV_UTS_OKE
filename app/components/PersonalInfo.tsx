import React from 'react';
import { FaWhatsapp, FaEnvelope, FaUser, FaBirthdayCake, FaRulerVertical, FaWeight, FaHeart } from 'react-icons/fa';

const PersonalInfo = () => {
    return (
        <div className="container mx-auto p-4 text-center">
            <h2 className="text-4xl font-extrabold mb-6 text-black">Personal Info</h2>
            <div className="bg-gradient-to-r from-indigo-100 to-blue-50 border border-indigo-300 rounded-xl shadow-xl p-8">
                <div className="space-y-5 text-left text-black">
                    <div className="flex items-center">
                        <FaUser className="text-indigo-500 mr-3 text-2xl" />
                        <p className="text-xl"><strong>Nama:</strong> M. Firmansyah</p>
                    </div>
                    <div className="flex items-center">
                        <FaBirthdayCake className="text-indigo-500 mr-3 text-2xl" />
                        <p className="text-xl"><strong>TTL:</strong> Bandung, 27 Maret 2002</p>
                    </div>
                    <div className="flex items-center">
                        <FaUser className="text-indigo-500 mr-3 text-2xl" />
                        <p className="text-xl"><strong>Gender:</strong> Laki-laki</p>
                    </div>
                    <div className="flex items-center">
                        <FaRulerVertical className="text-indigo-500 mr-3 text-2xl" />
                        <p className="text-xl"><strong>Tinggi Badan:</strong> 175 cm</p>
                    </div>
                    <div className="flex items-center">
                        <FaWeight className="text-indigo-500 mr-3 text-2xl" />
                        <p className="text-xl"><strong>Berat Badan:</strong> 65 kg</p>
                    </div>
                    <div className="flex items-center">
                        <FaHeart className="text-red-500 mr-3 text-2xl" />
                        <p className="text-xl"><strong>Status :</strong> Mahasiswa</p>
                    </div>
                    <div className="flex items-center">
                        <FaWhatsapp className="text-green-500 mr-3 text-2xl" />
                        <p className="text-xl"><strong>Whatsapp:</strong> 088-222-157-568</p>
                    </div>
                    <div className="flex items-center">
                        <FaEnvelope className="text-blue-500 mr-3 text-2xl" />
                        <p className="text-xl"><strong>Email:</strong> mfirmansyah270322@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
