import React, { useState, useEffect } from "react";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Button
} from "@mui/material";
import { Link } from "react-router-dom"; // Import Link
import axios from "axios";
import Layout from "./Layout/Layout";

const Val = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null); // To track error

    useEffect(() => {
        // Fetch data from the server endpoint
        axios.get("http://localhost:9030/view")
            .then(response => {
                setData(response.data); // Set fetched data to state
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Failed to load menu items. Please try again later.'); // Set error message
            });
    }, []);
    
    const [cart, setCart] = useState([]);

const addToCart = (item) => {
    setCart([...cart, item]);
};


    return (
        <Layout>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {error && <Typography color="error">{error}</Typography>} {/* Display error message if any */}
            {data.map((val, i) => (
                <Card key={val._id} sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
                    <CardActionArea>
                        <CardMedia
                            sx={{ minHeight: "400px" }}
                            component="img"
                            height="140"
                            image={val.imageUrl}
                            alt={val.fname} // Add alt text for accessibility
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {val.fname}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Price: ${val.fprice}
                            </Typography>
                            <Link to="/Payment" style={{ textDecoration: 'none' }}>
                                <Button variant="contained" color="primary">
                                    Buy Now
                                </Button>
                            </Link>
                            <Link to="/cart" style={{ textDecoration: 'none' }}></Link>
                            <Button variant="contained" color="primary" onClick={() => addToCart(val)}>
                              Add to Cart
                            </Button>
                            <Link/>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box></Layout>
    );
};

export default Val;