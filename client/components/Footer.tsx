import { FaDiscord, FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-[#050A26] w-full">
      <div className="px-36 py-12 flex justify-between">
        <div>
          <p>Open Rooms on Tuesdays and Thursdays in room 200.</p>
          <p>
            Have questions? Email us at{" "}
            <span className="underline">703837@pdsb.net</span>.
          </p>
        </div>

        <div className="flex gap-6 items-center">
          <FaDiscord className="text-3xl" />
          <FaInstagram className="text-3xl" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
