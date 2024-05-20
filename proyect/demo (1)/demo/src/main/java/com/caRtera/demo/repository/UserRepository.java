package com.caRtera.demo.repository;

import com.caRtera.demo.entity.User.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User,String> {
}
