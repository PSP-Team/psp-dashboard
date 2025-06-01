export default function DragonBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 bg-cover bg-center animate-pulseSlow"
      style={{
        backgroundImage: 'url(/dragon_avatar.jpg)',
        filter: 'brightness(0.35) saturate(1.2)',
      }}
    />
  );
}
