import foto from "../foto.jpg";

export default function Hero() {
    return (
        <div className="container mx-auto p-2 text-center">
        <h1 className="text-black-300 font-bold">CV ONLINE</h1>
        <h1 className="text-3x1">Okta Aditya Pratama</h1>
        <Profile />
        <p>
          Perkenalkan nama saya Okta Aditya Pratama,Saya adalah Mahasiswa dari Universitas Masoem.
        </p>
      </div>
    )
}

function Profile() {
    return <img src={foto.src} alt="Adit Profile" className="fotoku" />;
}
