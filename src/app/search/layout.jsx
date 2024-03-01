
import { Suspense } from "react";
import SearchHeader from "../../components/SearchHeader";
import "./../globals.css";

export default function layout({ children }
) {
    return (
        <div>
            <Suspense>
                <SearchHeader />
                {children}
            </Suspense>
        </div>
    )
}
