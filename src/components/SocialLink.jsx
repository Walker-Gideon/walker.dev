function SocialLink({ type, flextype }) {
  const base =
    "w-0 font-medium text-lg small:text-xl text-[#555] whitespace-nowrap";
  const flexs = "flex justify-between";
  // gap-10 small:gap-4 sm:gap-7
  const styling = {
    primary: base + " absolute bottom-10 right-25 pl-4",
    secondary: base + flexs,
    primflex: flexs + " flex-col",
    secflex: flexs + " flex-row text-white small:justify-between",
  };

  return (
    <div className={styling[type]}>
      <div className={styling[flextype]}>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">X (Twitter)</a>
      </div>
    </div>
  );
}

export default SocialLink;
