package com.caRtera.demo.Controller;

import com.caRtera.demo.entity.User.User;
import com.caRtera.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/User")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public User createUser(@RequestBody User user) {
        try{
            return userRepository.save(user);
        }catch (Exception e){
            throw new RuntimeException(e.getMessage());
        }


    }
}