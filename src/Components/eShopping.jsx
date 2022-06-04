import React from "react";
import {Card,CardContent,Grid,Rating,Badge, Button} from '@mui/material'

export const EShopping=({prod})=>{
    return(
        <div>
            <Card>  
                 {/* /* style={{height:"300px"}} */}
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={11}>
                            <Badge badgeContent={`$ ${prod.price}`} max={9999} color="error">
                            <h3>{prod.title.substr(0,20)}{prod.title.length >25 &&"..."}</h3>
                            </Badge>
                        </Grid>
                        <Grid item xs={6}>
                        <h4>Category:{prod.category}</h4>
                            <p>{prod.description.substr(0,100)}</p>
                        </Grid>
                        <Grid item xs={6}>
                            <img style={{width:"100px",height:"110px"}} src={prod.image}/>
                            <Badge badgeContent={prod.rating.count} max={999} color="primary">
                            <Rating value={prod.rating.rate}/>
                            </Badge>
                            <Button variant="contained" color="error">Buy</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )

}