
import Image from "next/image";
const Accordion = ({ title, paymentIconLink, isOpen, onClick, children }) => {
  const toggleAccordion = () => {
    onClick();
  };

  return (
    <div className="border rounded-lg mb-2">
      <label className="flex items-center px-4 py-2 cursor-pointer gap-2">
        <input type="radio" name="accordion" onClick={toggleAccordion} />
        <h3 className="text-sm font-semibold">{title}</h3>
        <Image
          className="w-14 h-6 rounded-md"
          src={paymentIconLink}
          width={60}
          height={60}
          alt=""
        />
      </label>
      <div
        className={`overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        } transition-all duration-500`}>
        <div className="p-4 w-full bg-gray-500 bg-opacity-25">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
