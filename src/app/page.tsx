export default function Home() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center" 
      style={{
        backgroundSize: '100% 100%',
        backgroundPosition: '0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px',
        backgroundImage: 'radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%), radial-gradient(113% 91% at 17% -2%, #D2854BFF 1%, #FF000000 99%), radial-gradient(142% 91% at 83% 7%, #CBF7D7FF 1%, #FF000000 99%), radial-gradient(142% 91% at -6% 74%, #DFB3C0FF 1%, #FF000000 99%), radial-gradient(142% 91% at 111% 84%, #E8BC45FF 0%, #FF0000FF 100%)'
      }}
    >
      <p className="text-black text-sm italic">
        check back later...
      </p>
    </div>
  );
}
