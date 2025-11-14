import { useEffect, useRef } from "react";

function Modal({ cast, member, setSelectedCast }) {
  const overlayRef = useRef(null);

  console.log("Modal member:", member);
  console.log("Cast member:", cast[member.id]);

  function handleCloseModal() {
    setSelectedCast(null);
  }

  // Close modal when overlay is clicked
  function handleOverlayClick(e) {
    if (e.target === overlayRef.current) {
      handleCloseModal();
    }
  }

  function handlePrevMember() {
    if (member.id - 1 < 0) {
      setSelectedCast(cast[cast.length - 1]);
      return;
    } else {
      setSelectedCast(cast[member.id - 1]);
    }
  }

  function handleNextMember() {
    if (member.id + 1 >= cast.length) {
      setSelectedCast(cast[0]);
      return;
    } else {
      setSelectedCast(cast[member.id + 1]);
    }
  }

  // close modal when 'Escape' key is pressed
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [setSelectedCast]);

  return (
    <dialog
      open
      className="modal-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
    >
      <article>
        <header style={{ height: "2.4rem" }}>
          <button
            aria-label="close"
            rel="prev"
            onClick={handleCloseModal}
          ></button>
        </header>
        <hgroup>
          <div
            style={{
              //   display: "flex",
              gap: "1rem",
            }}
          >
            <img
              style={{ width: "100px" }}
              src={`images/${member.slug}.svg`}
              alt={member.name}
            />
            <hgroup>
              <h1>{member.name}</h1>
              <p style={{ fontSize: "16px", marginTop: "20px" }}>
                {member.bio}
              </p>
            </hgroup>
          </div>
        </hgroup>

        <footer>
          <a href="#" role="button" onClick={handlePrevMember}>
            Prev
          </a>
          <a href="#" role="button" onClick={handleNextMember}>
            Next
          </a>
        </footer>
      </article>
    </dialog>
  );
}

export default Modal;
