import Link from "next/link";
import { adminSideNavLink } from "../navlinkData";

export default function AdminNavlinkItems() {
  return (
    <>
      {adminSideNavLink.map((doc, index) => {
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
                      <Link href={`/admin/${docSub.path}`}>
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
              <Link href={`/admin/${doc.path}`}>
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
