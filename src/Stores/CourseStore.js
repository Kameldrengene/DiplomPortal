import {makeObservable, observable} from "mobx";

class CourseStore {

    courses = [];

    constructor() {
        makeObservable(this, {
            courses: observable,
        })
        this.fetchCourses()
    }

    async fetchCourses() {
        try{
            const response = await fetch(
                "https://raw.githubusercontent.com/VolkanIsik86/dummydata/main/courses.json",
                {method: 'GET'});
            const json = await response.json()
            this.courses = json
        } catch (e) {
            console.log('error', e)
        }
    }
}

export const courseStore = new CourseStore()

