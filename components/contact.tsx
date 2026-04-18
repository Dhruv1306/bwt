import { useNavigate } from "react-router-dom"

export function contact() {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Contact</h2>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required /> <br />                
                {/* <button type="submit" onClick={() => navigate("/")}>Submit</button> */}
                <button type="submit" onClick={() => {
                    alert("Form submitted!!");
                    navigate("/")
                }}>Submit</button>
            </form>
        </div>
    )
}