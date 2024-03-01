"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';


export default function PaginationButtons() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("searchTem");
    const startIndex = +searchParams.get("start") || 1;
    <Suspense>
        <PaginationButtons>{searchParams}</PaginationButtons>
    </Suspense>
    return (
        <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
            {startIndex >= 10 && (
                <Link
                    href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}>
                    <div className="flex flex-col items-center  hover:underline">
                        <BsChevronLeft className="h-5" />
                        <p>Previous</p>
                    </div>
                </Link>
            )}
            {startIndex <= 90 && (
                <Link
                    href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}>
                    <div className="flex flex-col items-center  hover:underline">
                        <BsChevronRight className="h-5" />
                        <p>Next</p>
                    </div>
                </Link>
            )}
        </div>
    );
}
