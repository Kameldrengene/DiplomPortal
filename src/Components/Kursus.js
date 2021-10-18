import React from "react";
import {Grid, Paper, styled} from "@material-ui/core";
import {observer} from "mobx-react";
import {courseStore} from "../Stores/CourseStore";
import CourseTable from "./CourseTable";


class kursus extends React.Component {
    render() {
        var id = this.props.match.params.id
        return <div>
            <h1>Course {id}
            </h1>
            <Grid container spacing={2}>
                {courseStore.courses.filter(course => course.id === id).map((course, key) =>
                    <ul>
                        {course.Lektioner.map((course, key) =>
                        <li>{course.Dato} - {course.Beskrivelse} - {course.Lektier} - {course.Øvelser}</li>
                    )}
                    </ul>
                )}
                <CourseTable/>
            </Grid>

        </div>
    }
}

export default observer(kursus);