import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import Image from "next/image";

  export function CardDefault({ service }) {
    return (
      <Card className="mt-6 max-w-72 shadow-md hover:shadow-lg transition-shadow duration-300">
        {/* Center the image in the CardHeader */}
        <CardHeader className="relative flex justify-center items-center w-full h-full">
          <Image
            src={service.imageSrc}
            alt={service.imageAlt}
            className="object-cover rounded-lg"
            width={340}
            height={480}
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {service.name}
          </Typography>
          <Typography data-tooltip-target="tooltip-default"  type="button"title={service.description} className="truncate">{service.description}</Typography>
        <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Tooltip content
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        </CardBody>
        <CardFooter className="pt-0 flex justify-between items-center space-x-4">
          <Button className="text-white bg-[#8A84F1] px-4 py-2 ">
            From {service.price}
          </Button>
          {service.popular && (
            <Button className="text-white bg-red-600 px-4 py-2 w-auto">
              Popular
            </Button>
          )}
        </CardFooter>
      </Card>
    );
  }
