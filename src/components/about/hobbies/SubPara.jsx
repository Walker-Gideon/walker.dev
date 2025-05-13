function SubPara({ subTitle, firstText, secText, thirdText }) {
  return (
    <div className="small:py-2 small:px-6 medium:px-4 md:px-10">
      <p className="small:text-xl sm:text-2xl medium:text-3xl text-gray-200 font-medium">
        {subTitle}
      </p>

      <div className="small:py-3">
        <ul className="w-full text-lg small:text-lg sm:text-xl medium:text-2xl text-gray-300">
          <li className="flex md:items-center">
            <span className="">.</span>
            {firstText}
          </li>
          <li className="flex md:items-center">
            <span className="">.</span>
            {secText}
          </li>
          <li className="flex md:items-center">
            <span className="">.</span>
            {thirdText}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SubPara;
