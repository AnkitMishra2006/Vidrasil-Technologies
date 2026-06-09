import logoAsset from "@/assets/tr_logo.png";
import iconAsset from "@/assets/tr_icon.png";

export function Logo({ className = "", size = "default" }: { className?: string; size?: "default" | "nav" | "footer" }) {
  const dimensions = {
    default: { maxWidth: "300px" },
    nav: { maxWidth: "340px" },
    footer: { maxWidth: "300px", filter: "brightness(0) invert(1) drop-shadow(0 0 18px rgb(255 255 255 / 0.22))" },
  }[size];

  return (
    <img
      src={logoAsset}
      alt="Vidrasil Technologies"
      style={dimensions}
      className={`block w-auto h-auto object-contain object-left ${className}`}
    />
  );
}

export function LogoIcon({ className = "h-10 w-10" }: { className?: string }) {
  return <img src={iconAsset} alt="Vidrasil" className={`${className} object-contain`} />;
}
