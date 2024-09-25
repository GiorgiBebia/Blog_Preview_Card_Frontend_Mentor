function App() {
  return (
    <div className="max-w-[1440px] mobile:max-w-[375px] w-full h-[960px] mobile:h-[812px] bg-[#F4D04E] flex items-center">
      <CardMain />
    </div>
  );
}

export default App;

function CardMain() {
  return (
    <div className="w-[384px] mobile:w-[327px] h-[522px] mobile:h-[501px] mx-auto rounded-[20px] border border-black bg-white shadow-[5px_5px_0px_black] mobile:shadow-[9px_9px_0px_black]">
      <img
        className="m-[24px] rounded-[10px] mobile:hidden"
        src="illustration-article.svg"
        alt="Illustration Article"
      />
      <img
        className="m-[24px] rounded-[10px] hidden mobile:block"
        src="mobile-illustartion-article.png"
        alt="Illustration Article"
      />

      <div className="ml-[24px]">
        <div className="w-[82px] mobile:w-[73px] h-[29px] mobile:h-[26px] bg-[#F4D04E] rounded-[4px] text-center content-center font-figtree font-extrabold text-[14px] mobile:text-[12px] leading-[1.5]">
          Learning
        </div>
        <h3 className="font-figtree text-[14px] mobile:text-[12px] leading-[1.5] mt-[12px]">
          Published 21 Dec 2023
        </h3>
        <h1 className="font-figtree font-bold text-[24px] mobile:text-[20px] leading-[1.5] mt-[12px] hover:text-[#F4D04E]">
          HTML & CSS foundations
        </h1>
        <p className="font-figtree text-[16px] mobile:text-[14px] leading-[1.5] mt-[12px] text-gray-500">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="w-[129px] h-[32px] flex justify-between mt-[24px] items-center">
          <img
            className="w-[32px] h-[32px]"
            src="image-avatar.webp"
            alt="Avatar"
          />
          <h3 className="font-figtree text-[14px] leading-[1.5] font-bold">
            Greg Hooper
          </h3>
        </div>
      </div>
    </div>
  );
}
