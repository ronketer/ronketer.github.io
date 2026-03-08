---
author: Ron Keter
pubDatetime: 2024-04-01T10:00:00Z
title: "Preemptive User-Level Threads Library"
slug: preemptive-user-level-threads-library
featured: false
draft: false
tags:
  - cpp
  - systems
  - linux
  - signals
  - projects
description: A user-level threading library in C++ for Linux implementing a preemptive round-robin scheduler with virtual timers and manual context switching.
---

## Preemptive User-Level Threads Library

**Technologies:** C++, Linux/Unix, Signals

This project implements a user-level threading library with preemptive scheduling, demonstrating deep understanding of operating systems concepts.

## Project Overview

User-level threads provide lightweight concurrency without kernel involvement. This library implements preemptive scheduling using signal-based timers, showcasing advanced systems programming techniques.

## Key Features

### Preemptive Round-Robin Scheduler

- Virtual timers using SIGVTALRM for time quantum enforcement
- Configurable time quantum for different workloads
- Fair CPU time distribution among threads

### Manual Context Switching

- Low-level context saving and restoration using sigsetjmp and siglongjmp
- Signal masking to protect critical sections
- Safe state transitions during context switches

### Memory Management

- Custom stack allocation for each thread
- Isolated execution stacks to prevent overflows
- Proper cleanup on thread termination

## Technical Implementation

### Thread Control Block

```cpp
struct Thread {
    int id;
    sigjmp_buf context;
    char* stack;
    ThreadState state;
    int quantum_count;
};
```

### Signal Handling

- SIGVTALRM for timer-based preemption
- Signal masking during critical operations
- Safe longjmp from signal handlers

## Operating Systems Concepts

- **Thread States:** Ready, Running, Blocked, Terminated
- **Scheduling:** Round-robin with time slicing
- **Synchronization:** Signal-safe operations
- **Resource Management:** Stack allocation and deallocation

## Challenges Solved

1. **Signal Safety:** Ensuring atomic operations during signal handling
2. **Stack Management:** Preventing overflow and corruption
3. **Context Preservation:** Correctly saving and restoring thread state
4. **Time Quantum:** Accurate timing using virtual timers

## Skills Demonstrated

- Operating systems internals
- Signal handling in Unix/Linux
- Low-level C++ programming
- Memory management
- Concurrent programming concepts

---

_This project is part of my portfolio demonstrating expertise in operating systems and systems programming._
