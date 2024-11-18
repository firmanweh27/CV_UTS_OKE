import foto from "../SAYA.jpg"
export default function Hero() { 
    return (
<div className="container mx-auto p-2 text-center">
<h1 className="text-gray-500 font-bold">CV ONLINE</h1>
<h1 className="text-3xl">M. Firmansyah</h1>
<Profile/>
<p>
Saya adalah seorang mahasiswa sistem informasi semester 5, saya sedang menjalani pendidikan di universitas ma'soem
</p>
</div>
    )
}
function Profile(){
    return <img src={foto.src} alt="Aldira Givari" className="fotoku"/>;
  }
  
