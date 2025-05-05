function SocialLink({ type, flextype }) {
  const base = "w-0 font-medium text-lg text-[#555] whitespace-nowrap";
  const flexs = " flex justify-between gap-21";
  const styling = {
    primary: base + " absolute bottom-10 right-25 pl-4",
    secondary: base + flexs,
    primflex: flexs + " flex-col",
    secflex: flexs + " flex-row text-white",
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
