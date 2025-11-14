import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function ListCast({ setSelectedCast, cast }) {
  return (
    <div className="cast-container">
      {cast && cast.length > 0
        ? cast.map((member) => (
            <Tippy content={member.name} key={member.id}>
              <a onClick={() => setSelectedCast(member)}>
                <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
              </a>
            </Tippy>
          ))
        : null}
    </div>
  );
}

export default ListCast;
