package com.example.wap.daos;

import com.example.wap.models.Course;
import com.example.wap.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CourseDao {
    @Autowired
    CourseRepository courseRepository;
    @GetMapping("/findAllCourses")
    public Iterable<Course> findAllCourses() {
        return courseRepository.findAll();
    }
    @GetMapping("/findCourseById/{cid}")
    public Course findCourseById(@PathVariable("cid") Integer cid) {
        return courseRepository.findById(cid).get();
    }
    @GetMapping("/deleteCourse/{cid}")
    public void deleteCourse(@PathVariable("cid") Integer cid) {
        courseRepository.deleteById(cid);
    }
    @GetMapping("/createCourse/{title}/{creditHours}/{courseNumber}/{term}")
    public Course createCourse(
            @PathVariable("title") String title,
            @PathVariable("creditHours") Integer creditHours,
            @PathVariable("courseNumber") Integer courseNumber,
            @PathVariable("term") String term
    ) {
        Course course = new Course();
        course.setTitle(title);
        course.setCreditHours(creditHours);
        course.setCourseNumber(courseNumber);
        course.setTerm(term);
        return courseRepository.save(course);
    }
    //when creating a new course and deleting, continues to increment when creating new ones
    //can we change that?

    @GetMapping("/updateCourse/{cid}/{title}/{creditHours}/{courseNumber}/{term}")
    public Course updateCourse(
            @PathVariable("cid") Integer cid,
            @PathVariable("title") String title,
            @PathVariable("creditHours") Integer creditHours,
            @PathVariable("courseNumber") Integer courseNumber,
            @PathVariable("term") String term) {
        Course course = courseRepository.findById(cid).get();
        course.setTitle(title);
        course.setCreditHours(creditHours);
        course.setCourseNumber(courseNumber);
        course.setTerm(term);
        return courseRepository.save(course);
    }
}
