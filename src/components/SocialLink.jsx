function SocialLink({ type, flextype }) {
  const base = "w-0 font-medium text-[#555] whitespace-nowrap";
  const flexs = " flex justify-between gap-8";
  const styling = {
    primary: base + " pl-4 grid grid-cols-2 gap-60",
    secondary: base + flexs,
    primflex: flexs + " flex-col",
    secflex: flexs + " flex-row",
  };

  return (
    <div className={styling[type]}>
      <div className={styling[flextype]}>
        <a href="#" className="transition-colors hover:text-[#555]">
          LinkedIn
        </a>
        <a href="#" className="transition-colors hover:text-[#555]">
          Instagram
        </a>
      </div>

      <div className={styling[flextype]}>
        <a href="#" className="transition-colors hover:text-[#555]">
          Facebook
        </a>
        <a href="#" className="transition-colors hover:text-[#555]">
          Twiter
        </a>
      </div>
    </div>
  );
}

export default SocialLink;
