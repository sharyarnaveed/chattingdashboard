
import { ReactNode } from "react";

interface RootLayoutProps {

  sidebar: ReactNode;
  main: ReactNode;
}

export default function RootLayout({sidebar, main }: RootLayoutProps) {
  return (


        <div style={{ display: "flex" }}>
          <aside style={{ width: "20%"  }}>
            {sidebar}
          </aside>
          <main style={{ width: "80%" }}>{main}</main>
        </div>

  );
}
