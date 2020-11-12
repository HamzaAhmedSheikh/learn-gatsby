import React, { ReactNode } from "react";
import { Link } from "gatsby";
import Header from "./Header";

type LayoutProps = {
    children: ReactNode,
    headerTitle: string
}

 export default function Layout({children, headerTitle}: LayoutProps) {
    return (
      <div>
        <Header text={headerTitle} subtext="The is the sub heading of" />
       <div>
         {children}
       </div>  
      </div>  
    )
 }