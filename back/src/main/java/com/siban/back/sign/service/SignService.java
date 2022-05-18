package com.siban.back.sign.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.siban.back.sign.domain.User;
import com.siban.back.sign.repository.SignRepository;

@Service
public class SignService{
   @Autowired
   private SignRepository signRepository;
   
//   회원가입
   public User insertUser(User user) {
      return signRepository.save(user);
   }

   
   public User findByUserId(String userId) {
      return signRepository.findByuserId(userId);
   }

   
   public User findByUserEmail(String userEmail) {
      return signRepository.findByuserEmail(userEmail);
   }


}