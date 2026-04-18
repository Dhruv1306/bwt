import { useState } from "react";

type FoodItem = {
  id: number;
  name: string;
  rating: number;
};

const initialFoodData: FoodItem[] = [
  { id: 1, name: "🍕 Pizza", rating: 0 },
  { id: 2, name: "🍔 Burger", rating: 0 },
  { id: 3, name: "🌮 Taco", rating: 0 },
  { id: 4, name: "🥗 Salad", rating: 0 },
];

export function FoodRating() {
  const [foodItems, setFoodItems] = useState<FoodItem[]>(initialFoodData);
  const [filter, setFilter] = useState<"all" | "high" | "low" | "unrated">("all");

  const handleRating = (id: number, rating: number) => {
    setFoodItems(
      foodItems.map((item) => (item.id === id ? { ...item, rating } : item)),
    );
  };

  // Filter logic
  const getFilteredItems = () => {
    switch (filter) {
      case "high":
        return foodItems.filter((item) => item.rating >= 4);
      case "low":
        return foodItems.filter((item) => item.rating < 3 && item.rating > 0);
      case "unrated":
        return foodItems.filter((item) => item.rating === 0);
      case "all":
      default:
        return foodItems;
    }
  };

  const filteredItems = getFilteredItems();

  // Statistics calculations
  const allRatingsZero = foodItems.every((item) => item.rating === 0);

  const averageRating = allRatingsZero ? 0 : (
        foodItems.reduce((sum, item) => sum + item.rating, 0) / foodItems.length
      ).toFixed(2);

  const highestRated = allRatingsZero ? "N/A" : foodItems.reduce((prev, current) =>
        current.rating > prev.rating ? current : prev,
      ).name;

  const lowestRated = allRatingsZero ? "N/A" : foodItems.reduce((prev, current) =>
        current.rating < prev.rating ? current : prev,
      ).name;

  const countHighRated = foodItems.filter((item) => item.rating >= 4).length;

  return (
    <div>
      <h1>Food Items</h1>

      <div style={{ marginBottom: "20px" }}>
        <h3>Filter:</h3>
        <button onClick={() => setFilter("all")} style={{ fontWeight: filter === "all" ? "bold" : "normal" }} > {" "} Show All{" "} </button>
        <button onClick={() => setFilter("high")} style={{ fontWeight: filter === "high" ? "bold" : "normal" }} > {" "} High Rated (4+ ⭐){" "} </button>
        <button onClick={() => setFilter("low")} style={{ fontWeight: filter === "low" ? "bold" : "normal" }} > {" "} Low Rated (Below 3 ⭐){" "} </button>
        <button onClick={() => setFilter("unrated")} style={{ fontWeight: filter === "unrated" ? "bold" : "normal" }} > {" "} Unrated (0 ⭐){" "} </button>
      </div>

      {filteredItems.map((item) => (
        <div key={item.id}>
          <p>{item.name} - Rating: {item.rating}⭐</p>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} onClick={() => handleRating(item.id, star)}>{star}⭐</button>
            ))}
          </div>
        </div>
      ))}

      <div
        style={{
          marginTop: "30px",
          borderTop: "2px solid #ccc",
          paddingTop: "20px",
        }}>
        <h2>Statistics</h2>
        {allRatingsZero ? (
          <p><strong>No ratings available</strong></p>) : (
          <div>
            <p><strong>Average Rating:</strong> {averageRating}⭐</p>
            <p><strong>Highest Rated Food:</strong> {highestRated}</p>
            <p><strong>Lowest Rated Food:</strong> {lowestRated}</p>
            <p><strong>Foods with 4+ Stars:</strong> {countHighRated}</p>
          </div>
        )}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setFoodItems(initialFoodData)}
          style={{
            padding: "10px 20px",
            backgroundColor: "#ff6b6b",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}>Reset All Ratings</button>
      </div>
    </div>
  );
}
