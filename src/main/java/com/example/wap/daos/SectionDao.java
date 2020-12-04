package com.example.wap.daos;

import com.example.wap.models.Course;
import com.example.wap.models.Section;
import com.example.wap.repositories.CourseRepository;
import com.example.wap.repositories.SectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SectionDao {
    @Autowired
    SectionRepository sectionRepository;
    @Autowired
    CourseRepository courseRepository;
    @GetMapping("/findAllSections")
    public Iterable<Section> findAllSections() {
        return sectionRepository.findAll();
    }
    @GetMapping("/findSectionById/{sid}")
    public Section findSectionById(
            @PathVariable("sid") Integer sid) {
        return sectionRepository.findById(sid).get();
    }
    @GetMapping("/findSectionsForCourse/{cid}")
    public List<Section> findSectionsForCourse(
            @PathVariable("cid") Integer cid) {
        return courseRepository.findById(cid).get().getSections();
    }
    @GetMapping("/createSectionForCourse/{cid}/{professor}/{lectureTime}/{capacity}" +
            "/{capacityRemaining}/{campus}")
    public Section createSectionForCourse(
            @PathVariable("cid") Integer cid,
            @PathVariable("professor") String professor,
            @PathVariable("lectureTime") String lectureTime,
            @PathVariable("capacity") Integer capacity,
            @PathVariable("capacityRemaining") Integer capacityRemaining,
            @PathVariable("campus") String campus) {
        Course course = courseRepository.findById(cid).get();
        Section section = new Section();
        section.setProfessor(professor);
        section.setLectureTime(lectureTime);
        section.setCapacity(capacity);
        section.setCapacityRemaining(capacityRemaining);
        section.setCampus(campus);
        section.setCourse(course);
        sectionRepository.save(section);
        return section;
    }
    @GetMapping("/deleteSection/{sid}")
    public void deleteSection(
            @PathVariable("sid") Integer sid) {
        sectionRepository.deleteById(sid);
    }

    //ALLOW UPDATING EACH FIELD
    @GetMapping("/updateSection/{sid}/{professor}/{lectureTime}/{capacity}\" +\n" +
            "            \"/{capacityRemaining}/{campus}")
    public Section updateSection(
            @PathVariable("sid") Integer sid,
            @PathVariable("professor") String professor,
            @PathVariable("lectureTime") String lectureTime,
            @PathVariable("capacity") Integer capacity,
            @PathVariable("capacityRemaining") Integer capacityRemaining,
            @PathVariable("campus") String campus) {
        Section section = sectionRepository.findById(sid).get();
        section.setProfessor(professor);
        section.setLectureTime(lectureTime);
        section.setCapacity(capacity);
        section.setCapacityRemaining(capacityRemaining);
        section.setCampus(campus);
        sectionRepository.save(section);
        return section;
    }
}
