function SubPara({ subTitle, firstText, secText, thirdText }) {
  return (
    <div className="py-0.5 px-6 md:px-10">
      <p className="text-xl text-gray-200 font-medium">{subTitle}</p>

      <div className="py-2 px-5">
        <ul className="w-full text-lg text-gray-300 list-disc">
          <li>{firstText}</li>
          <li>{secText}</li>
          <li>{thirdText}</li>
        </ul>
      </div>
    </div>
  );
}

export default SubPara;
