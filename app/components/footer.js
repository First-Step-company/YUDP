import { Typography } from "@material-tailwind/react";

export function Footer() {
  return (<>
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="black" className="font-normal ml-3">
        &copy; {new Date().getFullYear()} First Step
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 mr-5" color="black">
        <li>
          <Typography
            as="a"
            href="#"
            color="black"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Instagram
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="black"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Facebook
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="black"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Tiktok
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="black"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
    </>
  );
}
