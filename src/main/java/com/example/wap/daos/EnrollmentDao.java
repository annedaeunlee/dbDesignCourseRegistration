package com.example.wap.daos;

import com.example.wap.models.Course;
import com.example.wap.models.Enrollment;
import com.example.wap.models.Section;
import com.example.wap.models.Student;
import com.example.wap.repositories.EnrollmentRepository;
import com.example.wap.repositories.SectionRepository;
import com.example.wap.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Iterator;

@RestController
public class EnrollmentDao {
    @Autowired
    EnrollmentRepository enrollmentRepository;
    @Autowired
    StudentRepository studentRepository;
    @Autowired
    SectionRepository sectionRepository;
    @GetMapping("/findAllEnrollments")
    public Iterable<Enrollment> findAllEnrollments() {
        return enrollmentRepository.findAll();
    }

    @GetMapping("/findEnrollment/{studentId}/{sectionId}")
    public Enrollment findEnrollmentById(@PathVariable("studentId") Integer studentId,
                                         @PathVariable("sectionId") Integer sectionId) {
        Iterable<Enrollment> enrollments = this.findAllEnrollments();
        Iterator<Enrollment> iter = enrollments.iterator();
        while (iter.hasNext()) {
            Enrollment enrollment = iter.next();
            if (enrollment.getStudentId() == studentId && enrollment.getSectionId() == sectionId) {
                return enrollment;
            }
        }
        return null;
    }

    @GetMapping("/deleteAllEnrollment")
    public void deleteAllEnrollment()
    {
        enrollmentRepository.deleteAll();
    }

    @GetMapping("/deleteEnrollment/{studentId}/{sectionId}")
    public void deleteEnrollment(@PathVariable("studentId") Integer studentId,
                                 @PathVariable("sectionId") Integer sectionId) {

        Iterable<Enrollment> enrollments = this.findAllEnrollments();
        Iterator<Enrollment> iter = enrollments.iterator();
        while (iter.hasNext()) {
            Enrollment enrollment = iter.next();
            if (enrollment.getStudentId() == studentId && enrollment.getSectionId() == sectionId) {
                enrollmentRepository.delete(enrollment);
            }
        }
    }
    @GetMapping("/createEnrollment/{studentId}/{sectionId}")
    public Enrollment createEnrollment(
            @PathVariable("studentId") Integer studentId,
            @PathVariable("sectionId") Integer sectionId
    ) {
        Student student = studentRepository.findById(studentId).get();
        Section section = sectionRepository.findById(sectionId).get();
        Enrollment enroll = new Enrollment();
        enroll.setStudentId(studentId);
        enroll.setSectionId(sectionId);
        enroll.setStudent(student);
        enroll.setSection(section);
        enrollmentRepository.save(enroll);
        return enroll;

    }
}
