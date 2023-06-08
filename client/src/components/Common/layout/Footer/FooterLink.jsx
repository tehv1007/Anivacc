import { Fragment } from "react";


export default function FooterLink({ linkItem }) {
  return (
    <ul className="font-[Quicksand] text-[15px] leading-9">
      {linkItem.map((item, i) => {
        return (
          <Fragment key={i}>
            <li>
              <a href="">{item}</a>
            </li>
          </Fragment>
        );
      })}
    </ul>
  );
}
