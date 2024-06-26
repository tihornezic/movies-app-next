"use client";

import clsx from "clsx";
import { ReactNode } from "react";
import { EnumShowOn } from "@/app/lib/types";

type DropdownProps<T> = {
  items: T[];
  itemElement: (key: number | string, item: T) => ReactNode;
  className?: React.ComponentProps<"div">["className"];
  showOn: EnumShowOn;
  emptyStateLabel?: string | null;
};

const sharedStyles =
  "absolute top-8 rounded-md w-[100%] bg-gray-900 overflow-y-auto z-10";

const Dropdown = <T extends { id: number | string }>({
  items,
  itemElement,
  className,
  showOn,
  emptyStateLabel,
}: DropdownProps<T>) => {
  if (showOn === EnumShowOn.hover) {
    return (
      <div
        className={clsx(
          `${sharedStyles} rounded-md w-[100%] bg-gray-900 overflow-y-auto ${className}`,
          {
            "flex items-center justify-center": emptyStateLabel,
          }
        )}
      >
        {emptyStateLabel && (
          <span className="text-gray-200 font-medium">{emptyStateLabel}</span>
        )}

        {items.map((item) => {
          return itemElement(item.id, item);
        })}
      </div>
    );
  }

  return (
    <div
      className={clsx(`${sharedStyles} ${className}`, {
        visible: items.length > 0,
        hidden: items.length === 0,
      })}
    >
      {items.map((item) => {
        return itemElement(item.id, item);
      })}
    </div>
  );
};

export default Dropdown;
