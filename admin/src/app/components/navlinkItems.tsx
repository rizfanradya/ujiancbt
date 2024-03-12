import Link from "next/link";
import { sideNavLink } from "./navlinkData";

export default function NavlinkItems() {
  return (
    <>
      {sideNavLink.map((doc, index) => {
        if (doc.subLink) {
          return (
            <li key={index}>
              <details>
                <summary>
                  <span className="text-blue-500">{doc.icon}</span>
                  <span className="text-slate-500/90">{doc.name}</span>
                </summary>
                <ul>
                  {doc.subLink.map((docSub, indexSub) => (
                    <li key={indexSub}>
                      <Link href={`/${docSub.path}`}>
                        <span className="text-blue-500">{docSub.icon}</span>
                        <span className="text-slate-500/90">{docSub.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          );
        } else {
          return (
            <li key={index}>
              <Link href={`/${doc.path}`}>
                <span className="text-blue-500">{doc.icon}</span>
                <span className="text-slate-500/90">{doc.name}</span>
              </Link>
            </li>
          );
        }
      })}
    </>
  );
}
