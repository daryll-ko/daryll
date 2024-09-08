import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function Code() {
  const contents = [
    {
      image: "/pillhealth.png",
      altText: "PillHealth product image",
      name: "PillHealth",
      links: {
        github: "https://github.com/daryll-ko/pillhealth",
      },
      description: "Your personal pill pal.",
    },
  ];
  const carouselContents = contents.map(
    ({ image, altText, name, links, description }, i) => (
      <CarouselItem key={i}>
        <div className="flex flex-col justify-center items-center gap-3 aspect-square">
          <Image src={image} width={500} height={500} alt={altText} />
          <div className="flex flex-row gap-5 items-center">
            <h1 className="text-2xl font-bold">{name}</h1>
            <Link href={links.github}>
              <FaGithub className="hover:scale-110 transition-all h-6 w-6" />
            </Link>
          </div>
          <p>{description}</p>
        </div>
      </CarouselItem>
    ),
  );
  return (
    <div>
      <Carousel className="max-w-[60%] md:max-w-[45%] lg:max-w-[30%] mx-auto">
        <CarouselContent>{carouselContents}</CarouselContent>
        <CarouselPrevious className="debug" />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
