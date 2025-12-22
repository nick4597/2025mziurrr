function HobbyList({ hobbies = [], favourites = [], toggleFavourite }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h2>All Hobbies</h2>

      {hobbies.length === 0 ? (
        <p>No hobbies yet</p>
      ) : (
        hobbies.map((hobby) => (
          <div
            key={hobby}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <span>{hobby}</span>

            <span
              onClick={() => toggleFavourite(hobby)}
              style={{
                cursor: "pointer",
                marginLeft: "10px",
                color: favourites.includes(hobby) ? "gold" : "gray",
                fontSize: "18px",
              }}
            >
              {favourites.includes(hobby) ? "★" : "☆"}
            </span>
          </div>
        ))
      )}
    </div>
  );
}

export default HobbyList;

