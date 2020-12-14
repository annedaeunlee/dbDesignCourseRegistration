package com.example.wap.daos;

import com.example.wap.models.Course;
import com.example.wap.models.Enrollment;
import com.example.wap.models.Student;
import com.example.wap.repositories.StudentRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentDao {
    @Autowired
    StudentRepository studentRepository;
    @GetMapping("/findAllStudents")
    public Iterable<Student> findAllStudents() {
        return studentRepository.findAll();
    }
    @GetMapping("/findStudentById/{sid}")
    public Student findStudentById(
            @PathVariable("sid") Integer studentId) {
        return studentRepository.findById(studentId).get();
    }


    @GetMapping("/createStudent/{first}/{last}")
    public Student createStudent(
        @PathVariable("first") String first,
        @PathVariable("last") String last
    ) {
        Student student = new Student();
        student.setFirst(first);
        student.setLast(last);
        return studentRepository.save(student);
    }

    @GetMapping("/sectionList/{sid}")
    public Iterable<Enrollment> enrollmentList(
            @PathVariable("sid") Integer studentId
    ) {
        return studentRepository.findById(studentId).get().getSections();
    }
}
