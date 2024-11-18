export default function RowPekerjaan(props:any) {
    return (
        <div className="border-2 border-indigo-500/75 rounded-lg bg-white-800 p-2 my-5">
            <div className="container mx-auto ">
                <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 md:col-span-3 ">{props.tahun}</div>
                    <div className="col-span-12 md:col-span-3 ">{props.instansi}</div>
                    <div className="col-span-12 md:col-span-3 ">{props.sebagai}</div>
                </div>
            </div>
        </div>
    );
}