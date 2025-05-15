function ExperienceContent({ title, subtitle, date, text }) {
  return (
    <div className="">
      <div className="border-2 border-dashed rounded-xl small:p-8 md:p-4 border-primary">
        <div className="font-medium text-lg">
          <h1 className="font-bold text-blueprime">{title}</h1>
          <h2 className="font-medium text-primary py-0.5">{subtitle}</h2>
          <p className="text-gray-400">{date}</p>
        </div>

        <div className="mt-5">
          {text.map((text, index) => (
            <ul key={index} className="list-disc pl-5">
              <li className="py-1">{text}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceContent;
