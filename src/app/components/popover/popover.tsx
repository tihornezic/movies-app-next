"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { EnumTrigger } from "@/app/lib/types";

type ReactPopoverProps = {
  label: string;
  content: ReactNode;
  trigger?: EnumTrigger;
  className?: React.ComponentProps<"div">["className"];
};

const ReactPopover = ({
  label,
  content,
  trigger = EnumTrigger.click,
  className,
}: ReactPopoverProps) => {
  const [show, setShow] = useState(false);
  const wrapperRef = useRef<any>(null);

  const handleMouseOver = () => {
    if (trigger === EnumTrigger.hover) {
      setShow(true);
    }
  };

  const handleMouseLeft = () => {
    if (trigger === EnumTrigger.hover) {
      setShow(false);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShow(false);
      }
    }

    if (show) {
      // bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [show, wrapperRef]);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseOver}
      className="w-fit h-fit relative flex justify-center transition-all "
    >
      <button
        className="relative text-white flex text-sm items-center gap-1"
        onClick={() => setShow(!show)}
      >
        {label}

        {show ? (
          <ChevronUpIcon className="size-5 text-white" />
        ) : (
          <ChevronDownIcon className="size-5 text-white" />
        )}
      </button>

      <div
        hidden={!show}
        onMouseLeave={handleMouseLeft}
        className={`h-fit fixed z-50 mt-7 transition-all rounded-lg bg-gray-900 px-6 py-5 ${className}`}
      >
        {content}
      </div>
    </div>
  );
};

export default ReactPopover;
