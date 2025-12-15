import SignupForm from "../SignupForm/SignupForm"
import SubscriptionOffer from "../SignupForm/SubscriptionOffer"


function Content() {
  return (
    <>
        <div className=" bg-[url('../../../public/bg.png')] w-screen h-screen flex flex-col lg:flex-row justify-center items-center gap-11.25">
            <div className="max-w-124 text-[#FFFFFF] flex flex-col gap-2.75 mx-6 text-center lg:text-left">
                <div className="text-[28px] sm:text-[50px] font-bold tracking-[-0.29px] sm:tracking-[-0.52px] leading-9 sm:leading-13.75">Learn to code by watching others</div>
                <div className="font-medium leading-6.5">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </div>
            </div>
            <div className="flex flex-col gap-6 mx-6 items-center">
                <SubscriptionOffer />
                <SignupForm />
            </div>
        </div>
    </>
  )
}

export default Content