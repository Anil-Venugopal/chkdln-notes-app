const SideView = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    //Create a Note bar where we perform adding and deleting new notes
    <div className="app-sideview">
      <div className="app-sideview-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sideview-notes">
        {sortedNotes.map(
          (
            { id, title, body, lastModified },
            i //loop through notes and create our individual note within our sideView
          ) => (
            //wrap our note preview div inside map
            //bind setActiveNote to avoid default run
            <div
              className={`app-sideview-note ${id === activeNote && "active"}`}
              onClick={() => setActiveNote(id)}
            >
              <div className="sideview-note-title">
                <strong>{title}</strong>
                <button onClick={(e) => onDeleteNote(id)}>DELETE</button>
              </div>

              <p>{body && body.substr(0, 100) + "..."}</p>
              <small className="note-meta">
                Last Modified{" "}
                {new Date(lastModified).toLocaleDateString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SideView;
