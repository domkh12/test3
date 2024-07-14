import { Card } from "flowbite-react";
import { AngelButton} from "./ButtonPrimary";

export function CardBoxComponent({image, name, desc}) {
  return (
    <div>
    <Card className="max-w-[330px] bg-service-card-bg w-[330px]">
      <img className="rounded-[50%] w-32 h-32 bg-gray-200" src={image} alt="service image" />
      <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
      {name}
      </h5>
      <p className="font-normal text-white dark:text-gray-400">
      {desc} 
      </p>
      <AngelButton text="Read More"/>
    </Card>
    </div>
  );
}
