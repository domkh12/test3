import PrimaryButton from "./ButtonPrimary";

export function TopSection(){
    return(
        <div className="flex flex-row gap-10">
            <section>
            <small className="text-md"><span className="text-yellow-300">//</span>
                AGENCY
            </small>
            <h1 className="text-5xl w-500 font-semibold">A fully integrated digital
                <span className="text-blue-500"> marketing</span> agency
            </h1>
            <br />
            <small className="w-500 text-sm">Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt ius ex.</small>
            <br />
            <small>Ut vis mazim erroribus forensibus.</small>
            <br />
            <br />
            <div className="flex flex-row gap-5">
            <PrimaryButton text="Our Service"/>
            <PrimaryButton text="Get Started"/>
            </div>
            </section>
            <section>
                <img src="./public/marketing/marketing.png" alt="Marketing" className="w-full h-auto "/>
            </section>
        </div>
    );
}