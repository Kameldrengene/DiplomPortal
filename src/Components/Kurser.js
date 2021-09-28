import React from "react";
import {Grid, Paper, styled} from "@material-ui/core";
import {observer} from "mobx-react";
import {courseStore} from "../Stores/CourseStore";

// src: https://mui.com/components/grid/
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

class kurser extends React.Component{
    render() {
        return(
            <div className="container">
                <h1 className="center" >Courses</h1>
                <Grid container spacing={2}>
                    {courseStore.courses.map( (course, key) =>
                        <Grid item xs={12} md={4}>
                            <Item>
                                <h2>{course.name}</h2>
                                <img className="image"
                                     src={course.img}
                                     height={150}
                                     width={250}
                                />
                            </Item>
                        </Grid>
                    )}
                </Grid>
            </div>
        )
    }
}

export default observer(kurser);