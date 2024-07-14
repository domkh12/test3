import { Button } from "flowbite-react";
import { FaAngleRight } from "react-icons/fa";

export default function PrimaryButton ({text}){
    return(
        <>
        <Button className="bg-button-hover text-white hover:bg-gray-200 hover:text-button-hover">{text}</Button>
        </>
    );
};

export function AngelButton ({text}){
    return(
        <div className="flex flex-row gap-0  text-white border border-white rounded-xl w-36 hover:bg-button-hover hover:text-white hover:border-button-hover">
        <Button>{text}</Button>
        <span><FaAngleRight className="text-marketing-main-color bg-white mt-4 text-[12px] rounded-3xl"/></span>
        </div>
    );
};

export function SecondButton({text}){
    return(
        <div className="flex flex-row gap-0  text-white border bg-marketing-main-color border-marketing-main-color rounded-xl w-36 hover:bg-button-hover hover:text-white hover:border-button-hover">
        <Button>{text}</Button>
        <span><FaAngleRight className="text-marketing-main-color bg-white mt-4 text-[12px] rounded-3xl"/></span>
        </div>
    );
}

export function NormalButton({buttonType, text}){
    return(
        <>
        <Button className={buttonType}>{text}</Button>
        </>
    );
}

export function SocialMediaButton({link}){
    return(
        <>
        <Button className="rounded-[50%] w-10 h-10 border-white text-white hover:border-button-hover hover:bg-button-hover text-xl flex justify-center items-center">{link}</Button>
        </>
    )
}

export function ImageButton({image, text}){
    return(
        <>
        <Button className="bg-marketing-main-color hover:bg-button-hover flex flex-row justify-center items-center">
            <img src={image} alt="buttonImage" className="w-10 h-10"/>
            {text}
        </Button>
        </>
    )
}