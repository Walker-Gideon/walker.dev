function SubPara({ subTitle, firstText, secText, thirdText }) {
  return (
    <div className="small:py-2 small:px-6 medium:px-4 md:px-10">
      <p className="text-2xl text-gray-200 font-medium">{subTitle}</p>

      <div className="small:py-3 px-5">
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
