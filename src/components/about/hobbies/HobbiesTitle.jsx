function HobbiesTitle({ num, title, onClick }) {
  return (
    <div role="button" onClick={onClick} className="cursor-pointer w-full">
      <p className="text-2xl font-bold text-blueprime">
        <span className="text-sm font-bold text-gray-300">0{num}</span> {title}
      </p>
    </div>
  );
}

export default HobbiesTitle;
