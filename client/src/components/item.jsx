import { useState } from "react";
import { useDispatch } from 'react-redux'
import { Icon, Box, Typography, useTheme, Button } from '@mui/material'
import AddIcon from "@mui/material/add";
import RemoveIcon from "@mui/icon-material/Remove";
import { shades } from '../theme'
import { addToCart } from "../state/cart";
import { useNavigate } from "react-router-dom";

const Item = ({ item, width }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [count, setCount] = useState()
    const [isHovered, setIsHovered] = useState(false)

    const {
        palette: { neutral }
    } = useTheme()

    const [category, price, name, image] = item.attributes;

    const {
        data: {
            attributes: {
                formats: {
                    medium: { url },
                }
            }
        }
    } = image

    return (
        <Box width={width}>
            <Box position="relative"
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
            >
                <img
                    src={`http://localhost:1337${url}`}
                    alt={item.name}
                    width='300px'
                    height='400px'
                    onClick={() => navigate(`/item/${item.id}`)}
                    style={{ cursor: 'pointer' }}
                />
                <Box
                    display={isHovered ? "block" : "none"}
                    position='absolute'
                    bottom='10%'
                    left='0'
                    width='100%'
                    padding='0 5%'
                >
                    <Box display='flex' justifyContent='space-between'>
                        <Box
                            display='flex'
                            alignItems='center'
                            backgrounColor={shades.neutral[100]}
                            borderRadius='3px'
                        >
                            <Box
                                display="flex"
                                alignItems="center"
                                border={`1.5px solid ${shades.neutral[500]}`}
                            >
                                <IconButton
                                    // sort way to check that count does not go below 1 
                                    onClick={() => setCount(Math.max(count - 1, 1))}
                                >
                                    <RemoveIcon />
                                </IconButton>
                                <Typography color={shades.primary[300]}>{count}</Typography>
                                <IconButton
                                    onClick={() => setCount(count + 1)
                                    }
                                >
                                    <AddIcon />
                                </IconButton>
                            </Box>

                        </Box>

                        {/* Button  */}
                        <Button
                            onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
                            sx={{ backgroundColor: shades.primary[300], color: "white" }}
                        >
                            Add To Cart
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box mt='3px'>
                <Typography variant="subtitle2" color={neutral.dark}>
                    {category?.replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())
                    }
                </Typography>
                <Typography>
                    {name}
                </Typography>

                <Typography fontWeight="bold">${price}</Typography>
            </Box>
        </Box>
    )
}

export default Item