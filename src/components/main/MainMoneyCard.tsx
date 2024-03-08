import React from "react";

function MainMoneyCard() {
  return (
    <>
      <div className="w-[327px] h-[140px] ml-[31px] bg-white flex rounded-[20px] mt-[20px] justify-center items-center gap-[10px]">
        <div className="flex flex-col w-[140px]">
          <p className="text-[24px] font-[400]">잔액</p>
          <p className="text-[28px] font-[500]">999,000</p>
        </div>
      </div>
    </>
  );
}

export default MainMoneyCard;

// /* Frame 14 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 19px 80px;
// gap: 10px;

// position: absolute;
// width: 327px;
// height: 140px;
// left: 31px;
// top: 106px;

// background: #FFFFFF;
// box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
// border-radius: 20px;

// /* Inside auto layout */
// flex: none;
// order: 2;
// flex-grow: 0;
// z-index: 2;

/* 잔액 999,000 */

// width: 160px;
// height: 77px;

// font-family: 'Inter';
// font-style: normal;
// font-weight: 400;
// font-size: 20px;
// line-height: 24px;

// color: #000000;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
