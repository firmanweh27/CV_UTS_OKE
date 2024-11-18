import RowRiwayat from "./rowRiwayat";

export default function RiwayatPendidikan() {
    return (
        <div className="container mx-auto p-6">
            <div className="container mx-auto p-6 text-center bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold text-black mb-4">Riwayat Pendidikan</h2>
                <p className="text-lg text-black">Berikut adalah riwayat pendidikan yang telah saya tempuh.</p>
            </div>
            <div className="mt-8 space-y-6">
                {/* SD */}
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                    <div className="bg-blue-500 text-white p-4 rounded-full">
                        🎓
                    </div>
                    <div className="ml-4 text-black"> {/* Menambahkan text-black untuk memastikan teks jelas */}
                        <RowRiwayat jenjang="SD" sekolah="SDN Wargaluyu 1" tahun="2008" />
                    </div>
                </div>
                {/* SMP */}
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                    <div className="bg-green-500 text-white p-4 rounded-full">
                        🎓
                    </div>
                    <div className="ml-4 text-black"> {/* Menambahkan text-black */}
                        <RowRiwayat jenjang="SMP" sekolah="MTSN Cikancung" tahun="2014" />
                    </div>
                </div>
                {/* SMK */}
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                    <div className="bg-yellow-500 text-white p-4 rounded-full">
                        🎓
                    </div>
                    <div className="ml-4 text-black"> {/* Menambahkan text-black */}
                        <RowRiwayat jenjang="SMK" sekolah="SMK Bakti Ilham" tahun="2017" />
                    </div>
                </div>
                {/* Sarjana */}
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                    <div className="bg-red-500 text-white p-4 rounded-full">
                        🎓
                    </div>
                    <div className="ml-4 text-black"> {/* Menambahkan text-black */}
                        <RowRiwayat jenjang="Sarjana" sekolah="Universitas Masoem" tahun="2022" />
                    </div>
                </div>
            </div>
        </div>
    );
}
