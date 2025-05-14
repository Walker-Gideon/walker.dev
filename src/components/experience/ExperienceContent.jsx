function ExperienceContent({ title, subtitle, date, text }) {
  return (
    <div className="">
      <div className="border-2 border-dashed rounded-xl p-4 border-primary">
        <div className="font-medium text-lg">
          <h1 className="text-xl text-blueprime">{title}</h1>
          <h2 className="text-primary">{subtitle}</h2>
          <p className="text-gray-400">{date}</p>
        </div>

        <div className="mt-5">
          {text.map((text, index) => (
            <ul key={index} className="list-disc pl-5">
              <li>{text}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceContent;
