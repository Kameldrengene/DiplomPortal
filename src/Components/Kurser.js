import React from "react";
import {Grid, Paper, styled} from "@material-ui/core";
import {observer} from "mobx-react";
import {courseStore} from "../Stores/CourseStore";
import { useHistory } from "react-router-dom";

// src: https://mui.com/components/grid/
const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

class kurser extends React.Component {
    constuctor() {
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange(newPath) {
        let path = newPath;
        this.props.history.push(path);
    }


    render() {
        return (
            <div className="container">
                <h1 className="center">Courses</h1>
                <Grid container spacing={2}>
                    {courseStore.courses.map((course, key) =>
                        <Grid item xs={12} md={4}>
                            <div onClick={()=>{
                                console.log("Trykket på: "+ course.id)
                                this.routeChange("/course/"+course.id)
                            }}>
                                <Item>
                                    <h2>{course.name}</h2>
                                    <img className="image"
                                         src={course.img}
                                         height={150}
                                         width={250}
                                    />
                                </Item>
                            </div>
                        </Grid>
                    )}
                </Grid>
            </div>
        )
    }
}

export default observer(kurser);