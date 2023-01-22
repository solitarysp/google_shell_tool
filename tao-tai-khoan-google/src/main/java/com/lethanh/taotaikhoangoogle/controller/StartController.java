package com.lethanh.taotaikhoangoogle.controller;

import lombok.Builder;
import lombok.Data;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StartController {

  public static boolean state = false;

  @GetMapping("/start")
  public RP start() {
    return RP.builder()
        .state(state)
        .build();
  }

  @GetMapping("/set")
  public void set() {
    state = true;
  }

  @Data
  @Builder
  public static class RP {

    boolean state;
  }
}
