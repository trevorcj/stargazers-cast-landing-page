import ToggleTheme from "./ToggleTheme";

function Nav({ cast, setSelectedCast }) {
  return (
    <nav className="container">
      <ul>
        <li>
          <a href="#">
            <img
              style={{ height: "50px" }}
              src="images/logo_bug_stargazers.svg"
              alt="Stargazers Logo"
            />
          </a>
        </li>
        <li>
          <strong>Stargazers</strong>
        </li>
      </ul>
      <ul>
        <li>
          <ToggleTheme />
        </li>
        <details className="dropdown">
          <summary>Cast</summary>
          <ul dir="rtl">
            {cast && cast.length > 0 ? (
              cast.map((member) => (
                <li key={member.id}>
                  <a href="#" onClick={() => setSelectedCast(member)}>
                    {member.name}
                  </a>
                </li>
              ))
            ) : (
              <li>No cast members available</li>
            )}
          </ul>
        </details>
      </ul>
    </nav>
  );
}

export default Nav;
