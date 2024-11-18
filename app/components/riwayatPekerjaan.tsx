import RowRiwayat from "./rowRiwayat";

export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-6">
            <div className="container mx-auto py-10 bg-gray-100 rounded-lg shadow-lg text-center">
                <h2 className="text-4xl font-bold text-black mb-6">Riwayat Pekerjaan</h2>
                <p className="text-lg text-black mb-8">
                    Pengalaman kerja yang telah saya jalani selama beberapa tahun terakhir.
                </p>
            </div>
            <div className="mt-8 space-y-6">
                {/* Google */}
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                    <div className="bg-blue-500 text-white p-4 rounded-full">
                        💼
                    </div>
                    <div className="ml-4 text-black"> {/* Menambahkan text-black untuk teks pengalaman kerja */}
                        <RowRiwayat jenjang="Google" sekolah="Manajer" tahun="2025" />
                    </div>
                </div>
                {/* Tesla */}
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                    <div className="bg-green-500 text-white p-4 rounded-full">
                        💼
                    </div>
                    <div className="ml-4 text-black"> {/* Menambahkan text-black */}
                        <RowRiwayat jenjang="Tesla" sekolah="Staf" tahun="2026" />
                    </div>
                </div>
                {/* Presiden */}
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                    <div className="bg-yellow-500 text-white p-4 rounded-full">
                        💼
                    </div>
                    <div className="ml-4 text-black"> {/* Menambahkan text-black */}
                        <RowRiwayat jenjang="Presiden" sekolah="Staf" tahun="2027" />
                    </div>
                </div>
                {/* DPR */}
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                    <div className="bg-red-500 text-white p-4 rounded-full">
                        💼
                    </div>
                    <div className="ml-4 text-black"> {/* Menambahkan text-black */}
                        <RowRiwayat jenjang="DPR" sekolah="Magang" tahun="2028" />
                    </div>
                </div>
            </div>
        </div>
    );
}
