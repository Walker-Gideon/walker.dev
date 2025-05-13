function HobbiesTitle({ num, title }) {
  return (
    <div>
      <p className="text-2xl sm:text-3xl medium:text-4xl md:text-3xl font-bold text-blueprime">
        <span className="text-lg small:text-2xl medium:text-xl font-bold text-gray-300">
          0{num}
        </span>{" "}
        {title}
      </p>
    </div>
  );
}

export default HobbiesTitle;
