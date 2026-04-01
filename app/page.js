app/page.js
export default function Home() {
  return (
    <div style={{padding: "20px", fontFamily: "Arial"}}>
      <h1>Luxe Watches ⌚</h1>
      <p>Premium Watches at Affordable Prices</p>

      <img 
        src="https://via.placeholder.com/300"
        style={{width: "100%", borderRadius: "10px"}}
      />

      <br /><br />

      <a href="/order/1">
        <button style={{
          padding: "10px 20px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}>
          Order Now
        </button>
      </a>
    </div>
  );
}